
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
    return delimiters;
}

export function splitString(delimiters, str) {
    let result = [str];
    delimiters.forEach(element => {
        str = str.replace(element, ',');
    });
    result = str.split(',');
    return result;
}