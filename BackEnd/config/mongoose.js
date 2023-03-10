// config for mongoose
import mongoose from "mongoose";
mongoose.set("strictQuery", false);
async function main() {
    await mongoose.connect(`mongodb://localhost/coinsAPI`);
    console.log("Connected to Database :: MongoDB");
}
main().catch((err) => {
    console.log("failed to connect ", err);
});

export default mongoose;
