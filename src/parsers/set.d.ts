import { ZodSetDef } from "zod";
import { Visited } from "../parseDef";
import { JsonSchema7ArrayType } from "./array";
export declare function parseSetDef(def: ZodSetDef, path: string[], visited: Visited): JsonSchema7ArrayType;
