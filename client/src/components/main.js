import React, {Component} from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Grid from './grid';
import Search from './search';
import AddNew from './addnew'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

class Main extends Component {

    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            filtered: []
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSort = this.handleSort.bind(this);
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

    handleSort(e) {
        let by = e;
        let sort = by.split('-')[0];
        let order = by.split('-')[1];
        let sortRecords = [];

        if (order === 'asc') {
            sortRecords = this.state.filtered.sort((reca, recb) => {
                if(reca[sort] < recb[sort]) { return -1; }
                if(reca[sort] > recb[sort]) { return 1; }
                return 0;
            })
            
        } else {
            sortRecords = this.state.filtered.sort((reca, recb) => {
                if(reca[sort] > recb[sort]) { return -1; }
                if(reca[sort] < recb[sort]) { return 1; }
                return 0;
            })
        }

        this.setState({
            filtered: sortRecords
        });

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

                const tags = record.tags.toLowerCase();
                let tag = tags.split(',').map((tag) => {
                   return tag.trim();                    
                });

                let reduced = tag.filter((single) => {
                    if (single.indexOf(searchlc) !== -1) {
                        return 1;
                    } else {
                        return 0;
                    }
                });

                return( reduced.length || artistlc.indexOf(searchlc) !== -1 || albumlc.indexOf(searchlc) !== -1 || artistlc.concat(' ', albumlc).indexOf(searchlc) !== -1)
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
            <Col xl={9} md={9}>
                <DropdownButton 
                    title="Sort by..." 
                    onSelect={(e) => this.handleSort(e)}
                    className="mt-4 grid__sort-by"
                    variant="secondary"   
                >
                    <Dropdown.Item eventKey="artist-asc">Artist ASC</Dropdown.Item>
                    <Dropdown.Item eventKey="artist-desc">Artist DESC</Dropdown.Item>
                    <Dropdown.Item eventKey="album-asc">Album ASC</Dropdown.Item>
                    <Dropdown.Item eventKey="album-desc">Album DESC</Dropdown.Item>
                    <Dropdown.Item eventKey="year-asc">Year ASC</Dropdown.Item>
                    <Dropdown.Item eventKey="year-desc">Year DESC</Dropdown.Item>
                </DropdownButton>
                <Grid records={this.state.filtered}/>
            </Col>
            <Col xl={3} md={3} >
                <Search handleChange={this.handleChange}/>
                <AddNew />
            </Col>
        </Row>
      );
      }
  }
  
  export default Main;
  