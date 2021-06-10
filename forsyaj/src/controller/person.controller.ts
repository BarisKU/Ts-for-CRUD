
//const PeersonServicee = require('../service/person')
import express, {Request, Response} from 'express';
import PersonService from '../service/app.service'
export default class PersonController{
    createPerson(req:Request,res:Response){
            try{
                const id =  PersonService.createPerson(req.body);
                res.status(201).json(id);
            }catch(err){
                console.error(err);
            }
    }   

}
module.exports= new PersonController();