"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.randomDogs = exports.randomDog = void 0;
const tools_1 = require("./tools");
function randomDog(kinds, nicknames, flags) {
    const kind = (0, tools_1.randomArrayElement)((0, tools_1.uniqueArray)(kinds, kind => kind.name));
    const dog = {
        nickname: (0, tools_1.randomArrayElement)(nicknames),
        kindName: kind.name,
        color: (0, tools_1.randomArrayElement)(kind.colors),
        mass: (0, tools_1.randomFloatInRange)(kind.minHealthyMass * 0.75, kind.maxHealthyMass * 1.35, 1),
        age: (0, tools_1.randomIntInRange)(1, kind.maxTypicalLifespan),
    };
    if (flags.includes("addHelpOpportunities")) {
        dog.needsBathIn = (0, tools_1.randomBinary)(0.05) ? 0 : (0, tools_1.randomIntInRange)(1, 30);
        dog.needsHealthCheckupIn = (0, tools_1.randomBinary)(0.05) ? 0 : (0, tools_1.randomIntInRange)(1, 30);
        dog.lastWalk = (0, tools_1.randomBinary)(0.02) ? (0, tools_1.randomIntInRange)(4, 7) : (0, tools_1.randomIntInRange)(0, 3);
    }
    if (flags.includes("addAccomodationNeeds")) {
        dog.needsCostantCheckups = (0, tools_1.randomBinary)(0.1);
        dog.needsSpecialFood = (0, tools_1.randomBinary)(0.25);
        dog.needsPeaceAndQuiet = (0, tools_1.randomBinary)(0.01);
        dog.needsAction = (!dog.needsPeaceAndQuiet) && kind.typicalActivityLevel === "hyperactive" || (0, tools_1.randomBinary)(0.35);
        dog.needsSolitaryRoom = (0, tools_1.randomBinary)(0.08);
        dog.needsBiggerKennel = kind.typicalActivityLevel === "hyperactive" && (0, tools_1.randomBinary)(0.4) || (0, tools_1.randomBinary)(0.07);
    }
    if (flags.includes("addBehaviour")) {
        dog.tolerateOtherDogs =
            (kind.typicalAggressiveness === "dangerous" && (0, tools_1.randomBinary)(0.65)) ||
                (kind.typicalAggressiveness === "safe for adults" && (0, tools_1.randomBinary)(0.95)) ||
                (kind.typicalAggressiveness === "safe for kids" && (0, tools_1.randomBinary)(1));
        dog.tolerateCats =
            (kind.typicalAggressiveness === "dangerous" && (0, tools_1.randomBinary)(0.5)) ||
                (kind.typicalAggressiveness === "safe for adults" && (0, tools_1.randomBinary)(0.95)) ||
                (kind.typicalAggressiveness === "safe for kids" && (0, tools_1.randomBinary)(1));
        dog.tolerateChildren =
            (kind.typicalAggressiveness === "dangerous" && (0, tools_1.randomBinary)(0.45)) ||
                (kind.typicalAggressiveness === "safe for adults" && (0, tools_1.randomBinary)(0.9)) ||
                (kind.typicalAggressiveness === "safe for kids" && (0, tools_1.randomBinary)(1));
        dog.hasHurtAnimals =
            (kind.typicalAggressiveness === "dangerous" && (0, tools_1.randomBinary)(0.6)) ||
                (kind.typicalAggressiveness === "safe for adults" && (0, tools_1.randomBinary)(0.1)) ||
                (kind.typicalAggressiveness === "safe for kids" && (0, tools_1.randomBinary)(0.001));
        dog.hasHurtHumans =
            (kind.typicalAggressiveness === "dangerous" && (0, tools_1.randomBinary)(0.4)) ||
                (kind.typicalAggressiveness === "safe for adults" && (0, tools_1.randomBinary)(0.05)) ||
                (kind.typicalAggressiveness === "safe for kids" && (0, tools_1.randomBinary)(0));
    }
    return dog;
}
exports.randomDog = randomDog;
function randomDogs(kinds, nicknames, flags, n) {
    const arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(randomDog(kinds, nicknames, flags));
    }
    return arr;
}
exports.randomDogs = randomDogs;
