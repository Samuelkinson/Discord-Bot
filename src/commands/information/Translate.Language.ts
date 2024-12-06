import { ApplicationCommandOptionType, CacheType, ChatInputCommandInteraction, EmbedBuilder, PermissionsBitField } from "discord.js"
import CustomClient from "../../base/classes/CustomClient";
import SubCommand from "../../base/classes/SubCommand";
//@ts-ignore
import translate from "translate-google";


function getSelectedTranslationValue(interaction: any) {
    const optionNames = ["a-f", "f-k", "k-r", "r-w", "w-z"]; // List of option names
    for (const optionName of optionNames) {
        const value = interaction.options.getString(optionName);
        if (value !== null) {
            return value; // Return the value of the first found option
        }
    }
    return "Default value or handle not found"; // Handle the case when no option is selected
}

export default class translateLanguage extends SubCommand{
    constructor(client: CustomClient){
        super(client, {
            name: "translate.language",
        });
    }

    Execute(interaction: ChatInputCommandInteraction){
        try {
            //@ts-ignore
            const translationValue = getSelectedTranslationValue(interaction);
            const text = interaction.options.getString('message');
            
            translate(text, { to: translationValue })
            .then((res: any) => {
                return interaction.reply({embeds: [new EmbedBuilder()
                    .setColor("Blue")
                    .setDescription(`${res}`)
            ], ephemeral: true})
            .catch((err) => {
                return interaction.reply({embeds: [new EmbedBuilder()
                    .setColor("Red")
                    .setDescription(`I couldn't translate this.`)
                ], ephemeral: true})
            })}
            );
        }catch{
            return interaction.reply({embeds: [new EmbedBuilder()
                .setColor("Red")
                .setDescription(`Error`)
            ], ephemeral: true})
        }
    }
}