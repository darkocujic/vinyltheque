import React, {Component} from 'react';
import axios from 'axios';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/row';

import Header from './components/header';
import Grid from './components/grid';
import Search from './components/search';

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
      console.log(res.data.records)
      this.setState({
        data: Array.from(res.data.records)
      })
      console.log(this.state.data);
    })    
  }

  componentDidMount(){
    this.getRecords();
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Row>
          <Col xl={9} md={8}>
            {/* {console.log('aa')}
            {console.log(this.state.data)} */}
            <Grid records={this.state.data}/>
          </Col>
          <Col xl={3} md={4}>
            <Search />
          </Col>
        </Row>
      </div>
    );
    }
}

export default App;
