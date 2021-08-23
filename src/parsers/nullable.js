"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNullableDef = void 0;
const parseDef_1 = require("../parseDef");
const union_1 = require("./union");
function parseNullableDef(def, path, visited) {
    if (["ZodString", "ZodNumber", "ZodBigInt", "ZodBoolean", "ZodNull"].includes(def.innerType._def.typeName) &&
        (!def.innerType._def.checks || !def.innerType._def.checks.length)) {
        return {
            type: [
                union_1.primitiveMappings[def.innerType._def.typeName],
                "null",
            ],
        };
    }
    const type = parseDef_1.parseDef(def.innerType, [...path, 'anyOf', '0'], visited);
    return type
        ? {
            anyOf: [
                type,
                {
                    type: "null",
                },
            ],
        }
        : undefined;
}
exports.parseNullableDef = parseNullableDef;
