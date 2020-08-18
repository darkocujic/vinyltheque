import React from 'react';

import Col from 'react-bootstrap/Col';

function Record(props) {
  return (
    <Col xl={3} lg={4} md={6} s={6} className="grid__record-single_card">
      <img src={props.record.img ? 
        `../img/covers/${props.record.img}` : 
        `https://via.placeholder.com/150/`  
      } 
        alt="record"
        width={200}
        height={200}
        />
      <h3 className="grid__record-artist">{props.record.artist.artist}</h3>
      <h4>{props.record.album}</h4>
      <h6 className="grid__record-year">{props.record.year}</h6>
      <p className="grid__record-tags">{props.record.tags}</p>
    </Col>
  );
}

export default Record;