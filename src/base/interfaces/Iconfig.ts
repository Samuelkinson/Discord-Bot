export default interface Iconfig {
    token: string;
    discordClientId: string;
    mongoUrl: string;
    
    devToken: string;
    devDiscordClientId: string;
    devGuildID: string;
    developerUserIds: string[];
    trustedUserIds: string[];
    devMongoUrl: string;
}