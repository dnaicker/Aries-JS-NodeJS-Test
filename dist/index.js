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
const app = (0, express_1.default)();
const path = require('path');
require('dotenv').config({ path: path.resolve('config.env') });
console.log(require("dotenv").config());
const port = process.env.PORT;
// --------------------
// API Call: Create Agent
// Todo: accept parameter input name
// Todo: send JSON back
app.get('/initialiseAgent', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.header('Content-Type', 'application/json');
    let result = yield agent_1.SSIAgent.initialiseAgent("Agentbob");
    res.send("Hello new Agent");
}));
app.get('/createInvitation', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // res.header('Content-Type', 'application/json');
    let agentBob = yield agent_1.SSIAgent.initialiseAgent("Agentbob");
    let invitation = yield agent_1.SSIAgent.createNewInvitation(agentBob);
    console.log(invitation);
    res.json(invitation);
}));
// --------------------
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
