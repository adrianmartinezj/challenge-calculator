
export function parseDelimiters(str) {
    console.log('passed in string:', str);
    let delimiters = [",", "\\n"];
    console.log('delimiters:', delimiters);
    const customDelimiterPatt = /^\/\/(.+)\\n/
    let customDelimiters = [...str.matchAll(customDelimiterPatt)];
    console.log('customDelimiters:', customDelimiters);
}

// single char 
// ^\/\/(.+)\\n

// str.matchAll(regexp)

// custom delimiter any length
// \/\/\[(\W+)\]\\n