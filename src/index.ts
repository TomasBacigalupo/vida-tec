import express, { response } from "express";
import bodyParser from "body-parser";
import {Transaction} from "./model/transaction";
import {Debit} from "./model/debit";
import { Move } from "./model/move";
import { StatusBadRequest} from "./status/statusBadRequest";
import {StatusOk} from "./status/statusOk";
import { Extraction } from "./model/extraction";
import { Account } from "./model/account";
import { StatusCreated } from "./status/statusCreated";
import { StatusConflict } from "./status/statusConflict";

const server = express();
server.use(bodyParser.json());

const port = 8080; // default port to listen

let balance = 4000
const moves: Move[] = [];
let account: Account = null;


// define a route handler for the default home page
server.get( "/", ( req, res ) => {
    res.send( "Hello world!");
} );

server.post("/account", (req, res)=>{
    account = new Account(req.body.startBalance, req.body.owner);
    res.type('json').status(201).json(account);
});

server.get("/account/owner", (req, res)=>{
    if(account === null){
        res.type('json').status(409).json(new StatusConflict("no hay cuenta creada"));
    }else{
        res.type('json').status(200).json(account);
    }

});


server.get("/account/owner/balance",(req, res) =>{
    if(account === null){
        res.type('json').status(409).json(new StatusConflict("no hay cuenta creada"));
    }else{
        res.type('json').status(200).json(account.balance);
    }
});

server.put("account/owner/debit",(req, res) =>{
    if(req.body.value <= 0 ){
        res.send(new StatusBadRequest("monto mayor a 0"));

    }else{
        account.debit(req.body.value);
        res.send(new StatusOk("dinero depositado"));
    }

})

server.get("account/owner/moves", (req, res)=>{
    res.send(account.moves);
});

server.put("account/owner/extract", (req, res)=>{
    const value = req.body.value;
    if(value <= 0){
        res.send(new StatusBadRequest("la extraccion debe ser mayor a 0"));
    }else if(balance < value){
        res.send(new StatusOk("no hay suficiente dinero"));
    }else{
        balance  = balance- value;
        moves.push(new Extraction(value));
        res.send(new StatusOk("dinero extraido"))
    }
})


// start the Express server
server.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );