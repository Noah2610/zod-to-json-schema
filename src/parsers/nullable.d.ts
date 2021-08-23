import { ZodNullableDef } from "zod";
import { JsonSchema7Type, Visited } from "../parseDef";
import { JsonSchema7NullType } from "./null";
export declare type JsonSchema7NullableType = {
    anyOf: [JsonSchema7Type, JsonSchema7NullType];
} | {
    type: [string, "null"];
};
export declare function parseNullableDef(def: ZodNullableDef, path: string[], visited: Visited): JsonSchema7NullableType | undefined;
