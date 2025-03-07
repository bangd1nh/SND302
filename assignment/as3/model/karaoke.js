import mongoose from "mongoose";

const karaokeSchema = new mongoose.Schema({
    customerName: String,
    roomNumber: Number,
    startTime: String,
    endTime: String,
    totalAmount: Number,
});

const Karaoke = mongoose.model("Karaoke", karaokeSchema);

export default Karaoke;
