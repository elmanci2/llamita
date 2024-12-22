import { Router } from "express";
import controllers from "../controllers/controllers";

const  routes =  Router()
routes.get("/" , (req , res) => {
    res.send("hello world")
} )

routes.post("/question" , async (req , res) => {
    try {
        const response = await controllers.question(req , res)
        res.send({
            response,
            state: 200
        })
    } catch (error: any) {
        res.send({
            response: error.message,
            state: 500
        })
    }
})

routes.post("/embed" , async (req , res) => {
    try {
        const response = await controllers.embed(req , res)
        res.send({
            response,
            state: 200
        })
    } catch (error: any) {
        res.send({
            response: error.message,
            state: 500
        })
    }
})

routes.post("/embeddings" , async (req , res) => {
    try {
        const response = await controllers.embeddings(req , res)
        res.send({
            response,
            state: 200
        })
    } catch (error: any) {
        res.send({
            response: error.message,
            state: 500
        })
    }
})



export default routes