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
const core_1 = require("@aries-framework/core");
const node_1 = require("@aries-framework/node");
const core_2 = require("@aries-framework/core");
const node_2 = require("@aries-framework/node");
const express_1 = __importDefault(require("express"));
const core_3 = require("@aries-framework/core");
const path = require('path');
require('dotenv').config({
    path: path.resolve('config.env'),
});
console.log(require("dotenv").config());
const app = (0, express_1.default)();
const port = process.env.PORT;
app.get('/', (req, res) => {
    // The agent initialization configuration
    const config = {
        label: 'docs-nodejs-agent',
        logger: new core_3.ConsoleLogger(core_3.LogLevel.info),
        walletConfig: {
            id: 'wallet-id',
            key: 'testkey0000000000000000000000000',
        },
    };
    // Creating an agent instance
    const agent = new core_1.Agent(config, node_1.agentDependencies);
    // Registering the required in- and outbound transports
    agent.registerOutboundTransport(new core_2.HttpOutboundTransport());
    agent.registerInboundTransport(new node_2.HttpInboundTransport({ port: 3000 }));
    const initialize = () => __awaiter(void 0, void 0, void 0, function* () { return yield agent.initialize().then((result) => { }).catch(console.error); });
    initialize();
    res.send('Hello World!');
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
