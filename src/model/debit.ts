class Debit{
    value:number;
    constructor(value:number){
        this.value = value;
    }

    toString(){
        return "Deposito de " + this.value;
    }
}
export {Debit};