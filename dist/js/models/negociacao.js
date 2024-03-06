export class Negociacao {
    constructor(data, quantidade, valor) {
        this.__data = data;
        this.__quantidade = quantidade;
        this.__valor = valor;
    }
    get data() {
        return this.__data;
    }
    get quantidade() {
        return this.__quantidade;
    }
    get valor() {
        return this.__valor;
    }
    get volume() {
        return this.__quantidade * this.valor;
    }
}
