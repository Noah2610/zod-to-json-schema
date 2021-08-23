import { ZodIntersectionDef } from "zod";
import { JsonSchema7Type, Visited } from "../parseDef";
export declare function parseIntersectionDef(def: ZodIntersectionDef, path: string[], visited: Visited): JsonSchema7Type;
