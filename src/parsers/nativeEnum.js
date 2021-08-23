"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNativeEnumDef = void 0;
function parseNativeEnumDef(def) {
    const numberValues = Object.values(def.values)
        .filter((value) => typeof value === "number")
        .map(toString);
    const actualValues = Object.values(def.values).filter((_, i) => i >= numberValues.length);
    return {
        type: numberValues.length === 0
            ? "string"
            : numberValues.length === actualValues.length
                ? "number"
                : ["string", "number"],
        enum: actualValues,
    };
}
exports.parseNativeEnumDef = parseNativeEnumDef;
