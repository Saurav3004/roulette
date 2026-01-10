import { WebSocket } from "ws"

export class User {
    name:string;
    ws:WebSocket;
    id:number;
    balance:number;

    constructor(id:number,name:string,ws:WebSocket){
        this.id = id;
        this.balance = 2500;
        this.name = name;
        this.ws = ws;
    }
}