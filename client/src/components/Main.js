import React, { useState, useEffect } from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Grid from './Grid';
import Search from './Search';
import AddNew from './addnew'
import Filters from './Filters';
import Axios from 'axios';

function Main(props) {
    const [loading, setLoading] = useState(true);

    const [vinyls, setVinyls] = useState([]);
    
    const [totalPages, setTotalPages] = useState([1]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(12);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('artist');
    const [order, setOrder] = useState('asc');

    const [error, setError] = useState(false);
    const [errMsg, setErrMsg] = useState('');

    const getRecords = async () => {
        Axios
        .get('http://localhost:3001/api/records', {
            params: { search, page, sort, order, limit }
        })
        .then(res => {
            console.log(res.data)
            setVinyls(res.data.records);
            setTotalPages(Math.floor(res.data.count / limit) + 1);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
            setError(true);
            setErrMsg('Can\'t fetch records.')
        })
    }

    useEffect(() => {
        setLoading(true);
        getRecords();
    }, [page, limit, search, sort, order])

    return (
        <Row>
            <Col xl={9} md={9}>
                <Filters 
                    updateLimit={setLimit}
                    updateSort={setSort}
                    updateOrder={setOrder}
                />
                {
                    !error ?
                    (
                        !loading ? 
                        <Grid records={vinyls} total={totalPages} page={page} updatePage={setPage} /> :
                        <h1>still loading</h1>
                    ) :
                    <div>
                        <h1>Error</h1>
                        <p>{errMsg}</p>
                    </div>
                }
            </Col>
            <Col xl={3} md={3} >
                <Search handleSearch={setSearch}/>
                <AddNew />
            </Col>
        </Row>
    );
}
export default Main;

// class Main extends Component {

//     constructor(props) {
//         super(props);
//         this.props = props;
//         this.state = {
//             filtered: []
//         }

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSort = this.handleSort.bind(this);
//     }

//     componentDidMount() {
//         this.setState({
//             filtered: this.props.records
//         })
//     }

//     componentWillReceiveProps(nextProps) {
//         this.setState({
//             filtered: nextProps.records
//         })
//     }

//     handleSort(e) {
//         let by = e;
//         let sort = by.split('-')[0];
//         let order = by.split('-')[1];
//         let sortRecords = [];

//         if (order === 'asc') {
//             sortRecords = this.state.filtered.sort((reca, recb) => {
//                 if(reca[sort] < recb[sort]) { return -1; }
//                 if(reca[sort] > recb[sort]) { return 1; }
//                 return 0;
//             })
            
//         } else {
//             sortRecords = this.state.filtered.sort((reca, recb) => {
//                 if(reca[sort] > recb[sort]) { return -1; }
//                 if(reca[sort] < recb[sort]) { return 1; }
//                 return 0;
//             })
//         }

//         this.setState({
//             filtered: sortRecords
//         });

//     }

//     handleChange(e) {
//         let currentRecords = []
//         let newRecords = []

//         if (e.target.value !== '') {
//             currentRecords = this.props.records;
            
//             newRecords = currentRecords.filter((record) => {
//                 const artistlc = record.artist.toLowerCase();
//                 const albumlc = record.album.toLowerCase();
//                 const searchlc = e.target.value.toLowerCase();

//                 const tags = record.tags.toLowerCase();
//                 let tag = tags.split(',').map((tag) => {
//                    return tag.trim();                    
//                 });

//                 let reduced = tag.filter((single) => {
//                     if (single.indexOf(searchlc) !== -1) {
//                         return 1;
//                     } else {
//                         return 0;
//                     }
//                 });

//                 return( reduced.length || artistlc.indexOf(searchlc) !== -1 || albumlc.indexOf(searchlc) !== -1 || artistlc.concat(' ', albumlc).indexOf(searchlc) !== -1)
//             })
//         } else {
//             newRecords = this.props.records;
//         }

//         this.setState({
//            filtered: newRecords
//         });
//     }
  
//     render() {
//       return (
//         <Row>
//             <Col xl={9} md={9}>
//                 <Filters />
//                 <Grid records={this.state.filtered}/>
//             </Col>
//             <Col xl={3} md={3} >
//                 <Search handleChange={this.handleChange}/>
//                 <AddNew />
//             </Col>
//         </Row>
//       );
//       }
//   }
  
//   export default Main;
  