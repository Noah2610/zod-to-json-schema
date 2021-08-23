import { ZodLiteralDef } from "zod";
export declare type JsonSchema7LiteralType = {
    type: "string" | "number" | "integer" | "boolean";
    const: string | number | boolean;
} | {
    type: "object" | "array";
};
export declare function parseLiteralDef(def: ZodLiteralDef): JsonSchema7LiteralType;
