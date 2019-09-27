import React from 'react';

const formulaDisplay = (props) => {
    const {
        formula
    } = props;

    return (
        <div>
            <h4>Formula:</h4>
            <h5>{formula}</h5>
        </div>
    )
}

export default formulaDisplay;