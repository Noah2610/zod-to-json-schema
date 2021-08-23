"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseRecordDef = void 0;
const parseDef_1 = require("../parseDef");
function parseRecordDef(def, path, visited) {
    return {
        type: "object",
        additionalProperties: parseDef_1.parseDef(def.valueType, [...path, "additionalProperties"], visited) || {},
    };
}
exports.parseRecordDef = parseRecordDef;
