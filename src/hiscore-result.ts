// class HiscoreResult with getters and setters
// string player name
// ResultEntry overall
// ResultEntry attack
// ResultEntry defence
// ResultEntry strength
// ResultEntry hitpoints
// ResultEntry ranged
// ResultEntry prayer
// ResultEntry magic
// ResultEntry cooking
// ResultEntry woodcutting
// ResultEntry fletching
// ResultEntry fishing
// ResultEntry firemaking
// ResultEntry crafting
// ResultEntry smithing
// ResultEntry mining
// ResultEntry herblore
// ResultEntry agility
// ResultEntry thieving
// ResultEntry slayer
// ResultEntry farming
// ResultEntry runecraft
// ResultEntry hunter
// ResultEntry construction
// ResultEntry league points
// ResultEntry bounty hunter hunter
// ResultEntry bounty hunter rogue
// ResultEntry clue scroll all
// ResultEntry clue scroll beginner
// ResultEntry clue scroll easy
// ResultEntry clue scroll medium
// ResultEntry clue scroll hard
// ResultEntry clue scroll elite
// ResultEntry clue scroll master
// ResultEntry abyssal sire
// ResultEntry alchemical hydra
// ResultEntry barrows brothers
// ResultEntry bryophyta
// ResultEntry callisto
// ResultEntry cerberus
// ResultEntry chambers of xeric
// ResultEntry chambers of xeric (challenge mode)
// ResultEntry chaos elemental
// ResultEntry chaos fanatic
// ResultEntry commander zilyana
// ResultEntry corporeal beast
// ResultEntry crazy archaeologist
// ResultEntry dagannoth prime
// ResultEntry dagannoth rex
// ResultEntry dagannoth supreme
// ResultEntry deranged archaeologist
// ResultEntry general graardor
// ResultEntry giant mole
// ResultEntry grotesque guardians
// ResultEntry hespori
// ResultEntry kalphite queen
// ResultEntry king black dragon
// ResultEntry kraken
// ResultEntry Kree'Arra
// ResultEntry k'ril tsutsaroth
// ResultEntry mimic
// ResultEntry nex
// ResultEntry nightmare
// ResultEntry phosanis nightmare
// ResultEntry obor
// ResultEntry sarachnis
// ResultEntry scorpia
// ResultEntry skotizo
// ResultEntry tempoross
// ResultEntry the gauntlet
// ResultEntry the corrupted gauntlet
// ResultEntry Theatre of Blood
// ResultEntry Theatre of Blood (hard)
// ResultEntry Thermonuclear smoke devil
// ResultEntry tzkal-zuk
// ResultEntry tztok-jad
// ResultEntry venenatis
// ResultEntry Vet'ion
// ResultEntry vorkath
// ResultEntry wintertodt
// ResultEntry zalcano
// ResultEntry zulrah

import { HiscoreEndpointType } from "./hiscore-endpoint";
import { ResultEntry } from "./result-entry";
const UndefinedResultEntry = new ResultEntry(-1, -1, -1);

export class HiscoreResult {
    private gamemode: HiscoreEndpointType;
    private playerName: string;
    private overall: ResultEntry;
    private attack: ResultEntry;
    private defence: ResultEntry;
    private strength: ResultEntry;
    private hitpoints: ResultEntry;
    private ranged: ResultEntry;
    private prayer: ResultEntry;
    private magic: ResultEntry;
    private cooking: ResultEntry;
    private woodcutting: ResultEntry;
    private fletching: ResultEntry;
    private fishing: ResultEntry;
    private firemaking: ResultEntry;
    private crafting: ResultEntry;
    private smithing: ResultEntry;
    private mining: ResultEntry;
    private herblore: ResultEntry;
    private agility: ResultEntry;
    private thieving: ResultEntry;
    private slayer: ResultEntry;
    private farming: ResultEntry;
    private runecraft: ResultEntry;
    private hunter: ResultEntry;
    private construction: ResultEntry;
    private leaguePoints: ResultEntry;
    private bountyHunterHunter: ResultEntry;
    private bountyHunterRogue: ResultEntry;
    private clueScrollAll: ResultEntry;
    private clueScrollBeginner: ResultEntry;
    private clueScrollEasy: ResultEntry;
    private clueScrollMedium: ResultEntry;
    private clueScrollHard: ResultEntry;
    private clueScrollElite: ResultEntry;
    private clueScrollMaster: ResultEntry;
    private lastManStanding: ResultEntry;
    private soulWarsZeal: ResultEntry;
    private guardiansOfTheRift: ResultEntry;
    private abyssalSire: ResultEntry;
    private alchemicalHydra: ResultEntry;
    private barrowsBrothers: ResultEntry;
    private bryophyta: ResultEntry;
    private callisto: ResultEntry;
    private cerberus: ResultEntry;
    private chambersOfXeric: ResultEntry;
    private chambersOfXericChallengeMode: ResultEntry;
    private chaosElemental: ResultEntry;
    private chaosFanatic: ResultEntry;
    private commanderZilyana: ResultEntry;
    private corporealBeast: ResultEntry;
    private crazyArchaeologist: ResultEntry;
    private dagannothPrime: ResultEntry;
    private dagannothRex: ResultEntry;
    private dagannothSupreme: ResultEntry;
    private derangedArchaeologist: ResultEntry;
    private generalGraardor: ResultEntry;
    private giantMole: ResultEntry;
    private grotesqueGuardians: ResultEntry;
    private hespori: ResultEntry;
    private kalphiteQueen: ResultEntry;
    private kingBlackDragon: ResultEntry;
    private kraken: ResultEntry;
    private kreeArra: ResultEntry;
    private krilTsutsaroth: ResultEntry;
    private mimic: ResultEntry;
    private nex: ResultEntry;
    private nightmare: ResultEntry;
    private phosanisNightmare: ResultEntry;
    private obor: ResultEntry;
    private sarachnis: ResultEntry;
    private scorpia: ResultEntry;
    private skotizo: ResultEntry;
    private tempoross: ResultEntry;
    private theGauntlet: ResultEntry;
    private theCorruptedGauntlet: ResultEntry;
    private theatreOfBlood: ResultEntry;
    private theatreOfBloodHard: ResultEntry;
    private thermonuclearSmokeDevil: ResultEntry;
    private tzkalZuk: ResultEntry;
    private tztokJad: ResultEntry;
    private venenatis: ResultEntry;
    private vetion: ResultEntry;
    private vorkath: ResultEntry;
    private wintertodt: ResultEntry;
    private zalcano: ResultEntry;
    private zulrah: ResultEntry;

