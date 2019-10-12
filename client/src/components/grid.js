import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Record from './record';

class Grid extends Component {

    constructor(props){
			super(props);
			this.props = props;
		}
		
    render() {
      return (
        <Container fluid={true}>
          <Row className="grid__row">
						{this.props.records.map((record) => {
							return <Record
								key={record.id}
								record={record}
							/>
						})}
					</Row>            
				</Container>
        )
    };
}

export default Grid;