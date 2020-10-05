function isInteger(value) {
    return Number.isInteger(parseInt(value));
}

function validateShift(value) {
    if (!isInteger(value)) {
        process.stderr.write('Error: Shift should be an integer!');
        process.exit(1);
    }
    return parseInt(value);
}

function validateAction(action) {
    if (action.toString().toLowerCase() !== 'encode' && action.toString().toLowerCase() !== 'decode') {
        process.stderr.write(`Error: Action should be 'encode' or 'decode'!`);
        process.exit(1);
    }

    return action;
}

module.exports = {
    validateAction,
    validateShift
};