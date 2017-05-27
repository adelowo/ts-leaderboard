import './index.css';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './Component/App';
import AxiosClient from './Services/Http/axios';
//import MockClient from './Services/Http/mock';

ReactDOM.render(
  <App client={new AxiosClient()}/>,
  document.getElementById('root') as HTMLElement
);
