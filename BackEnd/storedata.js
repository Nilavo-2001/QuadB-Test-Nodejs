import coindb from "./models/coins.js";
import getCoins from "./fetchCoins.js";
export default async function storeData() {
    let coins = await getCoins();
    await coindb.deleteMany();
    await coindb.insertMany(coins);
    console.log("data stored sucessfully");
}