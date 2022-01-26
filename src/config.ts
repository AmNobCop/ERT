import { BotConfig } from './structures/types'; 

export const config: BotConfig = {
    groupId: 5571247,
    slashCommands: true,
    legacyCommands: {
        enabled: false,
        prefixes: ['q!'],
    },
    permissions: {
        all: [''],
        ranking: ['827781617564254260'],
        users: ['827781617564254260'],
        shout: ['827781617564254260'],
        join: ['827781617564254260'],
        signal: [''],
        admin: ['827781617564254260'],
    },
    logChannels: {
        actions: '930942570949918760',
        shout: '930942570949918760',
    },
    database: {
        enabled: true,
        type: 'mongodb',
    },
    api: false,
    maximumRank: 240,
    verificationChecks: true,
    firedRank: 1,
    suspendedRank: 1,
    recordManualActions: false,
    memberCount: {
        enabled: false,
        channelId: '',
        milestone: 100,
        onlyMilestones: false,
    },
    xpSystem: {
        enabled: false,
        autoRankup: false,
        roles: [
            /* Example:
            {
                rank: 3,
                xp: 30,
            },
            */
        ],
    },
    antiAbuse: {
        enabled: false,
        clearDuration: 1 * 60,
        threshold: 5,
        demotionRank: 1,
        bypassRoleId: '',
    },
    activity: {
        enabled: true,
        type: 'WATCHING',
        value: 'over ERT with Nob, Lepa, & South',
    },
    status: 'dnd',
    deleteWallURLs: false,
}
