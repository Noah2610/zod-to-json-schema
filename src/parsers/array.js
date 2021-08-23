"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseArrayDef = void 0;
const parseDef_1 = require("../parseDef");
function parseArrayDef(def, path, visited) {
    {
        const res = {
            type: "array",
            items: parseDef_1.parseDef(def.type, [...path, "items"], visited),
        };
        if (def.minLength) {
            res.minItems = def.minLength.value;
        }
        if (def.maxLength) {
            res.maxItems = def.maxLength.value;
        }
        return res;
    }
}
exports.parseArrayDef = parseArrayDef;
