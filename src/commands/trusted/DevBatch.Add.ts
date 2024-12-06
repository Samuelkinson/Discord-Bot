import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import CustomClient from "../../base/classes/CustomClient";
import SubCommand from "../../base/classes/SubCommand";
import BatchConfig from "../../base/schemas/BatchConfig";
import BatchAddEmbed from "../../base/embeds/batchAddEmbed";
import { generatePrefix } from "../../base/functions/random";
import { incrementNumberInString } from "../../base/functions/random";
import { ValidURL } from "../../base/functions/random";

export default class devBatchADD extends SubCommand {
    constructor(client: CustomClient) {
        super(client, {
            name: "devbatch.add",
        });
    }

    async Execute(interaction: ChatInputCommandInteraction) {
        const model = interaction.options.getString("model");
        //@ts-ignore
        const prefix = generatePrefix(model);
        const name = interaction.options.getString("name");
        const bestbatch = interaction.options.getString("bestbatch");
        const budgetbatch = interaction.options.getString("budgetbatch");
        const extrainfo = interaction.options.getString("extrainfo");
        let url = interaction.options.getString("url");
        let image = interaction.options.getString("image");
        const lastUpdated = new Date();
        const data = await BatchConfig.findOne({ guildID: interaction.guild?.id });
        //@ts-ignore
        if (!ValidURL(url)) {
            url = 'https://www.reddit.com/r/CityOfReps/wiki/index/';
        }
        //@ts-ignore
        if (!ValidURL(image)) {
            image = 'https://i.imgur.com/Z5t9i1n.jpeg';
        }
        if (data) {
            try {
                //@ts-ignore
                let lastItem = data[model][data[model].length - 1];
                let incrementedID = incrementNumberInString(lastItem.id);
                //@ts-ignore
                data[model].push({
                    id: incrementedID ? `${prefix}${incrementedID}` : "",
                    name: name || "",
                    bestBatch: bestbatch || "",
                    budgetBatch: budgetbatch || "",
                    extraInfo: extrainfo || "",
                    url: url || "",
                    image: image || "",
                    lastUpdated: lastUpdated,
                });

                await BatchConfig.findOneAndUpdate(
                    { guildID: interaction.guild?.id },
                    //@ts-ignore
                    { $set: { [model]: data[model] } },
                    { new: true }
                );
                 //@ts-ignore
                new BatchAddEmbed(this.client).Execute(
                    interaction, //@ts-ignore
                    name,
                    bestbatch,
                    budgetbatch,
                    extrainfo,
                    url,
                    image,
                    lastUpdated.toLocaleDateString(),
                    incrementedID,
                    prefix
                );
            } catch (error) {
                interaction.reply({
                    embeds: [
                        new EmbedBuilder()
                            .setColor("Red")
                            .setDescription(`An error occurred.`)
                    ],
                    ephemeral: true
                });
            }
        } else {
            // Create a new one here!
        }
    }
}
