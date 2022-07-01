import type { InitConfig } from '@aries-framework/core'
import { Agent } from '@aries-framework/core'
import { agentDependencies } from '@aries-framework/node'
import { HttpOutboundTransport, WsOutboundTransport } from '@aries-framework/core'
import { HttpInboundTransport } from '@aries-framework/node'
import express, { Express, Request, Response } from 'express';
import { ConsoleLogger, LogLevel } from '@aries-framework/core'
import {SSIAgent} from './src/agent';

const path = require('path');
require('dotenv').config({ path: path.resolve('config.env') });
console.log(require("dotenv").config())
const app: Express = express();
const port = process.env.PORT;



// --------------------
// API Call: Create Agent
// Todo: accept parameter input name
app.get('/initialiseAgent', async (req, res) => {
  // res.header('Content-Type', 'application/json');
  let result = await SSIAgent.initialiseAgent("Agentbob");
})

// --------------------
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const stringifyError = function(err, filter, space) {
	var plainObject = {};
	Object.getOwnPropertyNames(err).forEach(function(key) {
		plainObject[key] = err[key];
	});
	return JSON.stringify(plainObject, filter, space);
};
