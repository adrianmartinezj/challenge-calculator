import React from 'react';
import { parseDelimiters, addString } from '../helpers/helpers';

// Because we're not handling state, UnitTester is a component. We will only be using static values to test.
const unitTester = (props) => {
    const handleAdditionTest = (e) => {
        let testArray = []
        //Randomly generate elements inside bounds
        for(var i = 0; i < 100; i++) {
            testArray.push(Math.floor(Math.random() * 1000))
            if (i % 5 === 0 && i !== 0)
                console.log(addString(testArray.slice(i-5,i)));
        }
        //Randomly generate elements outside bounds
        testArray = []
        for(var i = 0; i < 100; i++) {
            testArray.push(Math.floor(Math.random() * 100000))
            if (i % 5 === 0 && i !== 0)
                console.log(addString(testArray.slice(i-5,i)));
        }
    }

    const handleDelimiterTest = (e) => {
        // Some edge cases that could be randomly generated given more time.
        let delimiterTest = [
            "//;\\n2;5",
            "//[***]\\n11***22***33",
            "//[*][!!][r9r]\\n11r9r22*33!!44",
            "1\\n2,3",
            "1,2,3,4,5,6,7,8,9,10,11,12",
            "",
            "0",
            "11111111111111111111111111111111-1,-1;1,0"
        ]

        delimiterTest.forEach((el, ind) => {
            let elements = parseDelimiters(el);
            console.log(ind, elements)
        });
    }

    return (
        <div>
            <p style={{fontStyle: 'italic'}}>Open console to find results...</p>
            <button onClick={handleDelimiterTest}>Delimiter Test</button>
            <button onClick={handleAdditionTest}>Addition Test</button>
        </div>
    )
}

export default unitTester;