import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    roomNumber: String,
    capacity: Number,
    status: String,
    priceHour: Number,
    feature: [String],
});

const Book = mongoose.model("Booking", bookSchema);

export default Book;
