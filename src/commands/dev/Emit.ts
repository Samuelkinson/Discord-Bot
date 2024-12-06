import { ApplicationCommandOptionType, CacheType, ChatInputCommandInteraction, EmbedBuilder, Events, Guild, PermissionsBitField } from "discord.js";
import Command from "../../base/classes/Command";
import Category from "../../base/enums/Category";
import CustomClient from "../../base/classes/CustomClient";

export default class Emit extends Command{
    constructor(client: CustomClient){
        super(client,{
            name: "emit",
            description: "Emit an event",
            default_member_permissions: PermissionsBitField.Flags.Administrator,
            dm_permissions: false,
            category: Category.Developer,
            cooldown: 1,
            dev: false,
            trusted: true,
            options: [
                {
                    name: "event",
                    description: "The event to emit",
                    required: true,
                    type: ApplicationCommandOptionType.String,
                    choices: [
                        {name: "GuildCreate", value: Events.GuildCreate}, 
                        {name: "GuildDelete", value: Events.GuildDelete}
                   ]
                }
            ]
        })
    }

    Execute(interaction: ChatInputCommandInteraction) {
        const event = interaction.options.getString("event");

        if(event == Events.GuildCreate || event == Events.GuildDelete){
            this.client.emit(event, interaction.guild as Guild);
        }

        interaction.reply({embeds: [new EmbedBuilder()
            .setColor("Green")
            .setDescription(`Emitted event - \`${event}\``)
        ], ephemeral: true})
    }
}