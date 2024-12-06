import { Collection, Events, REST, Routes } from "discord.js";
import CustomClient from "../../base/classes/CustomClient";
import Event from "../../base/classes/Event";
import Command from "../../base/classes/Command";

export default class Ready extends Event{
    constructor(client: CustomClient){
        super(client, {
            name: Events.ClientReady,
            description: "Ready Event",
            once: true
        })
    }

    async Execute(){
        console.log(`${this.client.user?.tag} is now ready!`);

        const clientID = this.client.developmentMode ? this.client.config.devDiscordClientId : this.client.config.discordClientId;
        

        if(!this.client.developmentMode){
            let rest = new REST().setToken(this.client.config.token);
            const globalCommands: any = await rest.put(Routes.applicationCommands(clientID), {
                body: this.GetJson(this.client.commands.filter(command => !command.dev))
            });

            console.log(`Successfully loaded ${globalCommands.length} global commands!`)
        }else{
            let rest = new REST().setToken(this.client.config.devToken);
            const devCommands: any = await rest.put(Routes.applicationGuildCommands(clientID, this.client.config.devGuildID), {
                body: this.GetJson(this.client.commands.filter(command => command.dev))
            });

        console.log(`Successfully loaded ${devCommands.length} developer commands!`)
        }              
    }

    private GetJson(commands: Collection<string, Command>): object[] {
        const data: object[] = [];

        commands.forEach(command =>{
            data.push({
                name: command.name,
                description: command.description,
                options : command.options,
                default_member_permissions: command.default_member_permissions.toString(),
                dm_permission: command.dm_permissions,
            })
        });

        return data;
    }
}