import { ApplicationCommandOptionType, CacheType, ChatInputCommandInteraction, PermissionsBitField } from "discord.js";
import Command from "../base/classes/Command";
import CustomClient from "../base/classes/CustomClient";
import Category from "../base/enums/Category";

export default class Test extends Command{
    constructor(client: CustomClient){
        super(client, {
            name: "test",
            description: "My test command",
            category: Category.Utilities,
            default_member_permissions: PermissionsBitField.Flags.UseApplicationCommands,
            dm_permissions: false,
            cooldown: 3,
            dev: false,
            trusted: false,
            options: [
                {
                    name: "one",
                    description: "This is the first option",
                    type: ApplicationCommandOptionType.Subcommand
                },
                {
                    name: "two",
                    description: "This is the second option",
                    type: ApplicationCommandOptionType.Subcommand
                }
            ],      
        });
    }

    // Execute(interaction: ChatInputCommandInteraction){
    //     interaction.reply({content: "Test command has benn ran!", ephemeral: true});
    // }

}