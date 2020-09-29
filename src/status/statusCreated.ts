import { Status } from "./status";

export class StatusCreated implements Status{
    code=201;
    message:string;

    constructor(message:string){
        this.message = message
    }

}