    constructor () {
        this.playerName = '';
        this.overall = UndefinedResultEntry;
        this.attack = UndefinedResultEntry;
        this.defence = UndefinedResultEntry;
        this.strength = UndefinedResultEntry;
        this.hitpoints = UndefinedResultEntry;
        this.ranged = UndefinedResultEntry;
        this.prayer = UndefinedResultEntry;
        this.magic = UndefinedResultEntry;
        this.cooking = UndefinedResultEntry;
        this.woodcutting = UndefinedResultEntry;
        this.fletching = UndefinedResultEntry;
        this.fishing = UndefinedResultEntry;
        this.firemaking = UndefinedResultEntry;
        this.crafting = UndefinedResultEntry;
        this.smithing = UndefinedResultEntry;
        this.mining = UndefinedResultEntry;
        this.herblore = UndefinedResultEntry;
        this.agility = UndefinedResultEntry;
        this.thieving = UndefinedResultEntry;
        this.slayer = UndefinedResultEntry;
        this.farming = UndefinedResultEntry;
        this.runecraft = UndefinedResultEntry;
        this.hunter = UndefinedResultEntry;
        this.construction = UndefinedResultEntry;
        this.leaguePoints = UndefinedResultEntry;
        this.bountyHunterHunter = UndefinedResultEntry;
        this.bountyHunterRogue = UndefinedResultEntry;
        this.clueScrollAll = UndefinedResultEntry;
        this.clueScrollBeginner = UndefinedResultEntry;
        this.clueScrollEasy = UndefinedResultEntry;
        this.clueScrollMedium = UndefinedResultEntry;
        this.clueScrollHard = UndefinedResultEntry;
        this.clueScrollElite = UndefinedResultEntry;
        this.clueScrollMaster = UndefinedResultEntry;
        this.lastManStanding = UndefinedResultEntry;
        this.soulWarsZeal = UndefinedResultEntry;
        this.guardiansOfTheRift = UndefinedResultEntry;
        this.abyssalSire = UndefinedResultEntry;
        this.alchemicalHydra = UndefinedResultEntry;
        this.barrowsBrothers = UndefinedResultEntry;
        this.bryophyta = UndefinedResultEntry;
        this.callisto = UndefinedResultEntry;
        this.cerberus = UndefinedResultEntry;
        this.chambersOfXeric = UndefinedResultEntry;
        this.chambersOfXericChallengeMode = UndefinedResultEntry;
        this.chaosElemental = UndefinedResultEntry;
        this.chaosFanatic = UndefinedResultEntry;
        this.commanderZilyana = UndefinedResultEntry;
        this.corporealBeast = UndefinedResultEntry;
        this.crazyArchaeologist = UndefinedResultEntry;
        this.dagannothPrime = UndefinedResultEntry;
        this.dagannothRex = UndefinedResultEntry;
        this.dagannothSupreme = UndefinedResultEntry;
        this.derangedArchaeologist = UndefinedResultEntry;
        this.generalGraardor = UndefinedResultEntry;
        this.giantMole = UndefinedResultEntry;
        this.grotesqueGuardians = UndefinedResultEntry;
        this.hespori = UndefinedResultEntry;
        this.kalphiteQueen = UndefinedResultEntry;
        this.kingBlackDragon = UndefinedResultEntry;
        this.kraken = UndefinedResultEntry;
        this.kreeArra = UndefinedResultEntry;
        this.krilTsutsaroth = UndefinedResultEntry;
        this.mimic = UndefinedResultEntry;
        this.nex = UndefinedResultEntry;
        this.nightmare = UndefinedResultEntry;
        this.phosanisNightmare = UndefinedResultEntry;
        this.obor = UndefinedResultEntry;
        this.sarachnis = UndefinedResultEntry;
        this.scorpia = UndefinedResultEntry;
        this.skotizo = UndefinedResultEntry;
        this.tempoross = UndefinedResultEntry;
        this.theGauntlet = UndefinedResultEntry;
        this.theCorruptedGauntlet = UndefinedResultEntry;
        this.theatreOfBlood = UndefinedResultEntry;
        this.theatreOfBloodHard = UndefinedResultEntry;
        this.thermonuclearSmokeDevil = UndefinedResultEntry;
        this.tzkalZuk = UndefinedResultEntry;
        this.tztokJad = UndefinedResultEntry;
        this.venenatis = UndefinedResultEntry;
        this.vetion = UndefinedResultEntry;
        this.vorkath = UndefinedResultEntry;
        this.wintertodt = UndefinedResultEntry;
        this.zalcano = UndefinedResultEntry;
        this.zulrah = UndefinedResultEntry;
        this.gamemode = HiscoreEndpointType.Normal
    }

