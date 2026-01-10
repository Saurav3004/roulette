import { WebSocket } from "ws"
import { COINS } from "./types";

export class User {
    name:string;
    ws:WebSocket;
    id:number;
    locked:number;
    balance:number;

    constructor(id:number,name:string,ws:WebSocket){
        this.id = id;
        this.balance = 2500;
        this.name = name;
        this.ws = ws;
    }

    bet(amount:COINS){
        this.balance -= amount
        this.locked += amount
        this.ws.send(JSON.stringify({
            type:"bet",
            amount:amount,
            locked:this.locked,
            balance:this.balance
        })) 
    }
}