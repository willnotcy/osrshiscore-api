// function  Lookup player name and url returns HiscoreResult
// function  processResponse player name and response returns HiscoreResult
// function  parseResponse player name and response returns HiscoreResult

import { Response } from "node-fetch";
import { HiscoreEndpointType, HiscoreEndpointUrlMap } from "./hiscore-endpoint";
import { HiscoreEntryTypeMap } from "./hiscore-entry";
import { HiscoreResult } from "./hiscore-result";
import { HiscoreResultBuilder } from "./hiscore-result-builder";
import { ResultEntry } from "./result-entry";
const fetch = require("node-fetch");

export class HiscoreClient {
    // Lookup  playerName, endpointType) : HiscoreResult
    // get endpoint url from endpointType + ?player=playerName
    // fetch endpoint url
    // process response
    public static async Lookup(playerName: string, endpointType: HiscoreEndpointType): Promise<HiscoreResult> {
        const endpointUrl = HiscoreClient.GetEndpointUrl(endpointType);
        const url = endpointUrl + "?player=" + playerName;
        const response = fetch(url).then((res: Response) => res);
        return await HiscoreClient.ProcessResponse(playerName, response);
    }

    // processResponse(playerName, response) : HiscoreResult
    // if not response.ok
    // throw error with response.statusText
    // return parse response
    public static async ProcessResponse(playerName: string, response: Response): Promise<HiscoreResult> {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        const responseText = await response.text();
        return HiscoreClient.ParseResponse(playerName, responseText);
    }
       
    // ParseResponse(playerName, response) : HiscoreResult:
    // Create new HiscoreResultBuilder with playerName
    // create int count
    // use csv to parse response
    // check if count is larger than Object.keys(HighscoreEntryTypeMap).length then throw error
    // int rank, level from csv-parser [rank, level]
    // if entry length is 3 then xp from csv-parser [, , xp]
    // create new HiscoreEntry with rank, level, xp
    // add HiscoreEntry to HiscoreResultBuilder
    // return HiscoreResultBuilder.Build()
    public static ParseResponse(playerName: string, response: string): HiscoreResult {
        const builder = new HiscoreResultBuilder(playerName);
        let count = 0;
        response
            .split("\n")
            .map(line => line.split(","))
            .map(line => {
                if (count > Object.keys(HiscoreEntryTypeMap).length) {
                    throw new Error("Too many entries");
                }
                const rank = parseInt(line[0]);
                const level = parseInt(line[1]);
                let xp = 0;
                if (line.length === 3) {
                    xp = parseInt(line[2]);
                }
                const entry = new ResultEntry(rank, level, xp);
                builder.addEntry(entry);
                count++;
            });
        return builder.build();
    }

    public static GetEndpointUrl(endpointType: HiscoreEndpointType): string {
        return HiscoreEndpointUrlMap[endpointType];
    }
}