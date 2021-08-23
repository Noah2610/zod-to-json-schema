"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMapDef = void 0;
const parseDef_1 = require("../parseDef");
function parseMapDef(def, path, visited) {
    const keys = parseDef_1.parseDef(def.keyType, path, visited) || {};
    const values = parseDef_1.parseDef(def.valueType, path, visited) || {};
    return {
        type: "array",
        maxItems: 125,
        items: {
            type: "array",
            items: [keys, values],
            minItems: 2,
            maxItems: 2,
            additionalItems: false
        },
    };
}
exports.parseMapDef = parseMapDef;
