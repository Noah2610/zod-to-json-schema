import { ZodSchema } from "zod";
import { JsonSchema7Type } from "./parseDef";
declare type JsonSchema7Definitions = {
    [key: string]: JsonSchema7Type;
};
/**
 * @param schema The Zod schema to be converted
 */
declare function zodToJsonSchema(schema: ZodSchema<any>): {
    $schema: "http://json-schema.org/draft-07/schema#";
} & JsonSchema7Type;
/**
 * @param schema The Zod schema to be converted
 * @param name The (optional) name of the schema. If a name is passed, the schema will be put in 'definitions' and referenced from the root.
 */
declare function zodToJsonSchema<Name extends string>(schema: ZodSchema<any>, name: Name): {
    $schema: "http://json-schema.org/draft-07/schema#";
    $ref: `#/definitions/${Name}`;
    definitions: JsonSchema7Definitions;
};
export { zodToJsonSchema };
