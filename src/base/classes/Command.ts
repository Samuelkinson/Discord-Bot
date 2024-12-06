import { ChatInputCommandInteraction, CacheType, AutocompleteInteraction } from "discord.js";
import Category from "../enums/Category";
import ICommand from "../interfaces/ICommand";
import CustomClient from "./CustomClient";
import ICommandOptions from "../interfaces/IcommandOptions";

export default class Command implements ICommand{
    client: CustomClient;
    name: string;
    description: string;
    category: Category;
    options: object;
    default_member_permissions: bigint;
    dm_permissions: boolean;
    cooldown: number;
    dev: boolean; 
    trusted: boolean;

    constructor(client:CustomClient, options: ICommandOptions){
        this.client = client;
        this.name = options.name;
        this.description = options.description;
        this.category = options.category;
        this.options = options.options;
        this.default_member_permissions = options.default_member_permissions;
        this.dm_permissions = options.dm_permissions;
        this.cooldown = options.cooldown;
        this.dev = options.dev;
        this.trusted = options.trusted;
    }

    Execute(interaction: ChatInputCommandInteraction<CacheType>): void {
    }
    Autcomplete(interaction: AutocompleteInteraction<CacheType>): void {
    }

}