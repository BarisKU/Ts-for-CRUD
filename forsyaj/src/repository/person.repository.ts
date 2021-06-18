//const dab = require('..src/db/db')
//import db from '../db/db'
import knexDB from '../db/knex';
import { person } from '../interface/Persontype';

export default class PersonRepository{
   async addPerson(person:person){
    const[id]= await knexDB.db('person').insert({
        email:person.email,
        firstName:person.firstName,
        lastName:person.lastName,
    }).returning('person.id');
        
    return(person.id);
    }

}
//export default PersonRepository;
