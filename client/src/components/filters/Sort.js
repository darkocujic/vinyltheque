import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';

function Sort(props) {
    const handleSort = (e) => {
        let [sort, order] = e.split('-');
        props.updateSort(sort);
        props.updateOrder(order);

    }

    return (
        <DropdownButton 
            title="Sort by..." 
            onSelect={(e) => handleSort(e)}
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
    );
}

export default Sort;