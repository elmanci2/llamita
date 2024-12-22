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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = __importDefault(require("../controllers/controllers"));
const routes = (0, express_1.Router)();
routes.get("/", (req, res) => {
    res.send("hello world");
});
routes.post("/question", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield controllers_1.default.question(req, res);
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
}));
routes.post("/embed", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield controllers_1.default.embed(req, res);
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
}));
routes.post("/embeddings", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield controllers_1.default.embeddings(req, res);
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
}));
exports.default = routes;
