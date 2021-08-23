import { ZodSchema } from "zod";
import { JsonSchema7ArrayType } from "./parsers/array";
import { JsonSchema7BigintType } from "./parsers/bigint";
import { JsonSchema7BooleanType } from "./parsers/boolean";
import { JsonSchema7DateType } from "./parsers/date";
import { JsonSchema7EnumType } from "./parsers/enum";
import { JsonSchema7LiteralType } from "./parsers/literal";
import { JsonSchema7NativeEnumType } from "./parsers/nativeEnum";
import { JsonSchema7NullType } from "./parsers/null";
import { JsonSchema7NullableType } from "./parsers/nullable";
import { JsonSchema7NumberType } from "./parsers/number";
import { JsonSchema7ObjectType } from "./parsers/object";
import { JsonSchema7RecordType } from "./parsers/record";
import { JsonSchema7MapType } from "./parsers/map";
import { JsonSchema7StringType } from "./parsers/string";
import { JsonSchema7TupleType } from "./parsers/tuple";
import { JsonSchema7UndefinedType } from "./parsers/undefined";
import { JsonSchema7AnyOfType, JsonSchema7PrimitiveUnionType } from "./parsers/union";
declare type JsonSchema7AnyType = {};
declare type JsonSchema7RefType = {
    $ref: string;
};
export declare type JsonSchema7Type = JsonSchema7StringType | JsonSchema7ArrayType | JsonSchema7NumberType | JsonSchema7BigintType | JsonSchema7BooleanType | JsonSchema7DateType | JsonSchema7EnumType | JsonSchema7LiteralType | JsonSchema7NativeEnumType | JsonSchema7NullType | JsonSchema7NumberType | JsonSchema7ObjectType | JsonSchema7RecordType | JsonSchema7TupleType | JsonSchema7PrimitiveUnionType | JsonSchema7UndefinedType | JsonSchema7AnyOfType | JsonSchema7RefType | JsonSchema7AnyType | JsonSchema7MapType | JsonSchema7NullableType;
export declare type Visited = {
    schema: ZodSchema<any>;
    path: string[];
}[];
export declare function parseDef<T>(schema: ZodSchema<any>, path: string[], visited: Visited): JsonSchema7Type | undefined;
export {};
