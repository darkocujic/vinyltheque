import React, {Component} from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/row';

import Grid from './grid';
import Search from './search';

class Main extends Component {

    constructor(props) {
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
        let currentRecords = []
        let newRecords = []

        if (e.target.value !== '') {
            currentRecords = this.props.records;
            
            newRecords = currentRecords.filter((record) => {
                const artistlc = record.artist.toLowerCase();
                const albumlc = record.album.toLowerCase();
                const searchlc = e.target.value.toLowerCase();

                return(artistlc.indexOf(searchlc) !== -1 || albumlc.indexOf(searchlc) !== -1)
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
        <Row>
        <Col xl={9} md={8}>
            <Grid records={this.state.filtered}/>
        </Col>
        <Col xl={3} md={4}>
            <Search handleChange={this.handleChange}/>
        </Col>
        </Row>
      );
      }
  }
  
  export default Main;
  