import React, { useState } from 'react';
import { parseDelimiters, addString } from '../helpers/helpers';
import CalculatorInput from '../components/CalculatorInput';
import FormulaDisplay from '../components/FormulaDisplay';

const Calculator = (props) => {

    const [inputValue, setInputValue] = useState("");

    const [resultValue, setResultValue] = useState(0);

    const [formulaValue, setFormulaValue] = useState("");

    const handleAddClick = (e) => {
        console.log('Add clicked!', inputValue);
        let elements = parseDelimiters(inputValue);
        const result = addString(elements);
        setResultValue(result.sum);
        setFormulaValue(result.formula);
        e.preventDefault();
    }

    const handleInputChange = (e) => {
        console.log('e.target.value:', e.target.value);
        setInputValue(e.target.value);
    }

    return (
        <div>
            <CalculatorInput 
                addSubmit={handleAddClick}
                updateValue={handleInputChange}
                resultValue={resultValue}
                />
            <FormulaDisplay 
                formula={formulaValue}
                />
        </div>
    );
}

export default Calculator;