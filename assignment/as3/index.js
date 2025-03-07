import express from "express";
import mongoose from "mongoose";
import karaoke from "./routes/karaokeRoute.js";

const app = express();
const port = 3000;

app.use(express.json());
app.set("view engine", "ejs");
app.use("/room", karaoke);

mongoose.connect("mongodb://127.0.0.1:27017/as3").then(() => {
    console.log("connected to database");
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
});
