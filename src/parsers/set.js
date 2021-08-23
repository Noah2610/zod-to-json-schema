"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSetDef = void 0;
const parseDef_1 = require("../parseDef");
function parseSetDef(def, path, visited) {
    return {
        type: "array",
        items: parseDef_1.parseDef(def.valueType, [...path, "items"], visited),
    };
}
exports.parseSetDef = parseSetDef;
