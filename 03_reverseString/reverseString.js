const reverseString = function(reverseString) {
    output = '';
    for(let i = reverseString.length; i > 0; i--){
        output += reverseString.slice(i-1,i);
    };

    return output;
};

// Do not edit below this line
module.exports = reverseString;
