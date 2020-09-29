import { Move } from "./move";

class Extraction implements Move{
    value:number;
    descrription:string;

    constructor(value:number){
        this.value = value;
        this.descrription = "Extraccion de "+ this.value;
    }
}
export {Extraction}