import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";

export default class BatchAddEmbed {
    //@ts-ignore
    async Execute(
        interaction: ChatInputCommandInteraction,
        name: string,
        bestBatch: string,
        budgetBatch: string,
        extraInfo: string,
        url: string,
        image: string,
        lastUpdated: string,
        incrementedID: string,
        prefix: string
    ) {
        interaction.reply({embeds: [new EmbedBuilder()
            .setColor("Blue")
            .setTitle(`${url ? `Our reddit!` : `Our reddit!` }`)
            .setThumbnail(`${image ? image : `https://i.imgur.com/Z5t9i1n.jpeg` }`)
            .setURL(`${url ? url : `https://www.reddit.com/r/CityOfReps/` }`)
            .addFields(
                { name: '👟 Shoe name:', value: `${name ? `\`${name}\`` : 'No information'} \n`, inline: true },
                { name: '\n', value: '\n' },
                { name: '🐐 Best Batch:', value:`\`${bestBatch ? bestBatch : 'No information'}\``, inline: false },
                { name: '\n', value: '\n' },
                { name: '🙏🏼 Budget Batch', value: `\`${budgetBatch ? budgetBatch : 'No information'}\`` },
                { name: '\n', value: '\n' },
                { name: '✨ Extra Information:', value: `${extraInfo ? `\`${extraInfo}\`` : `No information`}`, inline: false },
            )
            .setDescription(`🗯 The following id: \`${prefix}${incrementedID}\` information was added !`)
            .setFooter({
                text: `${lastUpdated ? `Last updated on: ${new Date(lastUpdated).toLocaleDateString()}` : `Last updated on: Unknown!`}`,
        })
        ], ephemeral: true})
    }
}
