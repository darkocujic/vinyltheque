import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/Header';
import Main from './components/Main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

// const API_URL = 'http://localhost:3000/';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

function App(props) {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;