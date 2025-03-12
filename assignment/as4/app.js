import express, { json } from "express";
import mongoose from "mongoose";
import booking from "./src/controller/booking.js";
const port = 3000;

const app = express();

app.use(json());

app.use("/bookings", booking);

mongoose.connect("mongodb://127.0.0.1:27017/as4").then(() => {
    console.log("connected to database");
    app.listen(port, () => {
        console.log(`Example app listening on port ${port}`);
    });
});
