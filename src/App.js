import React, { Component } from 'react';
// eslint-disable-next-line
import TaxCalculator from './TaxCalculator';
import Weather from './Weather';

class App extends Component {
  render() {
    const components = [];
    components.push(<TaxCalculator />);
    components.push(<Weather />);

    const listOfComponents = components.map( (x, i) => (
      <div className="col-sm" key={i}>
        <div className="card shadow sm mb-3">
          <div className="card-body">{x}</div>
        </div>
      </div>)
    );

    return (
      <div className="container">
        <div className="row">{listOfComponents}</div>
      </div>
    );
  }
}

export default App;
