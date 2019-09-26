import React, { useState } from 'react';
import { parseDelimiters, addString } from '../helpers/helpers';
import CalculatorInput from '../components/CalculatorInput';

const Calculator = (props) => {

    const [inputValue, setInputValue] = useState("");

    const [resultValue, setResultValue] = useState(0);

    const handleAddClick = (e) => {
        console.log('Add clicked!', inputValue);
        let elements = parseDelimiters(inputValue);
        setResultValue(addString(elements));
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        console.log('e.target.value:', e.target.value);
        setInputValue(e.target.value);
    }

    return (
        <CalculatorInput 
            addSubmit={handleAddClick}
            updateValue={handleInputChange}
            resultValue={resultValue}
            />
    );
}

export default Calculator;