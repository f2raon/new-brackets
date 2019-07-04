module.exports = function check(str, bracketsConfig) {
    var brackets = str.split('');
    return checking(brackets, bracketsConfig);
}


// main algorigthm
function checking(brackets, bracketsConfig) {
    var list = [];
    for (let i = 0; i < brackets.length; i++) {
        var closingBracket = getCLosingBracket(bracketsConfig, brackets[i]);
        // console.log('0. clos: ' + closingBracket + '; let: ' + brackets[i]);
        if (list.length == 0 && closingBracket === false) {
            // console.log('1. clos: ' + closingBracket + '; let: ' + brackets[i]);
            return false;
        } else if (brackets[i] == getCLosingBracket(bracketsConfig, list[list.length-1])) {
            list.pop();
            // console.log('3. clos: ' + closingBracket + ' list: ' + list);
            continue;
        } else if (closingBracket !== false) {
            list.push(brackets[i]);
            // console.log('2. clos: ' + closingBracket + ' list: ' + list);
            continue;
        }
        // console.log('clos: ' + closingBracket + ' list: ' + list);
        return false;
    }
    // console.log('list: ' + list);
    if (list.length == 0) return true;
    return false;
}

// returns closing tag for specified tag if exists, otherwise returns false
function getCLosingBracket(bracketsConfig, bracket) {
    for (let i = 0; i < bracketsConfig.length; i++) {
        if (bracketsConfig[i][0] == bracket) return bracketsConfig[i][1];
    }
    return false;
}
