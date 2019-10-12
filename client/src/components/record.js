import React, { Component } from 'react';

import Col from 'react-bootstrap/Col';

class Record extends Component {

  constructor(props){
    super(props);
    this.props = props;
    this.record = props.record;
  }

  render() {
    return (
    <Col xl={3} lg={4} md={6} s={6} className="grid__record-single_card">
      <img src={this.record.img ? 
        `../img/covers/${this.record.img}` : 
        `https://via.placeholder.com/150/`  
      } 
        alt="record"
        width={200}
        height={200}
        />
      <h3 className="grid__record-artist">{this.record.artist}</h3>
      <h4>{this.record.album}</h4>
      <h6 className="grid__record-year">{this.record.year}</h6>
      <p className="grid__record-tags">{this.record.tags}</p>
    </Col>
    )
  };
}

export default Record;