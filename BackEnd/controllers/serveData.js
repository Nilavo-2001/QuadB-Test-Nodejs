import storeData from "../storedata.js"
import coindb from "../models/coins.js"
const serveData = async function (req, res) {
    await storeData();
    const data = await coindb.find({});
    return res.status(200).json({ data });
}

export default serveData;