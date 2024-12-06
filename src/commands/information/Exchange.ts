import { ApplicationCommandOptionType, CacheType, ChatInputCommandInteraction, EmbedBuilder, PermissionsBitField } from "discord.js";
import Command from "../../base/classes/Command";
import CustomClient from "../../base/classes/CustomClient";
import Category from "../../base/enums/Category";
import * as CurrencyData from "../../../data/money.json";
//@ts-ignore
import converter = require('currency-exchanger-js');

const currency = Object.entries(CurrencyData).map(([name, id]) => ({ name, value: id })).slice(0, 24);

export default class exchange extends Command{
    constructor(client: CustomClient){
        super(client, {
            name: "exchange",
            description: "My convert command",
            category: Category.Utilities,
            default_member_permissions: PermissionsBitField.Flags.UseApplicationCommands,
            dm_permissions: false,
            cooldown: 3,
            dev: true,
            trusted: false,
            options: [
                        {
                            name: "from",
                            description: "Currency to change from (USD, EUR..)",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                            choices: currency
                        },
                        {
                            name: "to",
                            description: "Currency to change to (USD, EUR..)",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                            choices: currency
                        },
                        {
                            name: "amount",
                            description: "The amount to exchange to",
                            type: ApplicationCommandOptionType.String,
                            required: true,  
                        }
            ]      
        });
    }

    async Execute(interaction: ChatInputCommandInteraction){
        try {
            let from = interaction.options.getString('from');
            let to = interaction.options.getString('to');
            //@ts-ignore
            const amount = parseInt(interaction.options.getString('amount'));
            if(isNaN(amount)){
                return interaction.reply({embeds: [new EmbedBuilder()
                    .setColor("Red")
                    .setDescription(`Amount needs to be a number`)
                ], ephemeral: true});
            }
            const TodayDate = new Date()
            const convert = await converter.convertOnDate(amount, from, to, new Date(TodayDate));

            return interaction.reply({embeds: [new EmbedBuilder()
                .setColor("Blue")
                .setThumbnail('https://cdn-icons-png.freepik.com/512/6607/6607631.png')
                .setTitle(`Exchange from ${from?.toUpperCase()} to ${to?.toUpperCase()}`)
                .addFields({name: `\u200B`, value: `From: \`${amount}${from?.toUpperCase()}\`\nTo: \`${to?.toUpperCase()}\`\nTotal Converted is: \`${convert.toFixed(2)} ${to?.toUpperCase()}\``})
            ], ephemeral: true});
        } catch (error) {
            interaction.reply({content: "Error!", ephemeral: true});
            console.log(error);
        }
    }

}