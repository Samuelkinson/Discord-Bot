import { ChatInputCommandInteraction, EmbedBuilder } from "discord.js";

export default class BatchEmbed {
    //@ts-ignore
    async Execute(interaction: ChatInputCommandInteraction, data: Array) {
        interaction.reply({embeds: [new EmbedBuilder()
            .setColor("Blue")
            .setTitle(`${data?.url ? `Our reddit!` : `Our reddit!` }`)
            .setThumbnail(`${data?.image ? data?.image : `https://styles.redditmedia.com/t5_7e8xzv/styles/communityIcon_w3sah3qrtk8c1.jpeg?format=pjpg&s=728be01381b1ba4963d5435b87811af907a3d25d` }`)
            .setURL(`${data?.url ? data?.url : `https://www.reddit.com/r/CityOfReps/` }`)
            .addFields(
                { name: '👟 Shoe name:', value: `${data?.name ? `\`${data?.name}\`` : 'No information'} \n`, inline: true },
                { name: '\n', value: '\n' },
                { name: '🐐 Best Batch:', value:`\`${data?.bestBatch ? data?.bestBatch : 'No information'}\``, inline: false },
                { name: '\n', value: '\n' },
                { name: '🙏🏼 Budget Batch', value: `\`${data?.budgetBatch ? data.budgetBatch : 'No information'}\`` },
                { name: '\n', value: '\n' },
                { name: '✨ Extra Information:', value: `${data?.extraInfo ? `\`${data?.extraInfo}\`` : `No information`}`, inline: false },
                { name: '\n', value: '\n' },
                { name: '📅 Last updated on:', value: `${data.lastUpdated ? `\`${new Date(data.lastUpdated).toLocaleDateString()}\`` : `Last updated on: Unknown!`}`, inline: false },
                { name: '\n', value: '\n' },
                { name: '\n', value: '\n' },
            )
            .setDescription(`🗯 The shoe has the following id: \`${data?.id ? data?.id : 'No ID' }\`!`)
            .setFooter({
                text: `Inaccurate information? Contact the mods please.`,
        })
        ], ephemeral: true})
    }
}
