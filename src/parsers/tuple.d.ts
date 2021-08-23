import { ZodTupleDef } from "zod";
import { JsonSchema7Type, Visited } from "../parseDef";
export declare type JsonSchema7TupleType = {
    type: "array";
    minItems: number;
    maxItems: number;
    items: JsonSchema7Type[];
};
export declare function parseTupleDef(def: ZodTupleDef, path: string[], visited: Visited): JsonSchema7TupleType;
