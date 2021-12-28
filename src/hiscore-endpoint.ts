// HiscoreEndpointType enum
// Normal, Hardcore, Ironman, HardcoreIronman, UltimateIronman, Deadman, League, Tournament

export enum HiscoreEndpointType {
    Normal = 0,
    Ironman = 1,
    HardcoreIronman = 2,
    UltimateIronman = 3,
    Deadman = 4,
    League = 5,
    Tournament = 6,
}

// Map from hiscore entry type to hiscore endpoint url
// Normal: http://services.runescape.com/m=hiscore_oldschool/index_lite.ws
// Ironman: http://services.runescape.com/m=hiscore_oldschool_ironman/index_lite.ws
// HardcoreIronman: http://services.runescape.com/m=hiscore_oldschool_hardcore_ironman/index_lite.ws
// UltimateIronman: http://services.runescape.com/m=hiscore_oldschool_ultimate/index_lite.ws
// Deadman: http://services.runescape.com/m=hiscore_oldschool_deadman/index_lite.ws
// League: http://services.runescape.com/m=hiscore_oldschool_league/index_lite.ws
// Tournament: http://services.runescape.com/m=hiscore_oldschool_tournament/index_lite.ws
export const HiscoreEndpointUrlMap = {
    [HiscoreEndpointType.Normal]: "http://services.runescape.com/m=hiscore_oldschool/index_lite.ws",
    [HiscoreEndpointType.Ironman]: "http://services.runescape.com/m=hiscore_oldschool_ironman/index_lite.ws",
    [HiscoreEndpointType.HardcoreIronman]: "http://services.runescape.com/m=hiscore_oldschool_hardcore_ironman/index_lite.ws",
    [HiscoreEndpointType.UltimateIronman]: "http://services.runescape.com/m=hiscore_oldschool_ultimate/index_lite.ws",
    [HiscoreEndpointType.Deadman]: "http://services.runescape.com/m=hiscore_oldschool_deadman/index_lite.ws",
    [HiscoreEndpointType.League]: "http://services.runescape.com/m=hiscore_oldschool_league/index_lite.ws",
    [HiscoreEndpointType.Tournament]: "http://services.runescape.com/m=hiscore_oldschool_tournament/index_lite.ws",
}