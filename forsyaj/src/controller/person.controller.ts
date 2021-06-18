//const PeersonServicee = require('../service/person')
import express, {NextFunction, Request, Response} from 'express';
//import * as express from "express";
import PersonService from '../service/app.service'
import schemas from '../validation/app validation'
export default class PersonController{
      personService : PersonService;
      router: express.Router;
        constructor(){
        this.router = express.Router();
        this.personService = new PersonService();
        this.initializeRoutes();
        }

    addPerson(req:Request,res:Response){
        const{body}=req;
        schemas.add.validateAsync(body).then(()=>{
            this.personService.addPerson(body).then((result=>{
                return res.status(201).send(result);
            })) 
        })
    }
    /*
    createPerson(req:Request,res:Response){
            try{
                const id =  PersonService.createPerson(req.body);
                res.status(201).json(id);
            }catch(err){
                console.error(err);
            }
    } 
    */
     /*
    getPersonList(req:Request, res:Response,next:NextFunction){
        const params = req.query;
        schemas.list.validateAsync(params)
        .then(async()=>{
        let  filters : 

        })

    }
    */
   /*
    deletePerson(req:Request,res:Response){
        try{
            this.personService.deletePerson(schemas.list.id).then(result)=>{
                return res.status(200).send(result);
            }
        }catch(error){
            console.log(error);
        };
    }
    */
    initializeRoutes(){
    this.router.post("/",this.addPerson.bind(this));

    }




}
module.exports= new PersonController();
