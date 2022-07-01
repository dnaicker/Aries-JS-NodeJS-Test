"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const agent_1 = require("./src/agent");
const path = require('path');
require('dotenv').config({ path: path.resolve('config.env') });
console.log(require("dotenv").config());
const app = (0, express_1.default)();
const port = process.env.PORT;
// --------------------
// API Call: Create Agent
// Todo: accept parameter input name
app.get('/initialiseAgent', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.header('Content-Type', 'application/json');
    let result = yield agent_1.SSIAgent.initialiseAgent("Agentbob");
}));
// --------------------
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
const stringifyError = function (err, filter, space) {
    var plainObject = {};
    Object.getOwnPropertyNames(err).forEach(function (key) {
        plainObject[key] = err[key];
    });
    return JSON.stringify(plainObject, filter, space);
};
