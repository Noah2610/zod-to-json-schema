import { ZodMapDef } from "zod";
import { JsonSchema7Type, Visited } from "../parseDef";
export declare type JsonSchema7MapType = {
    type: "array";
    maxItems: 125;
    items: {
        type: "array";
        items: [JsonSchema7Type, JsonSchema7Type];
        minItems: 2;
        maxItems: 2;
        additionalItems: false;
    };
};
export declare function parseMapDef(def: ZodMapDef, path: string[], visited: Visited): JsonSchema7MapType;
