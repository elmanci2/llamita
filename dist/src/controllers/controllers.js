"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const ollama_1 = require("ollama");
const llama = new ollama_1.Ollama();
const defaultModel = "llama3.2:latest";
class Controllers {
    constructor() {
        this.llama = llama;
    }
    question(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { question, model } = req.body;
            try {
                const response = yield this.llama.chat({
                    model: model || defaultModel,
                    messages: [{ role: "user", content: question }],
                });
                res.send({
                    response,
                    state: 200
                });
            }
            catch (error) {
                res.send({
                    response: error.message,
                    state: 500
                });
            }
        });
    }
    embed(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { question, model } = req.body;
            try {
                const response = yield this.llama.embed({
                    model: model || defaultModel,
                    input: question,
                });
                res.send({
                    response,
                    state: 200
                });
            }
            catch (error) {
                res.send({
                    response: error.message,
                    state: 500
                });
            }
        });
    }
    embeddings(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { question, model } = req.body;
            try {
                const response = yield this.llama.embeddings({
                    model: model || defaultModel,
                    prompt: question,
                });
                res.send({
                    response,
                    state: 200
                });
            }
            catch (error) {
                res.send({
                    response: error.message,
                    state: 500
                });
            }
        });
    }
}
exports.default = new Controllers();
