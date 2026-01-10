import { WebSocket } from "ws"
import { OutgoingMessages } from "./types";


let ID = 1;

interface User {
    id:number,
    ws:WebSocket,
    name:string
}

export class UserManager {
    private _users: User[]

    constructor(){

    }

    addUser({ws,name}:User){
        let id = ID
        this._users.push({
            name,
            ws,
            id
        })
        ws.on("close",() => this.removeUser(id))
        ID++
    }

    removeUser(id:number){
        this._users.filter(x => x.id !== id)
    }

    broadcast(msg:OutgoingMessages ,userId?:number){

        this._users.forEach(({id,ws}) => {
            if(userId !== id){
                ws.send(JSON.stringify(msg))
            }
        })
    }
}