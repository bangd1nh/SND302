import express from "express";
import question from "./routes/question.js";
import quizz from "./routes/quiz.js";
const app = express();

const port = 8080;

app.use(express.json());
app.set("view engine", "ejs");
app.use("/question", question);
app.use("/quizz", quizz);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