    /**
     * Getter gamemode
     * @return {HiscoreEndpointType}
     */
	public getGamemode(): HiscoreEndpointType {
		return this.gamemode;
	}

    /**
     * Setter gamemode
     * @param {HiscoreEndpointType} value
     */
	public setGamemode(value: HiscoreEndpointType) {
		this.gamemode = value;
	}

    /**
     * Getter playerName
     * @return {string}
     */
	public getPlayerName(): string {
		return this.playerName;
	}

    /**
     * Getter overall
     * @return {ResultEntry}
     */
	public getOverall(): ResultEntry {
		return this.overall;
	}

    /**
     * Getter attack
     * @return {ResultEntry}
     */
	public getAttack(): ResultEntry {
		return this.attack;
	}

    /**
     * Getter defence
     * @return {ResultEntry}
     */
	public getDefence(): ResultEntry {
		return this.defence;
	}

    /**
     * Getter strength
     * @return {ResultEntry}
     */
	public getStrength(): ResultEntry {
		return this.strength;
	}

    /**
     * Getter hitpoints
     * @return {ResultEntry}
     */
	public getHitpoints(): ResultEntry {
		return this.hitpoints;
	}

    /**
     * Getter ranged
     * @return {ResultEntry}
     */
	public getRanged(): ResultEntry {
		return this.ranged;
	}

    /**
     * Getter prayer
     * @return {ResultEntry}
     */
	public getPrayer(): ResultEntry {
		return this.prayer;
	}

    /**
     * Getter magic
     * @return {ResultEntry}
     */
	public getMagic(): ResultEntry {
		return this.magic;
	}

    /**
     * Getter cooking
     * @return {ResultEntry}
     */
	public getCooking(): ResultEntry {
		return this.cooking;
	}

    /**
     * Getter woodcutting
     * @return {ResultEntry}
     */
	public getWoodcutting(): ResultEntry {
		return this.woodcutting;
	}

    /**
     * Getter fletching
     * @return {ResultEntry}
     */
	public getFletching(): ResultEntry {
		return this.fletching;
	}

    /**
     * Getter fishing
     * @return {ResultEntry}
     */
	public getFishing(): ResultEntry {
		return this.fishing;
	}

    /**
     * Getter firemaking
     * @return {ResultEntry}
     */
	public getFiremaking(): ResultEntry {
		return this.firemaking;
	}

    /**
     * Getter crafting
     * @return {ResultEntry}
     */
	public getCrafting(): ResultEntry {
		return this.crafting;
	}

    /**
     * Getter smithing
     * @return {ResultEntry}
     */
	public getSmithing(): ResultEntry {
		return this.smithing;
	}

    /**
     * Getter mining
     * @return {ResultEntry}
     */
	public getMining(): ResultEntry {
		return this.mining;
	}

    /**
     * Getter herblore
     * @return {ResultEntry}
     */
	public getHerblore(): ResultEntry {
		return this.herblore;
	}

    /**
     * Getter agility
     * @return {ResultEntry}
     */
	public getAgility(): ResultEntry {
		return this.agility;
	}

    /**
     * Getter thieving
     * @return {ResultEntry}
     */
	public getThieving(): ResultEntry {
		return this.thieving;
	}

    /**
     * Getter slayer
     * @return {ResultEntry}
     */
	public getSlayer(): ResultEntry {
		return this.slayer;
	}

    /**
     * Getter farming
     * @return {ResultEntry}
     */
	public getFarming(): ResultEntry {
		return this.farming;
	}

    /**
     * Getter runecraft
     * @return {ResultEntry}
     */
	public getRunecraft(): ResultEntry {
		return this.runecraft;
	}

    /**
     * Getter hunter
     * @return {ResultEntry}
     */
	public getHunter(): ResultEntry {
		return this.hunter;
	}

    /**
     * Getter construction
     * @return {ResultEntry}
     */
	public getConstruction(): ResultEntry {
		return this.construction;
	}

