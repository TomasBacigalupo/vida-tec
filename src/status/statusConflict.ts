import { Status } from "./status";

export class StatusConflict implements Status{
    message:string;
    code:409

    constructor(message:string){
        this.message = message;
    }
}