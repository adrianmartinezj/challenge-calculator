import React, { useState } from 'react';
import CalculatorInput from '../components/CalculatorInput';

const Calculator = (props) => {

    const [inputValue, setInputValue] = useState("");

    const handleAddClick = (e) => {
        console.log('Add clicked!', inputValue);
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
            />
    );
}

export default Calculator;