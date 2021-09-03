"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomShelters = exports.randomShelter = void 0;
const tools_1 = require("./tools");
const streets = ['Polna', 'Leśna', 'Słoneczna', 'Krótka', 'Szkolna', 'Ogrodowa', 'Lipowa', 'Łąkowa', 'Brzozowa', 'Kwiatowa'];
function randomShelter() {
    const address = `ul. ${(0, tools_1.randomArrayElement)(streets)} ${(0, tools_1.randomIntInRange)(1, 99)}${(0, tools_1.randomArrayElement)(['', '', '', '', '', '', '', '', '', 'A', 'B', 'C', 'D', 'E', 'F'])}`;
}
exports.randomShelter = randomShelter;
function randomShelters(n) {
}
exports.randomShelters = randomShelters;
