
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

// single char 
// ^\/\/(.+)\\n

// str.matchAll(regexp)

// custom delimiter any length
// \/\/\[(\W+)\]\\n

//[*][!!][r9r]\n11r9r22*33!!44