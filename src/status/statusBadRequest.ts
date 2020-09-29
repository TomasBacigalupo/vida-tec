import { Status } from "./status";

class StatusBadRequest implements Status{
    message:string;
    code:400

    constructor(message:string){
        this.message = message;
    }
}
export {StatusBadRequest};