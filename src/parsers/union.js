"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseUnionDef = exports.primitiveMappings = void 0;
const parseDef_1 = require("../parseDef");
exports.primitiveMappings = {
    ZodString: "string",
    ZodNumber: "number",
    ZodBigInt: "integer",
    ZodBoolean: "boolean",
    ZodNull: "null",
};
function parseUnionDef(def, path, visited) {
    const options = def.options.filter((x) => x.constructor.name !== "undefined");
    //
    if (options.length === 1) {
        return parseDef_1.parseDef(options[0]._def, path, visited); // likely union with undefined, and thus probably optional object property
    }
    // This blocks tries to look ahead a bit to produce nicer looking schemas with type array instead of anyOf.
    if (options.every((x) => [
        "ZodString",
        "ZodNumber",
        "ZodBigInt",
        "ZodBoolean",
        "ZodNull",
    ].includes(x.constructor.name) &&
        (!x._def.checks || !x._def.checks.length))) {
        // all types in union are primitive, so might as well squash into {type: [...]}
        //
        const types = options
            .reduce((types, option) => {
            //
            return types.includes(option.constructor.name)
                ? types
                : [...types, exports.primitiveMappings[option.constructor.name]];
        }, [])
            .map((x) => (x === "bigint" ? "integer" : x));
        return {
            type: types.length > 1 ? types : types[0],
        };
    }
    else if (options.every((x) => x.constructor.name === "ZodLiteral")) {
        // all options literals
        const types = options.reduce((types, option) => {
            let type = typeof option._def.value;
            if (type === "bigint") {
                type = "integer";
            }
            else if (type === "object" && option._def.value === null) {
                type = "null";
            }
            return types.includes(type) ? types : [...types, type];
        }, []);
        if (types.every((x) => ["string", "number", "bigint", "boolean", "null"].includes(x))) {
            // all the literals are primitive, as far as null can be considered primitive
            return {
                type: types.length > 1 ? types : types[0],
                enum: options.reduce((acc, x) => {
                    return acc.includes(x._def.value) ? acc : [...acc, x._def.value];
                }, []),
            };
        }
    }
    return {
        // Fallback to verbose anyOf. This will always work schematically but it does get quite ugly at times.
        anyOf: options.map((x, i) => parseDef_1.parseDef(x, [...path, "anyOf", i.toString()], visited)),
    };
}
exports.parseUnionDef = parseUnionDef;
