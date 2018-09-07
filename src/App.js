import React, { Component } from 'react';
import data from './data/phones.json'


class App extends Component {
  render() {
    console.log(data[0].deviceSummary)
    return (
      <div>
        <h1>{data[0].groupName}</h1>
        <h4>{data[0].deviceSummary[0].displayDescription}</h4>
      </div>
    );
  }
}

export default App;
