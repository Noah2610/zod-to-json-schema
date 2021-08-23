"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDef = void 0;
const zod_1 = require("zod");
const array_1 = require("./parsers/array");
const bigint_1 = require("./parsers/bigint");
const boolean_1 = require("./parsers/boolean");
const date_1 = require("./parsers/date");
const enum_1 = require("./parsers/enum");
const intersection_1 = require("./parsers/intersection");
const literal_1 = require("./parsers/literal");
const nativeEnum_1 = require("./parsers/nativeEnum");
const null_1 = require("./parsers/null");
const nullable_1 = require("./parsers/nullable");
const number_1 = require("./parsers/number");
const object_1 = require("./parsers/object");
const record_1 = require("./parsers/record");
const set_1 = require("./parsers/set");
const map_1 = require("./parsers/map");
const string_1 = require("./parsers/string");
const tuple_1 = require("./parsers/tuple");
const undefined_1 = require("./parsers/undefined");
const union_1 = require("./parsers/union");
function parseDef(schema, path, visited) {
    const wasVisited = visited.find((x) => Object.is(x.schema, schema));
    if (wasVisited) {
        return { $ref: `#/${wasVisited.path.join("/")}` };
    }
    else {
        visited.push({ schema, path });
    }
    const def = schema._def;
    const typeName = def.typeName;
    switch (typeName) {
        case zod_1.ZodFirstPartyTypeKind.ZodString:
            return string_1.parseStringDef(def);
        case zod_1.ZodFirstPartyTypeKind.ZodNumber:
            return number_1.parseNumberDef(def);
        case zod_1.ZodFirstPartyTypeKind.ZodObject:
            return object_1.parseObjectDef(def, path, visited);
        case zod_1.ZodFirstPartyTypeKind.ZodBigInt:
            return bigint_1.parseBigintDef(def);
        case zod_1.ZodFirstPartyTypeKind.ZodBoolean:
            return boolean_1.parseBooleanDef();
        case zod_1.ZodFirstPartyTypeKind.ZodDate:
            return date_1.parseDateDef();
        case zod_1.ZodFirstPartyTypeKind.ZodUndefined:
            return undefined_1.parseUndefinedDef();
        case zod_1.ZodFirstPartyTypeKind.ZodNull:
            return null_1.parseNullDef();
        case zod_1.ZodFirstPartyTypeKind.ZodArray:
            return array_1.parseArrayDef(def, path, visited);
        case zod_1.ZodFirstPartyTypeKind.ZodUnion:
            return union_1.parseUnionDef(def, path, visited);
        case zod_1.ZodFirstPartyTypeKind.ZodIntersection:
            return intersection_1.parseIntersectionDef(def, path, visited);
        case zod_1.ZodFirstPartyTypeKind.ZodTuple:
            return tuple_1.parseTupleDef(def, path, visited);
        case zod_1.ZodFirstPartyTypeKind.ZodRecord:
            return record_1.parseRecordDef(def, path, visited);
        case zod_1.ZodFirstPartyTypeKind.ZodLiteral:
            return literal_1.parseLiteralDef(def);
        case zod_1.ZodFirstPartyTypeKind.ZodEnum:
            return enum_1.parseEnumDef(def);
        case zod_1.ZodFirstPartyTypeKind.ZodNativeEnum:
            return nativeEnum_1.parseNativeEnumDef(def);
        case zod_1.ZodFirstPartyTypeKind.ZodNullable:
            return nullable_1.parseNullableDef(def, path, visited);
        case zod_1.ZodFirstPartyTypeKind.ZodOptional:
            return parseDef(def.innerType, path, visited);
        case zod_1.ZodFirstPartyTypeKind.ZodMap:
            return map_1.parseMapDef(def, path, visited);
        case zod_1.ZodFirstPartyTypeKind.ZodSet:
            return set_1.parseSetDef(def, path, visited);
        case zod_1.ZodFirstPartyTypeKind.ZodEffects:
        case zod_1.ZodFirstPartyTypeKind.ZodAny:
        case zod_1.ZodFirstPartyTypeKind.ZodUnknown:
        case zod_1.ZodFirstPartyTypeKind.ZodDefault:
            return {};
        case zod_1.ZodFirstPartyTypeKind.ZodLazy:
            return parseDef(schema._def.getter(), path, visited);
        case zod_1.ZodFirstPartyTypeKind.ZodNever:
        case zod_1.ZodFirstPartyTypeKind.ZodFunction:
        case zod_1.ZodFirstPartyTypeKind.ZodPromise:
        case zod_1.ZodFirstPartyTypeKind.ZodVoid:
            return undefined;
        default:
            return ((_) => undefined)(typeName);
    }
}
exports.parseDef = parseDef;
