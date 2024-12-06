import { PermissionsBitField, ApplicationCommandOptionType } from "discord.js";
import Command from "../../base/classes/Command";
import CustomClient from "../../base/classes/CustomClient";
import Category from "../../base/enums/Category";
import { shoesModels } from "../../base/functions/random";

const Models = shoesModels();

export default class devBatch extends Command{
    constructor(client: CustomClient){
        super(client, {
            name: "devbatch",
            description: "Change the batch.json ",
            category: Category.Trusted,
            default_member_permissions: PermissionsBitField.Flags.UseApplicationCommands,
            dm_permissions: false,
            cooldown: 3,
            dev: true, //WHEN READY CHANGE TO FALSE
            trusted: true,
            options: [
                {
                    name: "add",
                    description: "Add shoe option",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "model",
                            description: "Shoe model",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                            choices: Models
                        },
                        {
                            name: "name",
                            description: "Shoe name",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                        },
                        {
                            name: "bestbatch",
                            description: "Best Batch name",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                        },
                        {
                            name: "budgetbatch",
                            description: "Budget Batch name",
                            type: ApplicationCommandOptionType.String,
                            required: false,
                        },
                        {
                            name: "extrainfo",
                            description: "Give me extra information",
                            type: ApplicationCommandOptionType.String,
                            required: false,
                        },
                        {
                            name: "url",
                            description: "W2C link",
                            type: ApplicationCommandOptionType.String,
                            required: false,
                        },
                        {
                            name: "image",
                            description: "Shoe image URl (from goat.com would be the best)",
                            type: ApplicationCommandOptionType.String,
                            required: false,
                        },
                    ]
                },
                {
                    name: "remove",
                    description: "Remove shoe option",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [{
                        name: "model",
                        description: "Shoe model",
                        type: ApplicationCommandOptionType.String,
                        required: true,
                        choices: Models 
                    },
                    {
                        name: "id",
                        description: "Shoe id",
                        type: ApplicationCommandOptionType.String,
                        required: true,
                    }]
                },
                {
                    name: "edit",
                    description: "Edit shoe option",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [{
                        name: "model",
                        description: "Shoe model",
                        type: ApplicationCommandOptionType.String,
                        required: true,
                        choices: Models
                    },
                    {
                        name: "id",
                        description: "ID to edit",
                        type: ApplicationCommandOptionType.String,
                        required: true,
                    },
                    {
                        name: "name",
                        description: "Name of the shoe",
                        type: ApplicationCommandOptionType.String,
                        required: false,
                    },
                    {
                        name: "bestbatch",
                        description: "Best batch",
                        type: ApplicationCommandOptionType.String,
                        required: false,
                    },
                    {
                        name: "budgetbatch",
                        description: "Budget batch",
                        type: ApplicationCommandOptionType.String,
                        required: false,
                    },
                    {
                        name: "extrainfo",
                        description: "Extra Info batch",
                        type: ApplicationCommandOptionType.String,
                        required: false,
                    },
                    {
                        name: "url",
                        description: "Shoe URL",
                        type: ApplicationCommandOptionType.String,
                        required: false,
                    },
                    {
                        name: "image",
                        description: "Image batch",
                        type: ApplicationCommandOptionType.String,
                        required: false,
                    }]
                },
                {
                    name: "download",
                    description: "Download main info",
                    type: ApplicationCommandOptionType.Subcommand,
                   
                }
            ]
        },)
    }
}
   