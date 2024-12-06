import { ApplicationCommandOptionType, PermissionsBitField } from "discord.js";
import Command from "../../base/classes/Command";
import CustomClient from "../../base/classes/CustomClient";
import Category from "../../base/enums/Category";

export default class Ban extends Command{
    constructor(client: CustomClient){
        super(client, {
            name: "ban",
            description: "Ban a user from the guild or remove a ban",
            category: Category.Administrator,
            default_member_permissions: PermissionsBitField.Flags.BanMembers,
            dm_permissions: false,
            cooldown: 3,
            dev: false, 
            trusted: false,
            options: [
                {
                    name: "add",
                    description: "Ban a user from the guild",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "target",
                            description: "Select a user to ban",
                            type: ApplicationCommandOptionType.User,
                            required: true,
                        }, 
                        {
                            name: "reason",
                            description: "Provide a reson for the ban",
                            type: ApplicationCommandOptionType.String,
                            required: false,
                        }, 
                        {
                            name: "days",
                            description: "Delete the users recent messages",
                            type: ApplicationCommandOptionType.String,
                            required: false,
                            choices: [
                                { name: "None", value: "0"},
                                { name: "Previous 1 Day", value: "1d"},
                                { name: "Previous 7 Days", value: "7d"},
                            ]
                        },
                        {
                            name: "silent",
                            description: "Don't send a message to the channel",
                            type: ApplicationCommandOptionType.Boolean,
                            required: false,
                        }
                    ]
                },
                {
                    name: "remove",
                    description: "Remove a ban a user from a user",
                    type: ApplicationCommandOptionType.Subcommand,
                    options: [
                        {
                            name: "target",
                            description: "Enter the users id to unban",
                            type: ApplicationCommandOptionType.String,
                            required: true,
                        }, 
                        {
                            name: "reason",
                            description: "Provide a reson for the ban",
                            type: ApplicationCommandOptionType.String,
                            required: false,
                        }, 
                        {
                            name: "silent",
                            description: "Don't send a message to the channel",
                            type: ApplicationCommandOptionType.Boolean,
                            required: false,
                        }
                    ]
                }
            ]
        });
    }
}