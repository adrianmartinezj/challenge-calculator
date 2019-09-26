
export function parseDelimiters(str) {
    // Start with our default delimiters
    let delimiters = [",", "\\n"];
    // Find all delimiters that may be defined in the //{delimiter}\n notation
    const customDelimiterPatt = /^\/\/(.+)\\n/
    let customDelimiters = [...str.matchAll(customDelimiterPatt)];
    const multipleDelimiterPatt = /[\[\]]/g
    const tempCommaReplace = /\]\[/g
    if (customDelimiters[0]){
        // If delimiter was defined with brackets, split along '][' instances, remove
        // trailing and leading brackets
        let result = customDelimiters[0][1];
        result = result.replace(tempCommaReplace, ',');
        result = result.replace(multipleDelimiterPatt, '');
        delimiters.push(...result.split(","));
    }
    // Remove custom delimiter definitions from front of string before splitting
    let trimmedStr = str.replace(customDelimiterPatt, '');
    return splitString(delimiters, trimmedStr);
}

function splitString(delimiters, str) {
    let result = [str];
    // Iterate through each of the defined delimiters in our list
    delimiters.forEach(element => {
        let delimiter = element;
        // We need to escape special characters in order to send to RegExp
        if (/\W/g.test(element))
            delimiter = element.match(/\W/g).map((el) => '\\' + el).join('')
        var re = new RegExp(delimiter, 'g');
        str = str.replace(re, ',');
    });
    result = str.split(',');
    return result;
}

//date.split(/[.,\/ -]/)

export function addString(operands) {
    console.log('operands:', operands)
    let sum = 0;
    // Iterate through each of our operands, returning 0 for invalid results
    operands.forEach(operand => {
        sum += validateElement(operand)
    });
    return sum;
}


function validateElement(element) {
    let validated = 0;
    let numberOnlyPatt = /^[0-9]+$/
    // Check for anything that is a number, otherwise remain 0
    if(numberOnlyPatt.test(element))
        validated = parseInt(element, 10);
    console.log('validated:', validated);
    return validated;
}