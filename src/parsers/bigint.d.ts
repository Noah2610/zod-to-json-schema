import { ZodBigIntDef } from "zod";
export declare type JsonSchema7BigintType = {
    type: "integer";
    format: "int64";
};
export declare function parseBigintDef(def: ZodBigIntDef): JsonSchema7BigintType;
