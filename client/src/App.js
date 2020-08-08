import React, {useState, useEffect} from 'react';
import axios from 'axios';

import Header from './components/header';
import Main from './components/main';

import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

// const API_URL = 'http://localhost:3000/';
axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

function App(props) {
  const [vinyls, setVinyls] = useState([]);

  useEffect(() => {
    // const getRecords = async () => {
    axios({
      method: 'get',
      url: 'http://localhost:3001/api/records',
      headers: {
          'Access-Control-Allow-Origin': '*'
        }      
    })
    .then((res) => {
      setVinyls(res.data.records)
    })    

    // }
  }, [])

  console.log(vinyls)
  return (
    <div className="App">
      <Header />
      <Main records={vinyls} />
    </div>
  );
}

export default App;