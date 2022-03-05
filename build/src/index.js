"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
var converter = function (req, res, next) {
    res.status(200).send({ id: 'Blossom, res cannot send back res' });
    next();
};
app.get('/convert', converter, function (req, res) {
});
app.listen(port, function () { return console.log('server is listening on port', port); });
exports.default = app;
