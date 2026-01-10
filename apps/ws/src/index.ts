import { WebSocketServer } from "ws";

const wss = new WebSocketServer({port:8080});

wss.on("connection",(ws) => {

    ws.on("error",(error) => console.log(error))
    ws.on("message",(msg:string) => {
        console.log(msg)
    })

    ws.send("something
        ")
})