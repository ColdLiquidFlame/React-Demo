import React, { Component } from 'react';
import { OpenWeather } from './OpenWeather';

class Weather extends Component {
    constructor(props) {
        super(props);
        this.state = {zipCode: '', weather: null, isValidZipCode: false};
    }    

    render() {
        const hasWeather = this.state.weather !== null;
        return (
            <>
                <h1>Weather App</h1>
                <div className="container">
                    <div className="form-group">
                        <label htmlFor="zip">Zip code</label>
                        <input id="zip"
                            type="text"
                            className="form-control"
                            placeholder="Enter zip code"
                            onChange={this.handleZipInputChange}
                            value={this.state.zipCode}
                            maxLength="5" />
                    </div>
                    <button className="btn btn-primary"
                         type="button"
                         onClick={this.handleZipButtonClick}
                         disabled={this.state.zipCode.length !== 5}
                    >Search</button>
                </div>
                { hasWeather &&
                <div className="container mt-3">
                    <div className="card shadow p-3" style={{width: "12em"}}>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-sm" style={{textAlign: "center"}}>
                                    <h6>{this.state.weather.cityName}</h6>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm" style={{textAlign: "center"}}>
                                    <img className="align-middle" src={this.state.weather.weatherIcon} alt={this.state.weather.weatherDescription} style={{width: "5em"}} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm" style={{textAlign: "center"}}>
                                    {this.state.weather.currentTemp.toFixed(0)} &deg;F
                                </div>
                            </div>
                        </div>
                    </div>
                </div> }
            </>
        );
    }

    handleZipInputChange = (e) => {        
        if(isNaN(Number(e.target.value))) {
            return;
        }

        this.setState({zipCode: e.target.value});
    }

    handleZipButtonClick = async () => {    
        const weather = await OpenWeather.getCurrentWeather(this.state.zipCode);

        this.setState({weather: weather}); 
    }
}

export default Weather;