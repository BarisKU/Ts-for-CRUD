import PersonRepository from '../repository/person.repository'
import {person} from '../interface/Persontype.js'
/*
let m : PersonRepository = new PersonService();
let r = m.createPerson<{ name: string }>({}, "", "","");;
r.name
*/
export class PersonService extends PersonRepository {
                createPerson(personDto:any){
                const {firstName,lastName,email}=personDto;
                PersonRepository.createPerson(firstName,lastName,email);
        }

}
export default new PersonService();