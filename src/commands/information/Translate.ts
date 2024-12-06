import { ApplicationCommandOptionType, CacheType, ChatInputCommandInteraction, PermissionsBitField } from "discord.js";
import Command from "../../base/classes/Command";
import CustomClient from "../../base/classes/CustomClient";
import Category from "../../base/enums/Category";
import languages from "../../../data/languages.json";

const languages1 = Object.entries(languages).map(([id, name]) => ({ name, value: id })).slice(0, 24);
const languages2 = Object.entries(languages).map(([id, name]) => ({ name, value: id })).slice(24, 49);
const languages3 = Object.entries(languages).map(([id, name]) => ({ name, value: id })).slice(49, 74);
const languages4 = Object.entries(languages).map(([id, name]) => ({ name, value: id })).slice(74, 99);
const languages5 = Object.entries(languages).map(([id, name]) => ({ name, value: id })).slice(99, 105);

export default class translate extends Command{
    constructor(client: CustomClient){
        super(client, {
            name: "translate",
            description: "My convert command",
            category: Category.Utilities,
            default_member_permissions: PermissionsBitField.Flags.UseApplicationCommands,
            dm_permissions: false,
            cooldown: 3,
            dev: true,
            trusted: false,
            options: [
                {
                    name: "language",
                    description: "Choose only 1 Language option, if more than 1 are choosen it will default to the first (A-Z).",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "message",
                            description: "Write the message you want to translate",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                        },
                        {
                            name: "a-f",
                            description: "Afrikaans to Filipino",
                            type: ApplicationCommandOptionType.String,
                            required: false,
                            choices: languages1
                        },
                        {
                            name: "f-k",
                            description: "Finnish to Khmer",
                            type: ApplicationCommandOptionType.String,
                            required: false,
                            choices: languages2
                        },
                        {
                            name: "k-r",
                            description: "Korean to Romanian",
                            type: ApplicationCommandOptionType.String,
                            required: false,
                            choices: languages3
                        },
                        {
                            name: "r-w",
                            description: "Russian to Welsh",
                            type: ApplicationCommandOptionType.String,
                            required: false,
                            choices: languages4
                        },
                        {
                            name: "w-z",
                            description: "Xhosa to Zulu",
                            type: ApplicationCommandOptionType.String,
                            required: false,
                            choices: languages5
                        },
                    ]
                },
            ]      
        });
    }

}