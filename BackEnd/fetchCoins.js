import fetch from "node-fetch";
async function getCoins() {
    try {
        var response = await fetch(`https://api.wazirx.com/api/v2/tickers`);
    }
    catch (err) {
        console.log(err);
    }
    const data = await response.json();
    let ans = [];
    let count = 0;
    for (const key in data) {
        ans.push(data[`${key}`]);
        if (++count == 10) {
            break;
        }
    }
    return ans;
}

export default getCoins;
