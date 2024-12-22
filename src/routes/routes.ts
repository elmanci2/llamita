import { Router } from "express";
import controllers from "../controllers/controllers";

const routes = Router()
routes.get("/", (req, res) => {
    res.send("hello world")
})

routes.post("/question", async (req, res) => await controllers.question(req, res))

routes.post("/embed", async (req, res) => await controllers.embed(req, res))

routes.post("/embeddings", async (req, res) => await controllers.embeddings(req, res))



export default routes