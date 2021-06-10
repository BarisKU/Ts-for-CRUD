//const dab = require('..src/db/db')
import db from '../db/db'
import { person } from '../interface/Persontype';

export default class PersonRepository{
   async createPerson(person:person){
    const[id]= await db('person').insert({
        email:person.email,
        firstName:person.firstName,
        lastName:person.lastName,
    }).returning('id');
        
    return('id');
    }

}
//export default PersonRepository;