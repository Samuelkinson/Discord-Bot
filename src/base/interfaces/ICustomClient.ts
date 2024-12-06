import { Collection } from "discord.js";
import Iconfig from "./Iconfig";
import Command from "../classes/Command";
import SubCommand from "../classes/SubCommand";

export default interface IcustomClient {
    config: Iconfig;
    commands: Collection<string, Command>;
    subCommands: Collection<string, SubCommand>;
    cooldowns: Collection<string, Collection<string, number>>;
    developmentMode: boolean;
    Init(): void;
    LoadHandlers(): void;
}