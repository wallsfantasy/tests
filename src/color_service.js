const LIGHTBLUE = '#E6F1F6';

function byLastChar(text) {
    const lastChar = text.substr(-1);
    return /^\d+$/.test(lastChar) ? LIGHTBLUE : null;
}

module.exports = {
    byLastChar: byLastChar,
};
