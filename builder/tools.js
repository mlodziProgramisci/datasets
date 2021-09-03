"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomBinary = exports.uniqueArray = exports.randomIntInRange = exports.randomFloatInRange = exports.randomArrayElement = void 0;
function randomArrayElement(array) {
    const index = Math.floor(array.length * Math.random());
    const result = array[index];
    if (!result) {
        console.warn(`---------------!!!---------------`);
        console.warn(`from array of ${array.length}`);
        console.warn(`selected index ${index}`);
        console.warn(`leading to ${result}`);
        console.warn(``);
    }
    return result;
}
exports.randomArrayElement = randomArrayElement;
function randomFloatInRange(a, b, precision) {
    const from = Math.min(a, b);
    const to = Math.max(a, b);
    if (typeof precision === "undefined")
        return from + Math.random() * (to - from);
    return Math.round(Math.pow(10, precision) * randomFloatInRange(a, b)) / Math.pow(10, precision);
}
exports.randomFloatInRange = randomFloatInRange;
function randomIntInRange(a, b) {
    const from = Math.min(a, b);
    const to = Math.max(a, b);
    return Math.floor((from + Math.random() * (to - from) + 1));
}
exports.randomIntInRange = randomIntInRange;
function uniqueArray(array, processor) {
    const _processor = processor || function (a) { return a; };
    const set = new Set();
    return array.filter(e => {
        if (set.has(_processor(e)))
            return false;
        set.add(_processor(e));
        return true;
    });
}
exports.uniqueArray = uniqueArray;
function randomBinary(probability) {
    if (typeof probability === "undefined")
        return Math.random() < 0.5;
    return Math.random() < probability;
}
exports.randomBinary = randomBinary;
