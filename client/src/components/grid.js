import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import Record from './record';

class Grid extends Component {

    constructor(props){
			super(props);
			this.props = props;

			this.state = {
				filtered: []
			}
			
			this.handleChange = this.handleChange.bind(this);

		}
		
		componentDidMount() {
			this.setState({
				filtered: this.props.records
			})
		}
	
		componentWillReceiveProps(nextProps) {
			this.setState({
				filtered: nextProps.records
			})
		}

		handleChange(e) {
			console.log('handleChange');
			let currentRecords = []
			let newRecords = []

			if (e.target.value !== '') {
				currentRecords = this.props.records;

				newRecords = currentRecords.filter((record) => {
					console.log(record);
					const artistlc = record.artist.toLowerCase();
					const albumlc = record.album.toLowerCase();
					const searchlc = e.target.value.toLowerCase();

					return(artistlc.indexOf(searchlc) !== '-1' || albumlc.indexOf(searchlc) !== '-1')
				})
			} else {
				newRecords = this.props.records;
			}

			this.setState({
				filtered: newRecords
			});
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