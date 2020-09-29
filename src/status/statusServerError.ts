import { Status } from "./status";

export class StatusServerError implements Status{
    message:string;
    code:500

    constructor(message:string){
        this.message = message;
    }
}