import React from 'react';

import Sort from './filters/Sort';
import PerPage from './filters/PerPage';
import DisplayType from './filters/DisplayType';

function Filters(props) {
    return (
        <div>
            <ul>
                <li><DisplayType /></li>
                <li><PerPage updateLimit={props.updateLimit}/></li>
                <li>
                    <Sort 
                        updateSort={props.updateSort}
                        updateOrder={props.updateOrder}
                    />
                </li>
            </ul>
        </div>
    );
}

export default Filters;