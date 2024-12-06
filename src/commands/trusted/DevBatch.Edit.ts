import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import CustomClient from "../../base/classes/CustomClient";
import SubCommand from "../../base/classes/SubCommand";
import BatchConfig from "../../base/schemas/BatchConfig";
import { generatePrefix, ValidURL } from "../../base/functions/random";

export default class devBatchEdit extends SubCommand {
    constructor(client: CustomClient) {
        super(client, {
            name: "devbatch.edit",
        });
    }

    async Execute(interaction: ChatInputCommandInteraction) {
        // User Input Logic
        const id = interaction.options.getString('id');
        const model = interaction.options.getString('model');
        //@ts-ignore Fetch edit for the pair.
        const Generated_Model = generatePrefix(model)

        let data = await BatchConfig.findOne({ guildID: interaction.guild?.id });
        let model_id = Generated_Model + id;
        //@ts-ignore
        let filteredData = data[model].filter(item => item.id === model_id);
        //@ts-ignore
        console.log(`This is my filterdata from this id: ` + model_id + filteredData);
        if (filteredData) {
            try {
                let url = interaction.options.getString('url');
                let image = interaction.options.getString('image');
                //@ts-ignore
                const isValidImage = ValidURL(image);
                //@ts-ignore
                const isValidUrl = ValidURL(url);

                // Object Logic
                const updateObject: any = {};
                updateObject.id = filteredData[0].id;
                updateObject.name = interaction.options.getString('name') || filteredData[0].name;
                updateObject.bestBatch = interaction.options.getString('bestbatch') || filteredData[0].bestBatch;
                updateObject.budgetBatch = interaction.options.getString('budgetbatch') || filteredData[0].budgetBatch;
                updateObject.extraInfo = interaction.options.getString('extrainfo') || filteredData[0].extraInfo;
                updateObject.url = isValidUrl && url ? url : filteredData[0].url;
                updateObject.image = isValidImage && image ? image : filteredData[0].image;
                updateObject.lastUpdated = new Date().toISOString();

                // Find the document by ID and update it
                await BatchConfig.updateOne(
                    { guildID: interaction.guild?.id, [`${model}.id`]: model_id },
                    { $set: { [`${model}.$`]: updateObject } }
                );              

                interaction.reply({
                    embeds: [new EmbedBuilder()
                        .setColor("Green")
                        .setDescription(`The data was edited, search ${filteredData[0].id} to see it!`)
                    ],
                    ephemeral: true
                });
            } catch (err) {
                interaction.reply({
                    embeds: [new EmbedBuilder()
                        .setColor("Red")
                        .setDescription(`Couldn't find that id.`)
                    ],
                    ephemeral: true
                });
            }
        }
    }
}
