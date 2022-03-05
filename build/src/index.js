"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = 3000;
var converter = function (req, res, next) {
    res.send('this is the converter function');
};
app.get('/conver', converter, function (req, res) {
    res.json({ id: 'this is the entry page' });
});
app.listen(port, function () { return console.log('server is live on port', port); });
exports.default = app;
