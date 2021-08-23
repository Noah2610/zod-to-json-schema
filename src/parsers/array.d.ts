import { ZodArrayDef } from "zod";
import { JsonSchema7Type, Visited } from "../parseDef";
export declare type JsonSchema7ArrayType = {
    type: "array";
    items?: JsonSchema7Type;
    minItems?: number;
    maxItems?: number;
};
export declare function parseArrayDef(def: ZodArrayDef, path: string[], visited: Visited): JsonSchema7ArrayType;
