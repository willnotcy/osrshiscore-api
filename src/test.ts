import { HiscoreClient } from "./hiscore-client";
import { HiscoreEndpointType } from "./hiscore-endpoint";

// function test call HiscoreClient.Lookup("lake", HiscoreEndpointType.Ironman)
async function test() {
        const result = await HiscoreClient.Lookup("sqiit", HiscoreEndpointType.Ironman);
        console.log(result);
}

test()