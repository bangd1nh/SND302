import axios from "axios";
import express from "express";

const Router = express.Router();
const BASE_URL = "http://localhost:3000/api/";

Router.get("/questions", async (req, res) => {
    const response = await axios.get(BASE_URL + "question");
    const questions = response.data;
    res.render("questions/allQuestions", {
        questions: questions,
    });
});

Router.get("/display", async (req, res) => {
    const { id } = req.query;
    const response = await axios.get(BASE_URL + "question/" + id);
    const question = response.data;
    res.render("questions/question", {
        question: question,
    });
});

Router.get("/edit", async (req, res) => {
    const { id } = req.query;
    const response = await axios.get(BASE_URL + "question/" + id);
    const question = response.data;
    res.render("questions/editQuestion", { question: question });
});

Router.get("/new", (req, res) => {
    res.render("questions/newQuestion");
});

export default Router;
