import React from 'react';

function PerPage(props) {
    const handleUpdate = (e) => {
        props.updateLimit(e.target.innerText)
    }

    return (
        <div>
            <a href="#" onClick={handleUpdate}>12</a> | <a href="#" onClick={handleUpdate}>24</a>
        </div>
    );
}

export default PerPage;