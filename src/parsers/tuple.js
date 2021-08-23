"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTupleDef = void 0;
const parseDef_1 = require("../parseDef");
function parseTupleDef(def, path, visited) {
    return {
        type: "array",
        minItems: def.items.length,
        maxItems: def.items.length,
        items: def.items
            .map((x, i) => parseDef_1.parseDef(x, [...path, "items", i.toString()], visited))
            .reduce((acc, x) => (x === undefined ? acc : [...acc, x]), []),
    };
}
exports.parseTupleDef = parseTupleDef;
