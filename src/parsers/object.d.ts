import { ZodObjectDef } from "zod";
import { JsonSchema7Type, Visited } from "../parseDef";
export declare type JsonSchema7ObjectType = {
    type: "object";
    properties: Record<string, JsonSchema7Type>;
    additionalProperties: boolean | JsonSchema7Type;
    required?: string[];
};
export declare function parseObjectDef(def: ZodObjectDef, path: string[], visited: Visited): JsonSchema7ObjectType;
