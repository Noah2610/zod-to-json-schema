"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseObjectDef = void 0;
const parseDef_1 = require("../parseDef");
function parseObjectDef(def, path, visited) {
    var _a;
    const result = Object.assign(Object.assign({ type: "object" }, Object.entries(def.shape()).reduce((acc, [propName, propDef]) => {
        if (propDef === undefined || propDef._def === undefined)
            return acc;
        const parsedDef = parseDef_1.parseDef(propDef, [...path, "properties", propName], visited);
        if (parsedDef === undefined)
            return acc;
        return {
            properties: Object.assign(Object.assign({}, acc.properties), { [propName]: parsedDef }),
            required: propDef.isOptional()
                ? acc.required
                : [...acc.required, propName],
        };
    }, { properties: {}, required: [] })), { additionalProperties: def.catchall._def.typeName === "ZodNever"
            ? def.unknownKeys === "passthrough"
            : (_a = parseDef_1.parseDef(def.catchall, path, visited)) !== null && _a !== void 0 ? _a : true });
    if (!result.required.length)
        delete result.required;
    return result;
}
exports.parseObjectDef = parseObjectDef;
