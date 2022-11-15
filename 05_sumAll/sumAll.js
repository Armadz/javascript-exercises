const sumAll = function(...params) {
    let secondNum;
    let firstNum;

    for(const i in params) {
        if (typeof params[i]!='number' || params[i] < 0) {
            return 'ERROR'
        };
    };

    if (params[0] > params[1]) {
        secondNum = params[0];
        firstNum = params[1];
    } else {
        firstNum = params[0];
        secondNum = params[1];
        };

    return ((secondNum - (firstNum -1))/2)*(firstNum + secondNum);
};

// Do not edit below this line
module.exports = sumAll;
