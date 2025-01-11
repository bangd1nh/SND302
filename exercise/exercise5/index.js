import express from "express";

const app = express();

app.get("/Hello", (req, res) => {
    res.send("hello world");
});

app.listen(8080, () => {
    console.log("sever is running on port 8080");
});
