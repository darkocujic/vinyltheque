import React, {Component} from 'react';
import axios from 'axios';

import Header from './components/header';
import Main from './components/main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// const API_URL = 'http://localhost:3000/';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  getRecords() {
    axios({
      method: 'get',
      url: 'http://localhost:3000/records',
      
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      
    })
    .then((res) => {
      this.setState({
        data: Array.from(res.data.records)
      })
    })    
  }

  componentDidMount(){
    setInterval(this.getRecords(), 2000);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main records={this.state.data} />
      </div>
    );
    }
}

export default App;
