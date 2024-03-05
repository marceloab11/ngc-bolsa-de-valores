"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const negociacao_js_1 = require("./models/negociacao.js");
const negociacao = new negociacao_js_1.Negociacao(new Date(), 10, 100);
console.log(negociacao.valor);
console.log(negociacao.volume);
console.log('aaaaaaaaaaaaaaa');