    /**
     * Getter leaguePoints
     * @return {ResultEntry}
     */
	public getLeaguePoints(): ResultEntry {
		return this.leaguePoints;
	}

    /**
     * Getter bountyHunterHunter
     * @return {ResultEntry}
     */
	public getBountyHunterHunter(): ResultEntry {
		return this.bountyHunterHunter;
	}

    /**
     * Getter bountyHunterRogue
     * @return {ResultEntry}
     */
	public getBountyHunterRogue(): ResultEntry {
		return this.bountyHunterRogue;
	}

    /**
     * Getter clueScrollAll
     * @return {ResultEntry}
     */
	public getClueScrollAll(): ResultEntry {
		return this.clueScrollAll;
	}

    /**
     * Getter clueScrollBeginner
     * @return {ResultEntry}
     */
	public getClueScrollBeginner(): ResultEntry {
		return this.clueScrollBeginner;
	}

    /**
     * Getter clueScrollEasy
     * @return {ResultEntry}
     */
	public getClueScrollEasy(): ResultEntry {
		return this.clueScrollEasy;
	}

    /**
     * Getter clueScrollMedium
     * @return {ResultEntry}
     */
	public getClueScrollMedium(): ResultEntry {
		return this.clueScrollMedium;
	}

    /**
     * Getter clueScrollHard
     * @return {ResultEntry}
     */
	public getClueScrollHard(): ResultEntry {
		return this.clueScrollHard;
	}

    /**
     * Getter clueScrollElite
     * @return {ResultEntry}
     */
	public getClueScrollElite(): ResultEntry {
		return this.clueScrollElite;
	}

    /**
     * Getter clueScrollMaster
     * @return {ResultEntry}
     */
	public getClueScrollMaster(): ResultEntry {
		return this.clueScrollMaster;
	}

    /**
     * Getter lastManStanding
     * @return {ResultEntry}
     */
	public getLastManStanding(): ResultEntry {
		return this.lastManStanding;
	}

    /**
     * Getter soulWarsZeal
     * @return {ResultEntry}
     */
	public getSoulWarsZeal(): ResultEntry {
		return this.soulWarsZeal;
	}

    /**
     * Getter guardiansOfTheRift
     * @returns {ResultEntry}
     */
    public getGuardiansOfTheRift(): ResultEntry {
        return this.guardiansOfTheRift;
    }

    /**
     * Getter abyssalSire
     * @return {ResultEntry}
     */
	public getAbyssalSire(): ResultEntry {
		return this.abyssalSire;
	}

    /**
     * Getter alchemicalHydra
     * @return {ResultEntry}
     */
	public getAlchemicalHydra(): ResultEntry {
		return this.alchemicalHydra;
	}

    /**
     * Getter barrowsBrothers
     * @return {ResultEntry}
     */
	public getBarrowsBrothers(): ResultEntry {
		return this.barrowsBrothers;
	}

    /**
     * Getter bryophyta
     * @return {ResultEntry}
     */
	public getBryophyta(): ResultEntry {
		return this.bryophyta;
	}

    /**
     * Getter callisto
     * @return {ResultEntry}
     */
	public getCallisto(): ResultEntry {
		return this.callisto;
	}

    /**
     * Getter cerberus
     * @return {ResultEntry}
     */
	public getCerberus(): ResultEntry {
		return this.cerberus;
	}

    /**
     * Getter chambersOfXeric
     * @return {ResultEntry}
     */
	public getChambersOfXeric(): ResultEntry {
		return this.chambersOfXeric;
	}

    /**
     * Getter chambersOfXericChallengeMode
     * @return {ResultEntry}
     */
	public getChambersOfXericChallengeMode(): ResultEntry {
		return this.chambersOfXericChallengeMode;
	}

    /**
     * Getter chaosElemental
     * @return {ResultEntry}
     */
	public getChaosElemental(): ResultEntry {
		return this.chaosElemental;
	}

    /**
     * Getter chaosFanatic
     * @return {ResultEntry}
     */
	public getChaosFanatic(): ResultEntry {
		return this.chaosFanatic;
	}

    /**
     * Getter commanderZilyana
     * @return {ResultEntry}
     */
	public getCommanderZilyana(): ResultEntry {
		return this.commanderZilyana;
	}

    /**
     * Getter corporealBeast
     * @return {ResultEntry}
     */
	public getCorporealBeast(): ResultEntry {
		return this.corporealBeast;
	}

    /**
     * Getter crazyArchaeologist
     * @return {ResultEntry}
     */
	public getCrazyArchaeologist(): ResultEntry {
		return this.crazyArchaeologist;
	}

    /**
     * Getter dagannothPrime
     * @return {ResultEntry}
     */
	public getDagannothPrime(): ResultEntry {
		return this.dagannothPrime;
	}

    /**
     * Getter dagannothRex
     * @return {ResultEntry}
     */
	public getDagannothRex(): ResultEntry {
		return this.dagannothRex;
	}

