import { Move } from "./move";

class Transaction implements Move{

    from:string;
    to:string;
    value:number;
    descrription:string;

    constructor(origen:string, destino:string, monto:number){
        this.from = origen;
        this.to = destino;
        this.value = monto;
        this.descrription = "Transaction from " + this.from + " to " + this.to + " of "+ this.value;
    }

    toString(){
        return "Transaction from " + this.from + " to " + this.to + " of "+ this.value;
    }
}
export {Transaction};