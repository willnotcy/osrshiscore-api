import { HiscoreEntryType } from "./hiscore-entry-type";

// static map of entry name to hiscore entry type
// Type overall: [overall]
// Type skill: [attack, defence, strength, hitpoints, ranged, prayer, magic, cooking, woodcutting, fletching, fishing, firemaking, crafting, smithing, mining, herblore, agility, thieving, slayer, farming, runecraft, hunter, construction]
// Type activity: [league points]
// Type minigame: [bounty hunter hunter, bounty hunter rogue, clue scroll all, clue scroll beginner, clue scroll easy, clue scroll medium, clue scroll hard, clue scroll elite, clue scroll master, last man standing, soul wars zeal]
// Type boss: [abyssal sire, alchemical hydra, barrows chests, bryophyta, callisto, cerberus, chambers of xeric, chambers of xeric challenge mode, chaos elemental, chaos fanatic, commander zilyana, corporeal beast, crazy archaeologist, dagannoth prime, dagannoth rex, dagannoth supreme, deranged archaeologist, general graardor, giant mole, grotesque guardians, hespori, kalphite queen, king black dragon, kraken, kree'arra, k'ril tsutsaroth, mimic, nex, nightmare, phosanis nightmare, obor, sarachnis, scorpia, skotizo, tempoross, the gauntlet, the corrupted gauntlet, theatre of blood, theatre of blood hard mode, thermonuclear smoke devil, tzkal-zuk, tztok-jad, venenatis, vet'ion, vorkath, wintertodt, zalcano, zulrah]
export const HiscoreEntryTypeMap = {
    'Overall': HiscoreEntryType.Overall,
    'Attack': HiscoreEntryType.Skill,
    'Defence': HiscoreEntryType.Skill,
    'Strength': HiscoreEntryType.Skill,
    'Hitpoints': HiscoreEntryType.Skill,
    'Ranged': HiscoreEntryType.Skill,
    'Prayer': HiscoreEntryType.Skill,
    'Magic': HiscoreEntryType.Skill,
    'Cooking': HiscoreEntryType.Skill,
    'Woodcutting': HiscoreEntryType.Skill,
    'Fletching': HiscoreEntryType.Skill,
    'Fishing': HiscoreEntryType.Skill,
    'Firemaking': HiscoreEntryType.Skill,
    'Crafting': HiscoreEntryType.Skill,
    'Smithing': HiscoreEntryType.Skill,
    'Mining': HiscoreEntryType.Skill,
    'Herblore': HiscoreEntryType.Skill,
    'Agility': HiscoreEntryType.Skill,
    'Thieving': HiscoreEntryType.Skill,
    'Slayer': HiscoreEntryType.Skill,
    'Farming': HiscoreEntryType.Skill,
    'Runecraft': HiscoreEntryType.Skill,
    'Hunter': HiscoreEntryType.Skill,
    'Construction': HiscoreEntryType.Skill,
    'League Points': HiscoreEntryType.Activity,
    'Bounty Hunter (Hunter)': HiscoreEntryType.Minigame,
    'Bounty Hunter (Rogue)': HiscoreEntryType.Minigame,
    'Clue Scroll (All)': HiscoreEntryType.Minigame,
    'Clue Scroll (Beginner)': HiscoreEntryType.Minigame,
    'Clue Scroll (Easy)': HiscoreEntryType.Minigame,
    'Clue Scroll (Medium)': HiscoreEntryType.Minigame,
    'Clue Scroll (Hard)': HiscoreEntryType.Minigame,
    'Clue Scroll (Elite)': HiscoreEntryType.Minigame,
    'Clue Scroll (Master)': HiscoreEntryType.Minigame,
    'Last Man Standing': HiscoreEntryType.Minigame,
    'Soul Wars Zeal': HiscoreEntryType.Minigame,
    'Abyssal Sire': HiscoreEntryType.Boss,
    'Alchemical Hydra': HiscoreEntryType.Boss,
    'Barrows Chests': HiscoreEntryType.Boss,
    'Bryophyta': HiscoreEntryType.Boss,
    'Callisto': HiscoreEntryType.Boss,
    'Cerberus': HiscoreEntryType.Boss,
    'Chambers of Xeric': HiscoreEntryType.Boss,
    'Chambers of Xeric (Challenge Mode)': HiscoreEntryType.Boss,
    'Chaos Elemental': HiscoreEntryType.Boss,
    'Chaos Fanatic': HiscoreEntryType.Boss,
    'Commander Zilyana': HiscoreEntryType.Boss,
    'Corporeal Beast': HiscoreEntryType.Boss,
    'Crazy Archaeologist': HiscoreEntryType.Boss,
    'Dagannoth Prime': HiscoreEntryType.Boss,
    'Dagannoth Rex': HiscoreEntryType.Boss,
    'Dagannoth Supreme': HiscoreEntryType.Boss,
    'Deranged Archaeologist': HiscoreEntryType.Boss,
    'General Graardor': HiscoreEntryType.Boss,
    'Giant Mole': HiscoreEntryType.Boss,
    'Grotesque Guardians': HiscoreEntryType.Boss,
    'Hespori': HiscoreEntryType.Boss,
    'Kalphite Queen': HiscoreEntryType.Boss,
    'King Black Dragon': HiscoreEntryType.Boss,
    'Kraken': HiscoreEntryType.Boss,
    'Kree\'Arra': HiscoreEntryType.Boss,
    'K\'ril Tsutsaroth': HiscoreEntryType.Boss,
    'Mimic': HiscoreEntryType.Boss,
    'Nex': HiscoreEntryType.Boss,
    'Nightmare': HiscoreEntryType.Boss,
    'Phosanis Nightmare': HiscoreEntryType.Boss,
    'Obor': HiscoreEntryType.Boss,
    'Sarachnis': HiscoreEntryType.Boss,
    'Scorpia': HiscoreEntryType.Boss,
    'Skotizo': HiscoreEntryType.Boss,
    'Tempoross': HiscoreEntryType.Boss,
    'The Gauntlet': HiscoreEntryType.Boss,
    'The Corrupted Gauntlet': HiscoreEntryType.Boss,
    'Theatre of Blood': HiscoreEntryType.Boss,
    'Theatre of Blood (Hard Mode)': HiscoreEntryType.Boss,
    'Thermonuclear Smoke Devil': HiscoreEntryType.Boss,
    'Tzkal-Zuk': HiscoreEntryType.Boss,
    'Tztok-Jad': HiscoreEntryType.Boss,
    'Venenatis': HiscoreEntryType.Boss,
    'Vet\'ion': HiscoreEntryType.Boss,
    'Vorkath': HiscoreEntryType.Boss,
    'Wintertodt': HiscoreEntryType.Boss,
    'Zalcano': HiscoreEntryType.Boss,
    'Zulrah': HiscoreEntryType.Boss,
}
