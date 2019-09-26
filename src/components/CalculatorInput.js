import React from 'react';

const calculatorInput = (props) => {
    const {
        updateValue,
        resultValue,
        addSubmit,
    } = props;

    return (
        <form onSubmit={addSubmit}>
            <input onChange={updateValue}/>
            <button type="submit" onClick={addSubmit}>Add</button>
            <div>
                <h3>Result: </h3>
                <h3>{resultValue}</h3>
            </div>
        </form>
    );
}

export default calculatorInput;