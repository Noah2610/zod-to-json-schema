import { ZodNumberDef } from "zod";
export declare type JsonSchema7NumberType = {
    type: "number" | "integer";
    minimum?: number;
    exclusiveMinimum?: number;
    maximum?: number;
    exclusiveMaximum?: number;
};
export declare function parseNumberDef(def: ZodNumberDef): JsonSchema7NumberType;
