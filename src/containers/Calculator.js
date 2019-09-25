import React from 'react';
import CalculatorInput from '../components/CalculatorInput';

const Calculator = (props) => {

    const handleAddClick = (e) => {
        console.log('Add clicked!');
    }

    return (
        <CalculatorInput 
            addClick={handleAddClick}
            />
    );
}

export default Calculator;