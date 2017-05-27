import * as React from 'react';
import BaseComponent from './BaseComponent';
import LeaderBoard from './LeaderBoard';
import HTTPClient from './../Services/Http/client';
import './App.css';

const logo = require('./../logo.svg');

interface AppProps {
  client: HTTPClient;
};

class App extends BaseComponent<AppProps, null> {

  doRender(): React.ReactElement<{}> {

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="pad">Free codecamp Leadership board implementation in Typescript</h2>
        </div>
        <p className="App-intro">
                <LeaderBoard client={this.props.client} />
        </p>
      </div>
    );
  }
}

export default App;
