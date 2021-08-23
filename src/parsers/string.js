"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStringDef = void 0;
function parseStringDef(def) {
    const res = {
        type: "string",
    };
    if (def.checks) {
        for (const check of def.checks) {
            switch (check.kind) {
                case "min":
                    res.minLength = check.value;
                    break;
                case "max":
                    res.maxLength = check.value;
                    break;
                case "email":
                    res.format = "email";
                    break;
                case "url":
                    res.format = "uri";
                    break;
                case "uuid":
                    res.format = "uuid";
                    break;
                case "regex":
                    res.pattern = check.regex.source;
                    break;
            }
        }
    }
    return res;
}
exports.parseStringDef = parseStringDef;
