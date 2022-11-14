const repeatString = function(str, count) {
    
    let output = ''

    if(count < 0) {
        return 'ERROR'
    };
    
    for(let i=0; i < count; i++) {
        output += str
    };
    return output
};

// Do not edit below this line
module.exports = repeatString;
