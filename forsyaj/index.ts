//const express = require('express');
import express from 'express';
import PersonController from './controller/person.controller'
import { KnexDB } from './db/knexfile';
import ApplicationError from './middleware/appErr'

class API{
    app:express.Application;
    appRouter:express.Router;
    constructor(){
        this.app=express();
        this.appRouter = express.Router();
        }

    init(){
        return new Promise((resolve)=>{
            try{
            KnexDB.init();
            this.appConfig();
            this.routerConfig();
            }catch(error){
                console.log(error);
            }finally{
                this.app.use(ApplicationError);
                resolve(true);
            }
         })
    }
    private appConfig(){
        this.app.listen(8000,() =>console.log('server port 8000'));
        this.app.use(express.json());
    }
    private routerConfig(){
        const apiPath="/api";
        this.app.use(apiPath,this.appRouter);
        this.appRouter.use("/person.controller",PersonController);

    }
}
const app = new API();
export default app;
