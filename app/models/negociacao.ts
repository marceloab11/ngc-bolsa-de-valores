export class Negociacao {

    constructor(public readonly data:Date, public readonly quantidade:number, public readonly valor:number) {
        
    }

    get volume():number {
        return this.quantidade * this.valor
    }

    public static criaNegociacao(dataString:string, quantidadeString:string, valorString:string) {
        const exp = /-/g;
        const date = new Date(dataString.replace(exp, ','));
        const quantidade = parseInt(quantidadeString);
        const valor = parseInt(valorString);
        return new Negociacao(date, quantidade, valor)
    }
}