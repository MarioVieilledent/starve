"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
const animals = ['elephant', 'crab', 'dolphin', 'turtle', 'gopher'];
app.use(express_1.default.static('./client/dist'));
app.get('/animals', (req, res) => {
    res.send(JSON.stringify(animals));
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});