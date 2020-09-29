class StatusOk implements Error{
    name:string;
    message:string;
    code = 200;

    constructor(message:string){
        this.message = message;
    }

}

export {StatusOk};