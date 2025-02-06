import express from "express";
import { articles } from "./articles.js";

const app = express();

app.use(express.json());

app.get("/api/articles", (req, res) => {
    res.json(articles);
});

app.get("/api/articles/:id", (req, res) => {
    const {
        params: { id },
    } = req;
    const parsedID = parseInt(id);
    if (!parsedID) return res.status(400).send("id must be a number");
    else {
        const findArticle = articles.find((art) => art.id === parsedID);
        if (!findArticle) {
            return res.status(404).send("can not find article");
        } else {
            return res.send(findArticle);
        }
    }
});

app.put("/api/articles/:id", (req, res) => {
    const {
        params: { id },
    } = req;
    const parsedID = parseInt(id);
    if (!parsedID) return res.status(400).send("id must be a number");
    else {
        const findArticle = articles.findIndex((art) => art.id === parsedID);
        if (findArticle === -1)
            return res.status(404).send("can not find article");
        articles[findArticle] = {
            ...articles[findArticle],
            ...req.body,
        };
        res.json(articles[findArticle]);
    }
});

app.post("/api/articles", (req, res) => {
    const newArti = {
        id: articles.length + 1,
        date: req.body.date,
        text: req.body.text,
    };
    articles.push(newArti);
    res.status(201).json(newArti);
});

app.delete("/api/articles/:id", (req, res) => {
    const {
        params: { id },
    } = req;
    const parsedID = parseInt(id);
    if (!parsedID) return res.status(400).send("id must be a number");
    else {
        const findIndex = articles.findIndex((art) => art.id === parsedID);
        const deleteArt = articles.splice(findIndex, 1);
        res.json(deleteArt);
    }
});

app.listen(8000, () => console.log("server is running on port 8000"));
