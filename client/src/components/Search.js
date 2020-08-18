import React from 'react';

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

function Search(props) {
  return (
    <Col className="grid__search">
      <h3>Search...</h3>
      <Form>
        <Form.Control 
            type="text"
            placeholder="Type something..." 
            id="search"
            onChange={e => props.handleSearch(e.target.value)}
        />
      </Form>
    </Col>
  );
}

export default Search;