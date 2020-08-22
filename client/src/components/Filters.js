import React from 'react';

import Sort from './filters/Sort';
import PerPage from './filters/PerPage';
import DisplayType from './filters/DisplayType';

function Filters(props) {
    return (
        <div className="filters">
            <div className="filters__row filters__first">
                <DisplayType />
                <PerPage
                    updateLimit={props.updateLimit}
                    currentLimit={props.currentLimit}
                    />
            </div>
            <div className="filters__row filters__second">
                <Sort 
                    updateSort={props.updateSort}
                    updateOrder={props.updateOrder}
                    currentSort={props.currentSort}
                    currentOrder={props.currentOrder}
                />
            </div>
        </div>
    );
}

export default Filters;