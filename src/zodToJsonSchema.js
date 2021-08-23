"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zodToJsonSchema = void 0;
const parseDef_1 = require("./parseDef");
function zodToJsonSchema(schema, name) {
    return name === undefined
        ? Object.assign({ $schema: "http://json-schema.org/draft-07/schema#" }, parseDef_1.parseDef(schema, [], [])) : {
        $schema: "http://json-schema.org/draft-07/schema#",
        $ref: `#/definitions/${name}`,
        definitions: {
            [name]: parseDef_1.parseDef(schema, ["definitions", name], []) || {},
        },
    };
}
exports.zodToJsonSchema = zodToJsonSchema;
