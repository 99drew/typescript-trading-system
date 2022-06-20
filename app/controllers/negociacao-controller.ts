import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/negocioacoes.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { MensagemView } from "../views/mensagem-view.js";
import { View } from "../views/view.js";


export class negociacaoController {

    private inputData: HTMLInputElement;
    private inputQtd: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociaoesView = new NegociacoesView('#negociacoesView');
    private mensagemView =  new MensagemView('#mensagemView');


    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQtd =  document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
       
        this.negociaoesView.update(this.negociacoes);
    }

    adiciona(): void {
        const negociacao = this.criaNegociacao();
        this.negociacoes.adiciona(negociacao);
        this.negociaoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!')
        this.limpaForm();
    }

    criaNegociacao(): Negociacao {
        const exp = /-/g;
        const data = new Date(this.inputData.value.replace(exp, ','));
        const qtd = parseInt(this.inputQtd.value);
        const valor = parseFloat(this.inputValor.value);

        return new Negociacao(data, qtd, valor);
    }

    limpaForm(): void {
        this.inputData.value = '';
        this.inputQtd.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
}