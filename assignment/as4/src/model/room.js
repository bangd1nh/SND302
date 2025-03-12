import mongoose from "mongoose";

const roomSchema = new mongoose.Schema({
    roomNumber: String,
    capacity: Number,
    status: String,
    priceHour: Number,
    feature: [String],
});

const Room = mongoose.model("Room", roomSchema);

export default Room;
