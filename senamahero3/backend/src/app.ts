import express, { Application } from "express";
import http from 'http';
import { Server } from "socket.io";

class App {
    private app: Application;
    private http: http.Server;
    private io: Server;

    constructor(){
        this.app = express();
        this.http = http.createServer(this.app);
        this.io = new Server(this.http);
    }

    public listen(){
        this.app.listen(3333, () => {
            console.log("Serve")
        })
    }
}

export { App };