import { ZodNativeEnumDef } from "zod";
export declare type JsonSchema7NativeEnumType = {
    type: "string" | "number" | ["string", "number"];
    enum: (string | number)[];
};
export declare function parseNativeEnumDef(def: ZodNativeEnumDef): JsonSchema7NativeEnumType;