    /**
     * Getter dagannothSupreme
     * @return {ResultEntry}
     */
	public getDagannothSupreme(): ResultEntry {
		return this.dagannothSupreme;
	}

    /**
     * Getter derangedArchaeologist
     * @return {ResultEntry}
     */
	public getDerangedArchaeologist(): ResultEntry {
		return this.derangedArchaeologist;
	}

    /**
     * Getter generalGraardor
     * @return {ResultEntry}
     */
	public getGeneralGraardor(): ResultEntry {
		return this.generalGraardor;
	}

    /**
     * Getter giantMole
     * @return {ResultEntry}
     */
	public getGiantMole(): ResultEntry {
		return this.giantMole;
	}

    /**
     * Getter grotesqueGuardians
     * @return {ResultEntry}
     */
	public getGrotesqueGuardians(): ResultEntry {
		return this.grotesqueGuardians;
	}

    /**
     * Getter hespori
     * @return {ResultEntry}
     */
	public getHespori(): ResultEntry {
		return this.hespori;
	}

    /**
     * Getter kalphiteQueen
     * @return {ResultEntry}
     */
	public getKalphiteQueen(): ResultEntry {
		return this.kalphiteQueen;
	}

    /**
     * Getter kingBlackDragon
     * @return {ResultEntry}
     */
	public getKingBlackDragon(): ResultEntry {
		return this.kingBlackDragon;
	}

    /**
     * Getter kraken
     * @return {ResultEntry}
     */
	public getKraken(): ResultEntry {
		return this.kraken;
	}

    /**
     * Getter kreeArra
     * @return {ResultEntry}
     */
	public getKreeArra(): ResultEntry {
		return this.kreeArra;
	}

    /**
     * Getter krilTsutsaroth
     * @return {ResultEntry}
     */
	public getKrilTsutsaroth(): ResultEntry {
		return this.krilTsutsaroth;
	}

    /**
     * Getter mimic
     * @return {ResultEntry}
     */
	public getMimic(): ResultEntry {
		return this.mimic;
	}

    /**
     * Getter nex
     * @return {ResultEntry}
     */
	public getNex(): ResultEntry {
		return this.nex;
	}

    /**
     * Getter nightmare
     * @return {ResultEntry}
     */
	public getNightmare(): ResultEntry {
		return this.nightmare;
	}

    /**
     * Getter phosanisNightmare
     * @return {ResultEntry}
     */
	public getPhosanisNightmare(): ResultEntry {
		return this.phosanisNightmare;
	}

    /**
     * Getter obor
     * @return {ResultEntry}
     */
	public getObor(): ResultEntry {
		return this.obor;
	}

    /**
     * Getter sarachnis
     * @return {ResultEntry}
     */
	public getSarachnis(): ResultEntry {
		return this.sarachnis;
	}

    /**
     * Getter scorpia
     * @return {ResultEntry}
     */
	public getScorpia(): ResultEntry {
		return this.scorpia;
	}

    /**
     * Getter skotizo
     * @return {ResultEntry}
     */
	public getSkotizo(): ResultEntry {
		return this.skotizo;
	}

    /**
     * Getter tempoross
     * @return {ResultEntry}
     */
	public getTempoross(): ResultEntry {
		return this.tempoross;
	}

    /**
     * Getter theGauntlet
     * @return {ResultEntry}
     */
	public getTheGauntlet(): ResultEntry {
		return this.theGauntlet;
	}

    /**
     * Getter theCorruptedGauntlet
     * @return {ResultEntry}
     */
	public getTheCorruptedGauntlet(): ResultEntry {
		return this.theCorruptedGauntlet;
	}

    /**
     * Getter theatreOfBlood
     * @return {ResultEntry}
     */
	public getTheatreOfBlood(): ResultEntry {
		return this.theatreOfBlood;
	}

    /**
     * Getter theatreOfBloodHard
     * @return {ResultEntry}
     */
	public getTheatreOfBloodHard(): ResultEntry {
		return this.theatreOfBloodHard;
	}

    /**
     * Getter thermonuclearSmokeDevil
     * @return {ResultEntry}
     */
	public getThermonuclearSmokeDevil(): ResultEntry {
		return this.thermonuclearSmokeDevil;
	}

    /**
     * Getter tzkalZuk
     * @return {ResultEntry}
     */
	public getTzkalZuk(): ResultEntry {
		return this.tzkalZuk;
	}

    /**
     * Getter tztokJad
     * @return {ResultEntry}
     */
	public getTztokJad(): ResultEntry {
		return this.tztokJad;
	}

    /**
     * Getter venenatis
     * @return {ResultEntry}
     */
	public getVenenatis(): ResultEntry {
		return this.venenatis;
	}

    /**
     * Getter vetion
     * @return {ResultEntry}
     */
	public getVetion(): ResultEntry {
		return this.vetion;
	}

    /**
     * Getter vorkath
     * @return {ResultEntry}
     */
	public getVorkath(): ResultEntry {
		return this.vorkath;
	}

    /**
     * Getter wintertodt
     * @return {ResultEntry}
     */
	public getWintertodt(): ResultEntry {
		return this.wintertodt;
	}

