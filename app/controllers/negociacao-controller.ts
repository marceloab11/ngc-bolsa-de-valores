import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputData:HTMLInputElement;
    private inputQuantidade:HTMLInputElement;
    private inputValor:HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView')
    private mensagemView = new MensagemView('#mensagemView')

    constructor() {
        this.inputData = document.querySelector('#data') as HTMLInputElement;
        this.inputQuantidade = document.querySelector('#quantidade') as HTMLInputElement;
        this.inputValor = document.querySelector('#valor') as HTMLInputElement;
        this.negociacoesView.update(this.negociacoes);
        
    }

    adicionar(): void {
        const negociacao = this.criarNegociacao();
        if(negociacao.data.getDay() > 0 && negociacao.data.getDay() < 6) {
            this.negociacoes.adicionar(negociacao)
            this.negociacoesView.update(this.negociacoes)
            this.mensagemView.update("Negociação adicionada com sucesso")
            this.limparFormulario();
        } else {
            this.mensagemView.update('Somente trasanções em dias úteis')
        }
        
    }

    criarNegociacao(): Negociacao {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseInt(this.inputValor.value);
        return new Negociacao(date, quantidade, valor)
        
    }

    limparFormulario():void {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = ';'
        this.inputData.focus();
    }
}