import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import CustomClient from "../../../base/classes/CustomClient";
import SubCommand from "../../../base/classes/SubCommand";
import BatchConfig from "../../../base/schemas/BatchConfig";
import BatchEmbed from "../../../base/embeds/batchEmbed";

export default class BatchAF1 extends SubCommand{
    constructor(client: CustomClient){
        super(client, {
            name: "batch.af1",
        })
    }

    async Execute(interaction: ChatInputCommandInteraction){
        
        const id = interaction.options.getString("name"); 

        try {
            const data = (await BatchConfig.findOne({ guildID: interaction.guild?.id }))?.af1.find(item => item.id === id);

            if (!data){
                interaction.reply({embeds: [new EmbedBuilder()
                    .setColor("Red")
                    .setDescription(`I couldn't find batch data from this guild.`)
                ],ephemeral: true})
            }else{
                //@ts-ignore
                new BatchEmbed(this.client).Execute(interaction, data);
            }
        } catch (error) {
            // console.log(error);
        }
    }
}