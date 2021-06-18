import Knex  from "knex";

/*const dotenv = require ('dotenv');
dotenv.config();
*/
export class KnexDB{
  db!: Knex;
  initialize!: boolean;
  knexConfig: Knex.Config;
 
  constructor(){
    this.knexConfig={};
  }
  init():Promise<boolean>{
    return new Promise(async(resolve,reject)=>{
      if(this.initialize== true)
      resolve(true);

        this.knexConfig={
          client:"pg",
          connection:process.env.POSTGRES_URL||'postgres://postgres:password@localhost:5432/deneme',
          pool:{
            min:1,
            max:3
          },
        };
        this.db = Knex(this.knexConfig);
        const result=this.db.raw("select 1=1");
        this.initialize=true;
        resolve(true);
    });

  }

}
const knexDB = new KnexDB();
export default knexDB;

