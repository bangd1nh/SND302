import express from "express";
import Karaoke from "../model/karaoke.js";
import Book from "../model/booking.js";

const karaoke = express.Router();

karaoke.get("/", async (req, res) => {
    try {
        const result = await Karaoke.find({});
        // console.log(result);
        res.render("rooms", { payload: result });
        // res.send(result);
    } catch (error) {
        console.error("Error fetching rooms:", error);
        res.status(500).send("Server error");
    }
});

karaoke.delete("/delete/:bookId", async (req, res) => {
    const result = await Karaoke.findByIdAndDelete(req.params.bookId);
    if (!result) {
        res.status(404).send("not found");
    }
    res.status(200).send("delete success");
});

karaoke.get("/book", async (req, res) => {
    const result = await Book.find();
    res.render("bookRoom", { payload: result });
});

karaoke.post("/book", async (req, res) => {
    const { customerName, roomNumber, startTime, endTime } = req.body;
    console.log(req.body);
    const result = await Karaoke.create({
        customerName: customerName,
        roomNumber: roomNumber,
        startTime: startTime,
        endTime: endTime,
    });
    if (result) {
        res.status(200).send("success");
    }
});

karaoke.get("/edit/:bookId", async (req, res) => {
    const result = await Karaoke.findById(req.params.bookId);
    console.log(result);
    res.render("editRoom", { payload: result });
});

karaoke.put("/book/:bookId", async (req, res) => {
    const result = await Karaoke.findByIdAndUpdate(req.params.bookId, {
        customerName: req.body.customerName,
        roomNumber: req.body.roomNumber,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
    });
    console.log(req.body);
    if (result) res.status(200).end();
    res.status(404).end();
});

export default karaoke;
