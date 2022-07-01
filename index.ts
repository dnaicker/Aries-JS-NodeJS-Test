import express, { Express, Request, Response } from 'express';
import {SSIAgent} from './src/agent';

const app: Express = express();
const path = require('path');
require('dotenv').config({ path: path.resolve('config.env') });
console.log(require("dotenv").config())
const port = process.env.PORT;

// --------------------
// API Call: Create Agent
// Todo: accept parameter input name
// Todo: send JSON back
app.get('/initialiseAgent', async (req, res) => {
  // res.header('Content-Type', 'application/json');
  let result = await SSIAgent.initialiseAgent("Agentbob");
  res.send("Hello new Agent")
})

app.get('/createInvitation', async (req, res) => {
  // res.header('Content-Type', 'application/json');
  let agentBob = await SSIAgent.initialiseAgent("Agentbob");
  let invitation = await SSIAgent.createNewInvitation(agentBob);
  console.log(invitation)
  
  res.json(invitation);
})

// --------------------
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
