import coindb from "./models/coins.js";
import getCoins from "./fetchCoins.js";
export default async function storeData() {
    let coins = await getCoins();
    coins = coins.map((coin) => {
        return {
            last: coin[`last`],
            name: coin[`name`],
            buy: coin[`buy`],
            sell: coin[`sell`],
            volume: coin[`volume`],
            base_unit: coin[`base_unit`]
        };
    })

    await coindb.deleteMany();
    await coindb.insertMany(coins);


    console.log("data stored sucessfully");
}