import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import CustomClient from "../../base/classes/CustomClient";
import SubCommand from "../../base/classes/SubCommand";
import BatchConfig from "../../base/schemas/BatchConfig";


export default class devBatchRemove extends SubCommand {
    constructor(client: CustomClient) {
        super(client, {
            name: "devbatch.remove",
        });
    }

    async Execute(interaction: ChatInputCommandInteraction) {
        // Get all the user input data and the BD data
        const userInputId = interaction.options.getString('id')?.toUpperCase().trim();
        const model = interaction.options.getString('model');

        let data = await BatchConfig.findOne({ guildID: interaction.guild?.id });

        //@ts-ignore
        const sampleId = data[model][0]?.id;
        const prefix = sampleId.match(/^[^\d]+/)[0];
        //@ts-ignore
        const id = userInputId.startsWith(prefix) ? userInputId : `${prefix}${userInputId}`;

        //@ts-ignore
        let filteredData = data[model].find(item => item.id === id);

        //@ts-ignore
        if (data) {
            try {
                const result = await BatchConfig.updateOne(
                    { [`${model}.id`]: id }, // Query to find the document with the specified ID in the chosen model
                    //@ts-ignore
                    { $pull: { [model]: { id: id } } } // Pull (remove) the object with the specified ID from the chosen model's array
                );
                console.log(filteredData);
                if (result.modifiedCount <= 0) {
                    interaction.reply({
                        embeds: [new EmbedBuilder()
                            .setColor("Red")
                            .setDescription(`The id: "${id}" doesn't exist.`)
                        ],
                        ephemeral: true
                    });
                } else {
                    interaction.reply({
                        embeds: [new EmbedBuilder()
                            .setColor("Green")
                            .setDescription(`The data was deleted.`)
                        ],
                        ephemeral: true
                    });
                }

            } catch (error) {
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
