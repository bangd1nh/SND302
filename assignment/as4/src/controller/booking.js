import express from "express";
import Book from "../model/booking.js";
import Room from "../model/room.js";
import { validateDate } from "../middleware/validate.js";

const booking = express.Router();

booking.get("/", async (req, res) => {
    const result = await Book.find();
    res.status(200).send(result);
});

booking.post("/", validateDate, async (req, res) => {
    const roomExist = await Room.findOne({
        roomNumber: req.body.roomNumber,
    });
    if (roomExist) {
        const total = paymentCalculator(
            req.body.startTime,
            req.body.endTime,
            roomExist.priceHour
        );

        const result = await Book.create({
            customerName: req.body.customerName,
            roomNumber: req.body.roomNumber,
            startTime: req.body.startTime,
            endTime: req.body.endTime,
            totalAmount: total,
        });

        return res.status(201).send(result);
    }
    res.status(404).send({ message: "room not found" });
});

booking.put("/:bookingId", validateDate, async (req, res) => {
    const { bookingId } = req.params;

    const roomExist = await Room.findOne({
        roomNumber: req.body.roomNumber,
    });

    if (roomExist) {
        const total = paymentCalculator(
            req.body.startTime,
            req.body.endTime,
            roomExist.priceHour
        );
        const book = await Book.findByIdAndUpdate(
            bookingId,
            {
                customerName: req.body.customerName,
                roomNumber: req.body.roomNumber,
                startTime: req.body.startTime,
                endTime: req.body.endTime,
                totalAmount: total,
            },
            { new: true }
        );
        if (book) {
            return res.status(200).send(book);
        } else {
            return res.status(404).send({ message: "roomId not found" });
        }
    }

    res.status(404).send({ message: "room not found" });
});

const paymentCalculator = (startTime, endTime, priceHour) => {
    const start = new Date(startTime);
    const end = new Date(endTime);
    const hours = Math.abs(start - end) / 36e5;

    return priceHour * hours;
};

booking.delete("/:bookingId", async (req, res) => {
    const { bookingId } = req.params;
    const result = await Book.findByIdAndDelete(bookingId);
    if (result) {
        return res.status(200).send(result);
    }
    res.status(404).send({ message: "roomId not found" });
});

export default booking;
