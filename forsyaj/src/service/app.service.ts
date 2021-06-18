import PersonRepository from '../repository/person.repository'
import express from "express";
import {person} from '../interface/Persontype.js'
import PersonController from '../controller/person.controller'
import { ResponsePerson } from '../interface/responsePerson';
/*
let m : PersonRepository = new PersonService();
let r = m.createPerson<{ name: string }>({}, "", "","");;
r.name
*/
export default class PersonService  {
                personRepository:PersonRepository;
                 constructor (){
                this.personRepository = new PersonRepository;
                 }
               async addPerson(persondto:person):Promise<ResponsePerson>{
                        return new Promise((resolve,reject)=>{
                                this.personRepository.addPerson(persondto).then((res)=>{
                                        resolve({id:2});
                                })
                                .catch((err)=>{
                                        reject(err);
                                });
                        });
               }/*
               async deletePerson(persondto:person):Promise<ResponsePerson>{
                return new Promise((resolve,reject)=>{
                        this.personRepository.deletePerson(persondto).then((res)=>{
                                resolve({id:2});
                        })
                        .catch((err)=>{
                                reject(err);
                        });
                });
       }
       */
}
