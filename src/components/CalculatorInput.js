import React from 'react';

const calculatorInput = (props) => {
    const {
        addClick
    } = props;

    return (
        <div>
            <input />
            <button onClick={addClick}>Add</button>
        </div>
    );
}

export default calculatorInput;