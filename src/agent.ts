import type { InitConfig } from '@aries-framework/core'
import { Agent } from '@aries-framework/core'
import { agentDependencies } from '@aries-framework/node'
import { HttpOutboundTransport, WsOutboundTransport } from '@aries-framework/core'
import { HttpInboundTransport } from '@aries-framework/node'
import { ConsoleLogger, LogLevel } from '@aries-framework/core'

module SSIAgent {
    // --------------------
    // Initialising Agent
    export async function initialiseAgent(name: string) {
        
        // Agent configuration
        const config: InitConfig = {
            label: 'demo-agent-acme',
            logger: new ConsoleLogger(LogLevel.info),
            walletConfig: {
                id: 'mainAcme',
                key: 'demoagentacme0000000000000000000',
            },
            autoAcceptConnections: true,
            endpoints: ['http://localhost:3001'],
        }
    
        // Agent Instance
        const agent = new Agent(config, agentDependencies)
    
        // Set inbound and outbound transports
        agent.registerOutboundTransport(new WsOutboundTransport())
        agent.registerInboundTransport(new HttpOutboundTransport())
        agent.registerInboundTransport(new HttpInboundTransport({port: 3001}));
    
        // Initialise Agent
        await agent.initialize().then((result)=>{}).catch(console.error)
    
        return agent;
    }
}

export {SSIAgent};