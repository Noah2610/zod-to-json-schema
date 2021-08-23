import { ZodRecordDef } from "zod";
import { JsonSchema7Type, Visited } from "../parseDef";
export declare type JsonSchema7RecordType = {
    type: "object";
    additionalProperties: JsonSchema7Type;
};
export declare function parseRecordDef(def: ZodRecordDef, path: string[], visited: Visited): JsonSchema7RecordType;
