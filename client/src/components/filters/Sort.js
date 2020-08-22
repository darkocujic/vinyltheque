import React from 'react';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { MdPeople } from 'react-icons/md';
import { FaRecordVinyl, FaLongArrowAltDown, FaLongArrowAltUp } from 'react-icons/fa';
import { BsCalendarFill } from 'react-icons/bs';

function Sort(props) {
    const handleSort = (e) => {
        props.updateOrder(e.target instanceof SVGElement ? e.target.closest('div').dataset.sort : e.target.dataset.sort);
    }
    
    const handleBy = (e) => {
        props.updateSort(e.target instanceof SVGElement ? e.target.closest('div').dataset.by : e.target.dataset.by);
    }

    return (
        <div className="filters__group filter__sort">
            <div className="filter__sort-by">
                <div className={"filter__single filter__left" + (props.currentSort == 'artist' ? ' used' : '')} data-by="artist" onClick={handleBy}><MdPeople /></div>
                <div className={"filter__single" + (props.currentSort == 'album' ? ' used' : '')} data-by="album" onClick={handleBy}><FaRecordVinyl /></div>
                <div className={"filter__single filter__right" + (props.currentSort == 'year' ? ' used' : '')} data-by="year" onClick={handleBy}><BsCalendarFill /></div>
            </div>
            <div className="filter__sort-sort">
                <div className={"filter__single filter__left" + (props.currentOrder == 'asc' ? ' used' : '')} data-sort="asc" onClick={handleSort}><FaLongArrowAltDown /></div>
                <div className={"filter__single filter__right" + (props.currentOrder == 'desc' ? ' used' : '')} data-sort="desc" onClick={handleSort}><FaLongArrowAltUp /></div>                
            </div>
        </div>
    );
}

export default Sort;