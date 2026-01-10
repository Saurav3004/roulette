import { GameState } from "./types";
import { UserManager } from "./UserManager";

export class GameManager {
    state: GameState = "people-can-bet"
    public static _instance: GameManager
    private constructor(){}

    public static getInstance(){
        if(!this._instance){
            this._instance = new GameManager()
        }
        return this._instance
    }

    public bet(amount:number,id:number){
        if(this.state === "people-can-bet"){
            this.state = "people-cant-bet"
            UserManager.getInstance().broadcast({
                type:"bet",
                amount,
                id
            })
        }
    }
}