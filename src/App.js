import React, { Component } from 'react';
import TaxCalculator from './TaxCalculator';
import Weather from './Weather';
//import ChatClient from './ChatClient';

class App extends Component {
  render() {
    const components = [];
    components.push(<TaxCalculator />);
    components.push(<Weather />);
    //components.push(<ChatClient clientNum="1" />);
    //components.push(<ChatClient clientNum="2" />);

    const listOfComponents = components.map( (x, i) => (
      <div className="col-lg" key={i}>
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
