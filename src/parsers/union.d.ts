import { ZodUnionDef } from "zod";
import { JsonSchema7Type, Visited } from "../parseDef";
export declare const primitiveMappings: {
    ZodString: string;
    ZodNumber: string;
    ZodBigInt: string;
    ZodBoolean: string;
    ZodNull: string;
};
declare type JsonSchema7Primitive = "string" | "number" | "integer" | "boolean" | "null";
export declare type JsonSchema7PrimitiveUnionType = {
    type: JsonSchema7Primitive | JsonSchema7Primitive[];
} | {
    type: JsonSchema7Primitive | JsonSchema7Primitive[];
    enum: (string | number | bigint | boolean | null)[];
};
export declare type JsonSchema7AnyOfType = {
    anyOf: JsonSchema7Type[];
};
export declare function parseUnionDef(def: ZodUnionDef, path: string[], visited: Visited): JsonSchema7PrimitiveUnionType | JsonSchema7AnyOfType | JsonSchema7Type | undefined;
export {};
