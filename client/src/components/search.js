import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

class Search extends Component {

    constructor(props){
      super(props);
      this.props = props;
    //   console.log('this.props');
    //   console.log(this.props);
    }
  
    render() {
      return (
      <Col className="grid__search">
        <h3>Search...</h3>
        <Form>
            <Form.Control 
                type="text"
                placeholder="Type something..." 
                id="search"
                onChange={e => this.props.handleChange(e)}
                />
        </Form>
      </Col>
      )
    };
  }
  
  export default Search;