    /**
     * Getter zalcano
     * @return {ResultEntry}
     */
	public getZalcano(): ResultEntry {
		return this.zalcano;
	}

    /**
     * Getter zulrah
     * @return {ResultEntry}
     */
	public getZulrah(): ResultEntry {
		return this.zulrah;
	}

    /**
     * Setter playerName
     * @param {string} value
     */
	public setPlayerName(value: string) {
		this.playerName = value;
	}

    /**
     * Setter overall
     * @param {ResultEntry} value
     */
	public setOverall(value: ResultEntry) {
		this.overall = value;
	}

    /**
     * Setter attack
     * @param {ResultEntry} value
     */
	public setAttack(value: ResultEntry) {
		this.attack = value;
	}

    /**
     * Setter defence
     * @param {ResultEntry} value
     */
	public setDefence(value: ResultEntry) {
		this.defence = value;
	}

    /**
     * Setter strength
     * @param {ResultEntry} value
     */
	public setStrength(value: ResultEntry) {
		this.strength = value;
	}

    /**
     * Setter hitpoints
     * @param {ResultEntry} value
     */
	public setHitpoints(value: ResultEntry) {
		this.hitpoints = value;
	}

    /**
     * Setter ranged
     * @param {ResultEntry} value
     */
	public setRanged(value: ResultEntry) {
		this.ranged = value;
	}

    /**
     * Setter prayer
     * @param {ResultEntry} value
     */
	public setPrayer(value: ResultEntry) {
		this.prayer = value;
	}

    /**
     * Setter magic
     * @param {ResultEntry} value
     */
	public setMagic(value: ResultEntry) {
		this.magic = value;
	}

    /**
     * Setter cooking
     * @param {ResultEntry} value
     */
	public setCooking(value: ResultEntry) {
		this.cooking = value;
	}

    /**
     * Setter woodcutting
     * @param {ResultEntry} value
     */
	public setWoodcutting(value: ResultEntry) {
		this.woodcutting = value;
	}

    /**
     * Setter fletching
     * @param {ResultEntry} value
     */
	public setFletching(value: ResultEntry) {
		this.fletching = value;
	}

    /**
     * Setter fishing
     * @param {ResultEntry} value
     */
	public setFishing(value: ResultEntry) {
		this.fishing = value;
	}

    /**
     * Setter firemaking
     * @param {ResultEntry} value
     */
	public setFiremaking(value: ResultEntry) {
		this.firemaking = value;
	}

    /**
     * Setter crafting
     * @param {ResultEntry} value
     */
	public setCrafting(value: ResultEntry) {
		this.crafting = value;
	}

    /**
     * Setter smithing
     * @param {ResultEntry} value
     */
	public setSmithing(value: ResultEntry) {
		this.smithing = value;
	}

    /**
     * Setter mining
     * @param {ResultEntry} value
     */
	public setMining(value: ResultEntry) {
		this.mining = value;
	}

    /**
     * Setter herblore
     * @param {ResultEntry} value
     */
	public setHerblore(value: ResultEntry) {
		this.herblore = value;
	}

    /**
     * Setter agility
     * @param {ResultEntry} value
     */
	public setAgility(value: ResultEntry) {
		this.agility = value;
	}

    /**
     * Setter thieving
     * @param {ResultEntry} value
     */
	public setThieving(value: ResultEntry) {
		this.thieving = value;
	}

    /**
     * Setter slayer
     * @param {ResultEntry} value
     */
	public setSlayer(value: ResultEntry) {
		this.slayer = value;
	}

    /**
     * Setter farming
     * @param {ResultEntry} value
     */
	public setFarming(value: ResultEntry) {
		this.farming = value;
	}

    /**
     * Setter runecraft
     * @param {ResultEntry} value
     */
	public setRunecraft(value: ResultEntry) {
		this.runecraft = value;
	}

    /**
     * Setter hunter
     * @param {ResultEntry} value
     */
	public setHunter(value: ResultEntry) {
		this.hunter = value;
	}

    /**
     * Setter construction
     * @param {ResultEntry} value
     */
	public setConstruction(value: ResultEntry) {
		this.construction = value;
	}

    /**
     * Setter leaguePoints
     * @param {ResultEntry} value
     */
	public setLeaguePoints(value: ResultEntry) {
		this.leaguePoints = value;
	}

    /**
     * Setter bountyHunterHunter
     * @param {ResultEntry} value
     */
	public setBountyHunterHunter(value: ResultEntry) {
		this.bountyHunterHunter = value;
	}

    /**
     * Setter bountyHunterRogue
     * @param {ResultEntry} value
     */
	public setBountyHunterRogue(value: ResultEntry) {
		this.bountyHunterRogue = value;
	}

    /**
     * Setter clueScrollAll
     * @param {ResultEntry} value
     */
	public setClueScrollAll(value: ResultEntry) {
		this.clueScrollAll = value;
	}

    /**
     * Setter clueScrollBeginner
     * @param {ResultEntry} value
     */
	public setClueScrollBeginner(value: ResultEntry) {
		this.clueScrollBeginner = value;
	}

