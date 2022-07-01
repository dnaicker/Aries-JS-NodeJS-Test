import type { InitConfig } from '@aries-framework/core'
import { Agent } from '@aries-framework/core'
import { agentDependencies } from '@aries-framework/node'
import { HttpOutboundTransport, WsOutboundTransport } from '@aries-framework/core'
import { HttpInboundTransport } from '@aries-framework/node'
import express, { Express, Request, Response } from 'express';
import { ConsoleLogger, LogLevel } from '@aries-framework/core'

const path = require('path');
require('dotenv').config({
  path: path.resolve('config.env'),
});

console.log(require("dotenv").config())

const app: Express = express();
const port = process.env.PORT;

app.get('/createAgent', (req, res) => {
  
  // initialising agent
  const initialize = async () => {
    // The agent initialization configuration
    const config: InitConfig = {
      label: 'docs-nodejs-agent',
      logger: new ConsoleLogger(LogLevel.info),
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
  
    await agent.initialize().then((result)=>{}).catch(console.error)
  }

  initialize();

  res.send('Hello Aries JS Agent Bob!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
