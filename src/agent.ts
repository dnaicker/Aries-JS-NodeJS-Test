import type { InitConfig } from '@aries-framework/core'
import { Agent } from '@aries-framework/core'
import { agentDependencies } from '@aries-framework/node'
import { HttpOutboundTransport, WsOutboundTransport } from '@aries-framework/core'
import { ConsoleLogger, LogLevel } from '@aries-framework/core'

module SSIAgent {
    // --------------------
    // Initialising Agent
    export async function initialiseAgent(name: string) {
        
        // Agent configuration
        const config: InitConfig = {
        label: 'docs-nodejs-agent',
        logger: new ConsoleLogger(LogLevel.info),
        walletConfig: {
            id: 'Agentbob',
            key: 'demoagentbob00000000000000000000',
        },
        autoAcceptConnections: true
        }
    
        // Agent Instance
        const agent = new Agent(config, agentDependencies)
    
        // Set inbound and outbound transports
        agent.registerOutboundTransport(new WsOutboundTransport())
        agent.registerInboundTransport(new HttpOutboundTransport())
    
        // Initialise Agent
        await agent.initialize().then((result)=>{}).catch(console.error)
    
        return agent;
    }
}

export {SSIAgent};