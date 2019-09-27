
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
        if (element === '\\n')
            delimiter = '\\\\n'
        else if (/\W/g.test(element))
            delimiter = element.match(/\W/g).map((el) => '\\' + el).join('')
        var re = new RegExp(delimiter, 'g');
        str = str.replace(re, ',');
    });
    result = str.split(',');
    return result;
}

export function addString(operands) {
    let sum = 0;
    let negativeElements = []
    // Iterate through each of our operands, returning 0 for invalid results
    operands.forEach(operand => {
        let result = validateElement(operand)
        if (result.denied !== '')
            negativeElements.push(result.denied)
        sum += result.operand;
    });
    if (negativeElements.length > 0) {
        alert('Negative numbers detected: ' + negativeElements.join(','))
    }
    return sum;
}

function validateElement(element) {
    console.log('element', element);
    let validated = 0;
    let negative = '';
    const numberOnlyPatt = /^[0-9]+$/
    const negativePatt = /^-[0-9]+$/
    // Check for anything that is a number, otherwise remain 0
    if (numberOnlyPatt.test(element)) {
        validated = parseInt(element, 10);
        if (validated > 1000)
            validated = 0;
    }
    else if (negativePatt.test(element))
        negative = element;
    const result = { operand: validated, denied: negative}
    return result;
}