import { ApplicationCommandOptionType, CacheType, ChatInputCommandInteraction, PermissionsBitField } from "discord.js";
import Command from "../../base/classes/Command";
import CustomClient from "../../base/classes/CustomClient";
import Category from "../../base/enums/Category";

export default class DevOnly extends Command{
    constructor(client: CustomClient){
        super(client, {
            name: "devonly",
            description: "Dev only command",
            category: Category.Developer,
            default_member_permissions: PermissionsBitField.Flags.Administrator,
            dm_permissions: false,
            cooldown: 3,
            options: [],
            dev: false,
            trusted: true
        });
    }

    Execute(interaction: ChatInputCommandInteraction){
        interaction.reply({content: "This is a developer command!", ephemeral: true});
    }

}