"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseIntersectionDef = void 0;
const parseDef_1 = require("../parseDef");
function parseIntersectionDef(def, path, visited) {
    const allOf = [
        parseDef_1.parseDef(def.left, path, visited),
        parseDef_1.parseDef(def.right, path, visited),
    ].filter(Boolean);
    return allOf.length === 2 ? { allOf } : allOf.length === 1 ? allOf[0] : {};
}
exports.parseIntersectionDef = parseIntersectionDef;
