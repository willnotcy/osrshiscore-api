import { HiscoreClient } from "./hiscore-client";
import { HiscoreEndpointType } from "./hiscore-endpoint";

// function test call HiscoreClient.Lookup("lake", HiscoreEndpointType.Ironman)
async function test() {
        const result = await HiscoreClient.Lookup("Lake", HiscoreEndpointType.Normal);
        console.log(result);
}

test()