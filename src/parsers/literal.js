"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseLiteralDef = void 0;
function parseLiteralDef(def) {
    const parsedType = typeof def.value;
    if (parsedType !== "bigint" &&
        parsedType !== "number" &&
        parsedType !== "boolean" &&
        parsedType !== "string") {
        return {
            type: Array.isArray(def.value) ? "array" : "object",
        };
    }
    return {
        type: parsedType === "bigint" ? "integer" : parsedType,
        const: def.value,
    };
}
exports.parseLiteralDef = parseLiteralDef;
