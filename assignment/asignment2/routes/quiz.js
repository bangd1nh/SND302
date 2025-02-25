import axios from "axios";
import express from "express";

const Router = express.Router();
const BASE_URL = "http://localhost:3000/api/";

Router.get("/quizzes", async (req, res) => {
    const response = await axios.get(BASE_URL + "quizzes");
    const quizzes = response.data;
    res.render("quiz/allQuizzes", {
        quizzes: quizzes,
    });
});

Router.get("/display", async (req, res) => {
    const { id } = req.query;
    const response = await axios.get(BASE_URL + "quizzes/" + id);
    const quizz = response.data;

    res.render("quiz/quizz", {
        quizz: quizz,
    });
});

Router.get("/edit", async (req, res) => {
    const { id } = req.query;
    const response = await axios.get(BASE_URL + "quizzes/" + id);
    const quizz = response.data;
    const allquest = await axios.get(BASE_URL + "question");
    const allq = allquest.data;
    console.log(quizz.questions);
    console.log(allq);
    res.render("quiz/editQuizz", { quizz: quizz, questions: allq });
});

Router.get("/new", (req, res) => {
    res.render("quiz/newQuizzes");
});

export default Router;
