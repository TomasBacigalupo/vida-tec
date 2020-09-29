class Transaction{

    from:string;
    to:string;
    monto:number;

    constructor(origen:string, destino:string, monto:number){
        this.from = origen;
        this.to = destino;
        this.monto = monto;
    }

    toString(){
        return "Transaction from " + this.from + " to " + this.to + " of "+ this.monto;
    }
}
export {Transaction};