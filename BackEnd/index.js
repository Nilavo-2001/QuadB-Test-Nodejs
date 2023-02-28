import express from 'express';
import './config/mongoose.js'
import router from './routes/index.js';
import cors from 'cors';
const app = express();
const port = 8000;
app.use(cors());
app.use("/", router);


app.listen(port, async (err) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log("server running on port ", port);
    }
})