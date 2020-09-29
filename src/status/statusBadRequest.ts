class StatusBadRequest implements Error{
    name:string;
    message:string;
    code:400

    constructor(message:string){
        this.message = message;
    }
}
export {StatusBadRequest};