import PersonRepository from '../repository/person.repository'
import express from "express";
import {person} from '../interface/Persontype.js'
import PersonController from '../controller/person.controller'
/*
let m : PersonRepository = new PersonService();
let r = m.createPerson<{ name: string }>({}, "", "","");;
r.name
*/
export class PersonService  {
                personRepository:PersonRepository;
                 constructor (){
                this.personRepository = new PersonRepository;
                 }
                async addPerson(persondto:person):Promise<any>{
                        return new Promise((resolve,reject)=>{
                                this.addPerson.add(persondto).then((res)=>{
                                        resolve(this.response.Succes(undefined,res));
                                })
                                .catch((err)=>{
                                        reject(err);
                                });
                        });
               }
}

export default new PersonService();



/*
this.addPerson(person){
                const {firstName,lastName,email}=personDto;
                PersonRepository.addPerson(firstName,lastName,email);
                */