    /**
     * Setter clueScrollEasy
     * @param {ResultEntry} value
     */
	public setClueScrollEasy(value: ResultEntry) {
		this.clueScrollEasy = value;
	}

    /**
     * Setter clueScrollMedium
     * @param {ResultEntry} value
     */
	public setClueScrollMedium(value: ResultEntry) {
		this.clueScrollMedium = value;
	}

    /**
     * Setter clueScrollHard
     * @param {ResultEntry} value
     */
	public setClueScrollHard(value: ResultEntry) {
		this.clueScrollHard = value;
	}

    /**
     * Setter clueScrollElite
     * @param {ResultEntry} value
     */
	public setClueScrollElite(value: ResultEntry) {
		this.clueScrollElite = value;
	}

    /**
     * Setter clueScrollMaster
     * @param {ResultEntry} value
     */
	public setClueScrollMaster(value: ResultEntry) {
		this.clueScrollMaster = value;
	}

    /**
     * Setter lastManStanding
     * @param {ResultEntry} value
     */
	public setLastManStanding(value: ResultEntry) {
		this.lastManStanding = value;
	}

    /**
     * Setter soulWarsZeal
     * @param {ResultEntry} value
     */
	public setSoulWarsZeal(value: ResultEntry) {
		this.soulWarsZeal = value;
	}

        /**
     * Setter guardiansOfTheRift
     * @param {ResultEntry} value
     */
	public setGuardiansOfTheRift(value: ResultEntry) {
		this.guardiansOfTheRift = value;
	}

    /**
     * Setter abyssalSire
     * @param {ResultEntry} value
     */
	public setAbyssalSire(value: ResultEntry) {
		this.abyssalSire = value;
	}

    /**
     * Setter alchemicalHydra
     * @param {ResultEntry} value
     */
	public setAlchemicalHydra(value: ResultEntry) {
		this.alchemicalHydra = value;
	}

    /**
     * Setter barrowsBrothers
     * @param {ResultEntry} value
     */
	public setBarrowsBrothers(value: ResultEntry) {
		this.barrowsBrothers = value;
	}

    /**
     * Setter bryophyta
     * @param {ResultEntry} value
     */
	public setBryophyta(value: ResultEntry) {
		this.bryophyta = value;
	}

    /**
     * Setter callisto
     * @param {ResultEntry} value
     */
	public setCallisto(value: ResultEntry) {
		this.callisto = value;
	}

    /**
     * Setter cerberus
     * @param {ResultEntry} value
     */
	public setCerberus(value: ResultEntry) {
		this.cerberus = value;
	}

    /**
     * Setter chambersOfXeric
     * @param {ResultEntry} value
     */
	public setChambersOfXeric(value: ResultEntry) {
		this.chambersOfXeric = value;
	}

    /**
     * Setter chambersOfXericChallengeMode
     * @param {ResultEntry} value
     */
	public setChambersOfXericChallengeMode(value: ResultEntry) {
		this.chambersOfXericChallengeMode = value;
	}

    /**
     * Setter chaosElemental
     * @param {ResultEntry} value
     */
	public setChaosElemental(value: ResultEntry) {
		this.chaosElemental = value;
	}

    /**
     * Setter chaosFanatic
     * @param {ResultEntry} value
     */
	public setChaosFanatic(value: ResultEntry) {
		this.chaosFanatic = value;
	}

    /**
     * Setter commanderZilyana
     * @param {ResultEntry} value
     */
	public setCommanderZilyana(value: ResultEntry) {
		this.commanderZilyana = value;
	}

    /**
     * Setter corporealBeast
     * @param {ResultEntry} value
     */
	public setCorporealBeast(value: ResultEntry) {
		this.corporealBeast = value;
	}

    /**
     * Setter crazyArchaeologist
     * @param {ResultEntry} value
     */
	public setCrazyArchaeologist(value: ResultEntry) {
		this.crazyArchaeologist = value;
	}

    /**
     * Setter dagannothPrime
     * @param {ResultEntry} value
     */
	public setDagannothPrime(value: ResultEntry) {
		this.dagannothPrime = value;
	}

    /**
     * Setter dagannothRex
     * @param {ResultEntry} value
     */
	public setDagannothRex(value: ResultEntry) {
		this.dagannothRex = value;
	}

    /**
     * Setter dagannothSupreme
     * @param {ResultEntry} value
     */
	public setDagannothSupreme(value: ResultEntry) {
		this.dagannothSupreme = value;
	}

    /**
     * Setter derangedArchaeologist
     * @param {ResultEntry} value
     */
	public setDerangedArchaeologist(value: ResultEntry) {
		this.derangedArchaeologist = value;
	}

    /**
     * Setter generalGraardor
     * @param {ResultEntry} value
     */
	public setGeneralGraardor(value: ResultEntry) {
		this.generalGraardor = value;
	}

    /**
     * Setter giantMole
     * @param {ResultEntry} value
     */
	public setGiantMole(value: ResultEntry) {
		this.giantMole = value;
	}

