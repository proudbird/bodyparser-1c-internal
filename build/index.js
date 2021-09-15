"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const converter_1c_internal_1 = require("converter-1c-internal");
function parser(req, res, next) {
    function parse1cInternal(err) {
        try {
            if (typeof req.body === "object") {
                // it looks like body is empty, or it is already parsed as JSON
                return next();
            }
            req.body = converter_1c_internal_1.Converter.convertFrom1C(req.body);
            next();
        }
        catch (error) {
            next(new Error(`Can't parse body as 1C: Enterprise internal string (${error})`));
        }
    }
    body_parser_1.default.text({ type: "application/1c-internal" })(req, res, parse1cInternal);
}
exports.default = parser;
//# sourceMappingURL=index.js.map