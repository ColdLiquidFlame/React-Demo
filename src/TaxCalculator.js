import React, { Component } from 'react';

class TaxCalculator extends Component {
    constructor(props) {
        super(props)
        this.state = { subTotal: 0, tax: 0.0825, total: 0 };
    }

    render() {
        return (
            <>
                <h1>Tax Calculator</h1>
                <div className="container">
                    <div className="form-group">
                        <label htmlFor="sub_total">Sub-total</label>
                        <input id="sub_total" type="number" className="form-control" placeholder="Enter sub-total ($)" value={this.state.subTotal} onChange={this.handleSubTotalChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tax">Tax</label>
                        <input id="tax" type="number" className="form-control" placeholder="tax ($)" value={this.state.tax} onChange={this.handleTaxChange} />
                    </div>
                    
                </div>
                <div className="container">
                    <h6>Total: ${this.state.total}</h6>
                </div>
            </>
        )
    }

    handleSubTotalChange = (e) => {
        e.preventDefault()
        this.setState({ subTotal: e.target.value });
        this.calculateTax(e);
    }

    handleTaxChange = (e) => {
        e.preventDefault();
        this.setState({ tax: e.target.value });
        this.calculateTax(e);
    }

    calculateTax = (e) => {
        e.preventDefault();
        console.log("Calculating tax...");

        this.setState((state) => {
            let total = (state.subTotal * (1 + state.tax)).toFixed(2);
            console.log("SubTotal: " + state.subTotal + " | Tax: " + state.tax + " | Total: " + total);
            return { total };
        });
    }
}

export default TaxCalculator;