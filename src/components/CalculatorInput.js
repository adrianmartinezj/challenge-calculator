import React from 'react';

const calculatorInput = (props) => {
    const {
        updateValue,
        addSubmit,
    } = props;

    return (
        <form onSubmit={addSubmit}>
            <input onChange={updateValue}/>
            <button type="submit" onClick={addSubmit}>Add</button>
        </form>
    );
}

export default calculatorInput;