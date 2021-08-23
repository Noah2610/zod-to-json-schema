import { ZodEnumDef } from "zod";
export declare type JsonSchema7EnumType = {
    type: "string";
    enum: string[];
};
export declare function parseEnumDef(def: ZodEnumDef): JsonSchema7EnumType;
