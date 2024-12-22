import { Router } from "express";
import controllers from "../controllers/controllers";

const routes = Router()
routes.get("/", (req, res) => {
    res.send("hello world")
})

routes.post("/question", controllers.question)

routes.post("/embed", controllers.embed)

routes.post("/embeddings", controllers.embeddings)



export default routes