    /**
     * Setter grotesqueGuardians
     * @param {ResultEntry} value
     */
	public setGrotesqueGuardians(value: ResultEntry) {
		this.grotesqueGuardians = value;
	}

    /**
     * Setter hespori
     * @param {ResultEntry} value
     */
	public setHespori(value: ResultEntry) {
		this.hespori = value;
	}

    /**
     * Setter kalphiteQueen
     * @param {ResultEntry} value
     */
	public setKalphiteQueen(value: ResultEntry) {
		this.kalphiteQueen = value;
	}

    /**
     * Setter kingBlackDragon
     * @param {ResultEntry} value
     */
	public setKingBlackDragon(value: ResultEntry) {
		this.kingBlackDragon = value;
	}

    /**
     * Setter kraken
     * @param {ResultEntry} value
     */
	public setKraken(value: ResultEntry) {
		this.kraken = value;
	}

    /**
     * Setter kreeArra
     * @param {ResultEntry} value
     */
	public setKreeArra(value: ResultEntry) {
		this.kreeArra = value;
	}

    /**
     * Setter krilTsutsaroth
     * @param {ResultEntry} value
     */
	public setKrilTsutsaroth(value: ResultEntry) {
		this.krilTsutsaroth = value;
	}

    /**
     * Setter mimic
     * @param {ResultEntry} value
     */
	public setMimic(value: ResultEntry) {
		this.mimic = value;
	}

    /**
     * Setter nex
     * @param {ResultEntry} value
     */
	public setNex(value: ResultEntry) {
		this.nex = value;
	}

    /**
     * Setter nightmare
     * @param {ResultEntry} value
     */
	public setNightmare(value: ResultEntry) {
		this.nightmare = value;
	}

    /**
     * Setter phosanisNightmare
     * @param {ResultEntry} value
     */
	public setPhosanisNightmare(value: ResultEntry) {
		this.phosanisNightmare = value;
	}

    /**
     * Setter obor
     * @param {ResultEntry} value
     */
	public setObor(value: ResultEntry) {
		this.obor = value;
	}

    /**
     * Setter sarachnis
     * @param {ResultEntry} value
     */
	public setSarachnis(value: ResultEntry) {
		this.sarachnis = value;
	}

    /**
     * Setter scorpia
     * @param {ResultEntry} value
     */
	public setScorpia(value: ResultEntry) {
		this.scorpia = value;
	}

    /**
     * Setter skotizo
     * @param {ResultEntry} value
     */
	public setSkotizo(value: ResultEntry) {
		this.skotizo = value;
	}

    /**
     * Setter tempoross
     * @param {ResultEntry} value
     */
	public setTempoross(value: ResultEntry) {
		this.tempoross = value;
	}

    /**
     * Setter theGauntlet
     * @param {ResultEntry} value
     */
	public setTheGauntlet(value: ResultEntry) {
		this.theGauntlet = value;
	}

    /**
     * Setter theCorruptedGauntlet
     * @param {ResultEntry} value
     */
	public setTheCorruptedGauntlet(value: ResultEntry) {
		this.theCorruptedGauntlet = value;
	}

    /**
     * Setter theatreOfBlood
     * @param {ResultEntry} value
     */
	public setTheatreOfBlood(value: ResultEntry) {
		this.theatreOfBlood = value;
	}

    /**
     * Setter theatreOfBloodHard
     * @param {ResultEntry} value
     */
	public setTheatreOfBloodHard(value: ResultEntry) {
		this.theatreOfBloodHard = value;
	}

    /**
     * Setter thermonuclearSmokeDevil
     * @param {ResultEntry} value
     */
	public setThermonuclearSmokeDevil(value: ResultEntry) {
		this.thermonuclearSmokeDevil = value;
	}

    /**
     * Setter tzkalZuk
     * @param {ResultEntry} value
     */
	public setTzkalZuk(value: ResultEntry) {
		this.tzkalZuk = value;
	}

    /**
     * Setter tztokJad
     * @param {ResultEntry} value
     */
	public setTztokJad(value: ResultEntry) {
		this.tztokJad = value;
	}

    /**
     * Setter venenatis
     * @param {ResultEntry} value
     */
	public setVenenatis(value: ResultEntry) {
		this.venenatis = value;
	}

    /**
     * Setter vetion
     * @param {ResultEntry} value
     */
	public setVetion(value: ResultEntry) {
		this.vetion = value;
	}

    /**
     * Setter vorkath
     * @param {ResultEntry} value
     */
	public setVorkath(value: ResultEntry) {
		this.vorkath = value;
	}

    /**
     * Setter wintertodt
     * @param {ResultEntry} value
     */
	public setWintertodt(value: ResultEntry) {
		this.wintertodt = value;
	}

    /**
     * Setter zalcano
     * @param {ResultEntry} value
     */
	public setZalcano(value: ResultEntry) {
		this.zalcano = value;
	}

    /**
     * Setter zulrah
     * @param {ResultEntry} value
     */
	public setZulrah(value: ResultEntry) {
		this.zulrah = value;
	}
    
}