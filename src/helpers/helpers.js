
export function parseDelimiters(str) {
    let delimiters = [",", "\\n"];
    const customDelimiterPatt = /^\/\/(.+)\\n/
    let customDelimiters = [...str.matchAll(customDelimiterPatt)];
    const multipleDelimiterPatt = /[\[\]]/g
    const tempCommaReplace = /\]\[/g
    if (customDelimiters[0]){
        let result = customDelimiters[0][1];
        result = result.replace(tempCommaReplace, ',');
        result = result.replace(multipleDelimiterPatt, '');
        delimiters.push(...result.split(","));
    }
    let trimmedStr = str.replace(customDelimiterPatt, '');
    return splitString(delimiters, trimmedStr);
}

function splitString(delimiters, str) {
    let result = [str];
    // delimiters.forEach(element => {
    //     var re = new RegExp(element, "g");
    //     console.log('re:', re)
    //     str = str.replace(re, ',');
    // });
    // let re = new RegExp('[', ...delimiters, ']')
    let re = new RegExp('+')
    console.log('re:', re);
    result = str.split(',');
    return result;
}

//date.split(/[.,\/ -]/)

export function addString(operands) {
    console.log('operands:', operands)
    let sum = 0;
    operands.forEach(operand => {
        sum += validateElement(operand)
    });
    console.log('sum:', sum)
}


function validateElement(element) {
    let validated = 0;
    let numberOnlyPatt = /^[0-9]+$/
    if(numberOnlyPatt.test(element))
        validated = parseInt(element, 10);
    console.log('validated:', validated)
    return validated;
}