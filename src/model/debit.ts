import { Move } from "./move";

class Debit implements Move{
    value:number;
    descrription:string
    constructor(value:number){
        this.value = value;
        this.descrription = "Deposito de " + this.value;
    }

    toString(){
        return "Deposito de " + this.value;
    }
}
export {Debit};