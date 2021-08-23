"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseNumberDef = void 0;
function parseNumberDef(def) {
    const res = {
        type: "number",
    };
    if (def.checks) {
        for (const check of def.checks) {
            switch (check.kind) {
                case "int":
                    res.type = "integer";
                    break;
                case "min":
                    if (!check.inclusive) {
                        res.exclusiveMinimum = check.value;
                    }
                    res.minimum = check.value;
                    break;
                case "max":
                    if (!check.inclusive) {
                        res.exclusiveMaximum = check.value;
                    }
                    res.maximum = check.value;
                    break;
            }
        }
    }
    return res;
}
exports.parseNumberDef = parseNumberDef;
