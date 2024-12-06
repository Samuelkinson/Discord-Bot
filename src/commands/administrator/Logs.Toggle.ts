import { ChatInputCommandInteraction, CacheType, TextChannel, EmbedBuilder } from "discord.js";
import CustomClient from "../../base/classes/CustomClient";
import SubCommand from "../../base/classes/SubCommand";
import GuildConfig from "../../base/schemas/GuildConfig";

export default class LogsToggle extends SubCommand{
    constructor(client: CustomClient){
        super(client, {
                name: "logs.toggle"
            });
    }
    
    async Execute(interaction: ChatInputCommandInteraction){
        const logType = interaction.options.getString("log-type");
        const enabled = interaction.options.getBoolean("toggle");
        await interaction.deferReply({ephemeral: true});

        try{
            let guild = await GuildConfig.findOne({ guildID: interaction.guild?.id});
            if (!guild)
                guild = await GuildConfig.create({ guildID: interaction.guild?.id});

            //@ts-ignore
            guild.logs[`${logType}`].enabled = enabled;

            await guild.save();
            return interaction.editReply({embeds: [new EmbedBuilder()
                .setColor("Green")
                .setDescription(`${enabled ? "Enabled" : "Disabled"} \`${logType} logs!\``)
            ]})

        }catch (err){
            console.error(err);
            return interaction.editReply({embeds: [new EmbedBuilder()
                .setColor("Red")
                .setDescription("There was an error while updating the database, please try again!")
            ]})
        }
    }
}