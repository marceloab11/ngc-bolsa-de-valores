export class Negociacao {
    private __data:Date;
    private __quantidade:number;
    private __valor:number;

    constructor(data:Date, quantidade:number, valor:number) {
        this.__data = data;
        this.__quantidade = quantidade;
        this.__valor = valor;
    }

    get data():Date {
        return this.__data
    }

    get quantidade():number {
        return this.__quantidade
    }

    get valor():number {
        return this.__valor
    }

    get volume():number {
        return this.__quantidade * this.valor
    }
}