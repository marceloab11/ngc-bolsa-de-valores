export abstract class View<T> {

    protected elemento:any
    private escapar:boolean = false

    constructor(seletor:string, escapar?:boolean) {
        if(escapar) {
            this.escapar = escapar;
        }
        this.elemento = document.querySelector(seletor)
    }

    public update(model: T):void {
        let template = this.template(model)
        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "")
        }
        this.elemento.innerHTML = template

    }

    abstract template(model: T): string;
}