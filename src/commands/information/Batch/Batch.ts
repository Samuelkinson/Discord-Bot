import { ApplicationCommandOptionType, CacheType, ChatInputCommandInteraction, EmbedBuilder, PermissionsBitField } from "discord.js";
import Command from "../../../base/classes/Command";
import CustomClient from "../../../base/classes/CustomClient";
import Category from "../../../base/enums/Category";
import BatchConfig from "../../../base/schemas/BatchConfig";

async function getBatchConfigData(guildID: string) {
    try {
        const data = await BatchConfig.findOne({ guildID });
        if (!data) {
            throw new Error('No data found');
        }
        return data;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

export default class Batch extends Command {
    constructor(client: CustomClient) {
        super(client, {
            name: "batch",
            description: "See the best batch for each shoe!",
            category: Category.Information,
            default_member_permissions: PermissionsBitField.Flags.UseApplicationCommands,
            dm_permissions: false,
            cooldown: 3,
            dev: true,
            trusted: false,
            options: []
        });

        this.loadOptions();
    }

    async loadOptions() {
        try {
            const data = await getBatchConfigData('1292621923263709254');

            //@ts-ignore
            const transformCategory = (category) => {
                //@ts-ignore
                return data[category].map(({ id, name }) => ({ name, value: id })).slice(0, 24);
            };

            const dunks = transformCategory('dunks');
            const aj1 = transformCategory('aj1');
            const aj3 = transformCategory('aj3');
            const aj4 = transformCategory('aj4');
            const af1 = transformCategory('af1');
            const ye = transformCategory('ye');
            const other = transformCategory('other');
            const ts = transformCategory('ts');

            this.options = [
                {
                    name: "dunks",
                    description: "Dunks option",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "name",
                            description: "Shoe name",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                            choices: dunks
                        },
                    ]
                },
                {
                    name: "aj1",
                    description: "Air Jordan 1 options",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "name",
                            description: "Shoe name",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                            choices: aj1
                        },
                    ]
                },
                {
                    name: "aj3",
                    description: "Air Jordan 3 options",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "name",
                            description: "Shoe name",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                            choices: aj3
                        },
                    ]
                },
                {
                    name: "aj4",
                    description: "Air Jordan 4 options",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "name",
                            description: "Shoe name",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                            choices: aj4
                        },
                    ]
                },
                {
                    name: "af1",
                    description: "Air Force 1 options",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "name",
                            description: "Shoe name",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                            choices: af1
                        },
                    ]
                },
                {
                    name: "ye",
                    description: "Yeezys options",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "name",
                            description: "Shoe name",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                            choices: ye
                        },
                    ]
                },
                {
                    name: "other",
                    description: "Other options",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "name",
                            description: "Shoe name",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                            choices: other
                        },
                    ]
                },
                {
                    name: "travis_scott",
                    description: "Travis Scott options",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "name",
                            description: "Shoe name",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                            choices: ts
                        },
                    ]
                }
            ];
        } catch (err) {
            console.error('Failed to load options:', err);
        }
    }
}
