import { Status } from "./status";

class StatusOk implements Status{
    name:string;
    message:string;
    code = 200;

    constructor(message:string){
        this.message = message;
    }

}

export {StatusOk};