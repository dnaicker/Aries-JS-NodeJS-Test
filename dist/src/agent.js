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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SSIAgent = void 0;
const core_1 = require("@aries-framework/core");
const node_1 = require("@aries-framework/node");
const core_2 = require("@aries-framework/core");
const core_3 = require("@aries-framework/core");
var SSIAgent;
(function (SSIAgent) {
    // --------------------
    // Initialising Agent
    function initialiseAgent(name) {
        return __awaiter(this, void 0, void 0, function* () {
            // Agent configuration
            const config = {
                label: 'docs-nodejs-agent',
                logger: new core_3.ConsoleLogger(core_3.LogLevel.info),
                walletConfig: {
                    id: 'Agentbob',
                    key: 'demoagentbob00000000000000000000',
                },
                autoAcceptConnections: true
            };
            // Agent Instance
            const agent = new core_1.Agent(config, node_1.agentDependencies);
            // Set inbound and outbound transports
            agent.registerOutboundTransport(new core_2.WsOutboundTransport());
            agent.registerInboundTransport(new core_2.HttpOutboundTransport());
            // Initialise Agent
            yield agent.initialize().then((result) => { }).catch(console.error);
            return agent;
        });
    }
    SSIAgent.initialiseAgent = initialiseAgent;
})(SSIAgent || (SSIAgent = {}));
exports.SSIAgent = SSIAgent;
