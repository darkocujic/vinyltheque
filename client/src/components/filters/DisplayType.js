import React from 'react';
import { FaAlignJustify, FaGripHorizontal } from 'react-icons/fa';

function DisplayType(props) {
    return (
        <div className="filters__group filter__display">
            {/* TODO: check for active display type */}
            <div className={"filter__single filter__display-grid filter__left"}>
                <FaGripHorizontal />
            </div>
            <div className="filter__single filter__display-list filter__right">
                <FaAlignJustify />
            </div>
        </div>
    );
}

export default DisplayType;