// type hiscore result
// string player name
// list of ResultEntry
// function addEntry ResultEntry
// function getEntry given index returns ResultEntry
// function build builds HiscoreResult

import { HiscoreResult } from "./hiscore-result";
import { ResultEntry } from "./result-entry";

export class HiscoreResultBuilder {
    private _entries: ResultEntry[] = [];
    private _playerName: string;

    constructor(playerName: string) {
        this._playerName = playerName;
    }

    public addEntry(entry: ResultEntry): void {
        this._entries.push(entry);
    }

    public getEntry(index: number): ResultEntry {
        return this._entries[index];
    }

    // build returns HiscoreResult
    // create new HiscoreResult
    // Iterates over entires and sets HiscoreResult properties using variable count
    // HiscoreResult.setPlayerName(this._playerName)
    // HiscoreResult.setOverall(this._entries[count++])
    // HiscoreResult.setAttack(this._entries[count++])
    // ...
    // HiscoreResult.setLeaguePoints(this._entries[count++])
    // ...
    // HiscoreResult.setBountyHunterHunter(this._entries[count++])
    // ...
    // HiscoreResult.setClueScrollAll(this._entries[count++])
    // ...
    // HiscoreResult.setLastManStanding(this._entries[count++])
    // HiscoreResult.setSoulWarsZeal(this._entries[count++])
    // ...
    // HiscoreResult.setAbyssalSire(this._entries[count++])
    // HiscoreResult.setAlchemicalHydra(this._entries[count++])
    // HiscoreResult.setBarrowsBrothers(this._entries[count++])
    // HiscoreResult.setBryophyta(this._entries[count++])
    // HiscoreResult.setCallisto(this._entries[count++])
    // HiscoreResult.setCerberus(this._entries[count++])
    // HiscoreResult.setChambersOfXeric(this._entries[count++])
    // HiscoreResult.setChambersOfXericChallengeMode(this._entries[count++])
    // HiscoreResult.setChaosElemental(this._entries[count++])
    // ...
    // HiscoreResult.setPhosanisNightmare(this._entries[count++])
    // return result
    public build(): HiscoreResult {
        const result = new HiscoreResult();
        result.setPlayerName(this._playerName);
        let count = 0;
        result.setOverall(this._entries[count++]);
        result.setAttack(this._entries[count++]);
        result.setDefence(this._entries[count++]);
        result.setStrength(this._entries[count++]);
        result.setHitpoints(this._entries[count++]);
        result.setRanged(this._entries[count++]);
        result.setPrayer(this._entries[count++]);
        result.setMagic(this._entries[count++]);
        result.setCooking(this._entries[count++]);
        result.setWoodcutting(this._entries[count++]);
        result.setFletching(this._entries[count++]);
        result.setFishing(this._entries[count++]);
        result.setFiremaking(this._entries[count++]);
        result.setCrafting(this._entries[count++]);
        result.setSmithing(this._entries[count++]);
        result.setMining(this._entries[count++]);
        result.setHerblore(this._entries[count++]);
        result.setAgility(this._entries[count++]);
        result.setThieving(this._entries[count++]);
        result.setSlayer(this._entries[count++]);
        result.setFarming(this._entries[count++]);
        result.setRunecraft(this._entries[count++]);
        result.setHunter(this._entries[count++]);
        result.setConstruction(this._entries[count++]);

        result.setLeaguePoints(this._entries[count++]);
        result.setBountyHunterHunter(this._entries[count++]);
        result.setBountyHunterRogue(this._entries[count++]);
        result.setClueScrollAll(this._entries[count++]);
        result.setClueScrollBeginner(this._entries[count++]);
        result.setClueScrollEasy(this._entries[count++]);
        result.setClueScrollMedium(this._entries[count++]);
        result.setClueScrollHard(this._entries[count++]);
        result.setClueScrollElite(this._entries[count++]);
        result.setClueScrollMaster(this._entries[count++]);
        result.setLastManStanding(this._entries[count++]);
        result.setPvpArena(this._entries[count++]);
        result.setSoulWarsZeal(this._entries[count++]);
        result.setGuardiansOfTheRift(this._entries[count++]);

        result.setAbyssalSire(this._entries[count++]);
        result.setAlchemicalHydra(this._entries[count++]);
        result.setBarrowsBrothers(this._entries[count++]);
        result.setBryophyta(this._entries[count++]);
        result.setCallisto(this._entries[count++]);
        result.setCerberus(this._entries[count++]);
        result.setChambersOfXeric(this._entries[count++]);
        result.setChambersOfXericChallengeMode(this._entries[count++]);
        result.setChaosElemental(this._entries[count++]);
        result.setChaosFanatic(this._entries[count++]);
        result.setCommanderZilyana(this._entries[count++]);
        result.setCorporealBeast(this._entries[count++]);
        result.setCrazyArchaeologist(this._entries[count++]);
        result.setDagannothPrime(this._entries[count++]);
        result.setDagannothRex(this._entries[count++]);
        result.setDagannothSupreme(this._entries[count++]);
        result.setDerangedArchaeologist(this._entries[count++]);
        result.setGeneralGraardor(this._entries[count++]);
        result.setGiantMole(this._entries[count++]);
        result.setGrotesqueGuardians(this._entries[count++]);
        result.setHespori(this._entries[count++]);
        result.setKalphiteQueen(this._entries[count++]);
        result.setKingBlackDragon(this._entries[count++]);
        result.setKraken(this._entries[count++]);
        result.setKreeArra(this._entries[count++]);
        result.setKrilTsutsaroth(this._entries[count++]);
        result.setMimic(this._entries[count++]);
        result.setNex(this._entries[count++]);
        result.setNightmare(this._entries[count++]);
        result.setPhosanisNightmare(this._entries[count++]);
        result.setObor(this._entries[count++]);
        result.setSarachnis(this._entries[count++]);
        result.setScorpia(this._entries[count++]);
        result.setSkotizo(this._entries[count++]);
        result.setTempoross(this._entries[count++]);
        result.setTheGauntlet(this._entries[count++]);
        result.setTheCorruptedGauntlet(this._entries[count++]);
        result.setTheatreOfBlood(this._entries[count++]);
        result.setTheatreOfBloodHard(this._entries[count++]);
        result.setThermonuclearSmokeDevil(this._entries[count++]);
        result.setTombsOfAmascut(this._entries[count++]);
        result.setTombsOfAmascutExpert(this._entries[count++]);
        result.setTzkalZuk(this._entries[count++]);
        result.setTztokJad(this._entries[count++]);
        result.setVenenatis(this._entries[count++]);
        result.setVetion(this._entries[count++]);
        result.setVorkath(this._entries[count++]);
        result.setWintertodt(this._entries[count++]);
        result.setZalcano(this._entries[count++]);
        result.setZulrah(this._entries[count++]);

        return result;
    }
}