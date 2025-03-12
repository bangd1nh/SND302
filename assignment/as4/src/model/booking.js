import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema({
    customerName: String,
    roomNumber: Number,
    startTime: Date,
    endTime: Date,
    totalAmount: Number,
});

const Book = mongoose.model("Book", bookingSchema);

export default Book;
