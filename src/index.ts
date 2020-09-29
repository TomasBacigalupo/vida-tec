import express, { response } from "express";
import bodyParser from "body-parser";
import {Transaction} from "./model/transaction";
import {Debit} from "./model/debit";
import { Move } from "./model/move";

const server = express();
server.use(bodyParser.json());

const port = 8080; // default port to listen

let balance = 4000
const moves: Move[] = [];


// define a route handler for the default home page
server.get( "/", ( req, res ) => {
    const tran = new Transaction("tomas","martin", 1234)
    res.send( "Hello world!" + tran );
} );

server.get("/balance",(req, res) =>{
    res.send("Balance " + balance)
})

server.post("/debit",(req, res) =>{
    if(req.body.value <= 0 ){
        const statusBad= {
            error: true,
            code: 503,
            message: "ingresar monto mayor a cero"
        }
        res.send(statusBad);

    }else{

        const debit = new Debit(req.body.value);
        moves.push(debit);

        balance += req.body.value;

        const statusOK= {
        error: false,
        code: 200,
        message: "ingreso dinero en su cuenta"
        }
        res.send(statusOK);
    }

})

server.get("/moves", (req, res)=>{
    res.send(moves)
})


// start the Express server
server.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );