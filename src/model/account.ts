import { Debit } from "./debit";
import { Extraction } from "./extraction";
import { Move } from "./move";

export class Account{
    balance:number;
    owner:string;
    moves: Move[];

    constructor(startBalance:number, owner:string){
        this.balance = startBalance;
        this.owner = owner;
    }

    extract(value:number){
        if(this.balance - value >=0){
            this.balance = this.balance - value;
            this.moves.push(new Extraction(value));
        }
    }

    debit(value:number){
        if(value > 0){
            this.moves.push(new Debit(value))
            this.balance += value;
        }
    }


}