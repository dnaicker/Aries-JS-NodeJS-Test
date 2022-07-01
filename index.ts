import type { InitConfig } from '@aries-framework/core'
import { Agent } from '@aries-framework/core'
import { agentDependencies } from '@aries-framework/node'
import { HttpOutboundTransport, WsOutboundTransport } from '@aries-framework/core'
import { HttpInboundTransport } from '@aries-framework/node'
import express, { Express, Request, Response } from 'express';

const path = require('path');
require('dotenv').config({
  path: path.resolve('config.env'),
});

console.log(require("dotenv").config())

const app: Express = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  // The agent initialization configuration
  const config: InitConfig = {
    label: 'docs-nodejs-agent',
    walletConfig: {
      id: 'wallet-id',
      key: 'testkey0000000000000000000000000',
    },
  }

  // Creating an agent instance
  const agent = new Agent(config, agentDependencies)

  // Registering the required in- and outbound transports
  agent.registerOutboundTransport(new HttpOutboundTransport())
  agent.registerInboundTransport(new HttpInboundTransport({ port: 3000 }))
  
  const initialize = async () => await agent.initialize().then((result)=>{console.log(result)}).catch(console.error)

  initialize();

  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


