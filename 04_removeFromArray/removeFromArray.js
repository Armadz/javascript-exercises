const removeFromArray = function(arr, ...value) {
    for(let i = 0; i < value.length; i++){
        let index = arr.indexOf(value[i]);
        if (index > -1) {
        arr.splice(index, 1);
        };
    };
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
