import React from 'react';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';

import Record from './Record';

function Grid(props) {
	const updatePage = (e) => {
		console.log(e.target.innerText)
		props.updatePage(e.target.innerText)
	}

	return (
        <Container fluid={true}>
          	<Row className="grid__row">
				{
					props.records.map((record) => {
						return <Record
							key={record.id}
							record={record}
						/>
					})
				}
				<Pagination>
					{
						[...Array(props.total)].map((_, i) => i+1).map(paginationPage => {
							return (
							<Pagination.Item key={paginationPage} active={paginationPage === props.page} onClick={updatePage}>
								{paginationPage}
							</Pagination.Item>
							)
						})
					}
				</Pagination>
			</Row>            
		</Container>
	);
}

export default Grid;