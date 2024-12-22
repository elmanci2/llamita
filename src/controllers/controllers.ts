import { Ollama } from "ollama";
import { Request, Response } from "express";
const llama = new Ollama();
const defaultModel = "llama3.2:1b";
class Controllers {
    llama: Ollama;
    constructor() {
        this.llama = llama;
    }

    async question(req: Request, res: Response) {
        const { question, model } = req.body;
        try {
            const response = await this.llama.chat({
                model: model || defaultModel,
                messages: [{ role: "user", content: question }],
            });
            res.status(200).json({
                response,
                state: 200
            })
        } catch (error: any) {
            res.status(500).json({
                response: error.message,
                state: 500
            })
        }
    }

    async embed(req: Request, res: Response) {
        const { question, model } = req.body;
        try {
            const response = await this.llama.embed({
                model: model || defaultModel,
                input: question,
            });
            res.status(200).json({
                response,
                state: 200
            })
        } catch (error: any) {
            res.status(500).json({
                response: error.message,
                state: 500
            })
        }
    }

    async embeddings(req: Request, res: Response) {
        const { question, model } = req.body;
        try {
            const response = await this.llama.embeddings({
                model: model || defaultModel,
                prompt: question,
            });
            res.status(200).json({
                response,
                state: 200
            })
        } catch (error: any) {
            res.status(500).json({
                response: error.message,
                state: 500
            })
        }
    }


}

export default new Controllers();