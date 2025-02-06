import express from "express";
import { readFile, writeFile } from "fs/promises";

const app = express();

app.use(express.json());

app.post("/update", (req, res) => {
    writeFile("./data.json", JSON.stringify(req.body))
        .then(() => res.send({ message: "the data has been updated" }))
        .catch(() => res.send({ message: "something went wrong" }));
});

app.get("/data", (req, res) => {
    readFile("./data.json", { encoding: "utf-8" })
        .then((data) => res.json(JSON.parse(data)))
        .catch(() => res.send({ message: "can not read file" }));
});

app.listen(3000, () => console.log("sever is listen on port 3000"));
