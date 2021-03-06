require("dotenv").config();
const knex=require('knex');
const app =require('./app');
const { PORT, DATABASE_URL } = require('./config');
const pg = require('pg');


pg.defaults.ssl = process.env.NODE_ENV ==="production"?
{rejectUnauthorized:false}:false
const db = knex({
  client:"pg",
  connection:DATABASE_URL,
  ssl: true,
    extra: {
      ssl: {
        rejectUnauthorized: false
      },
    },
});




app.set("db", db);

app.listen(PORT,() =>{
  console.log(`server listening at http://localhost:${PORT}`);
})



// var client = new pg.Client({
//   user: "emrwbvujwlxffo",
//   password: "4b9b0a57f6fc57f846c77db82847b0310e354c98c4ca4bac57664c3ebf40d976",
//   database: "d9ulrv9qnqc0hm",
//   port: 5432,
//   host: "18.212.112.148",
//   ssl: true
// }); 
// client.connect();
// const db = knex({
//   pg  = require('pg'),
// config = require('./db-config'),
//     dbOption    = {
//       host    : "54.87.225.174",
//       port    :5432 ,
//       user    :emrwbvujwlxffo ,
//       password  : "4b9b0a57f6fc57f846c77db82847b0310e354c98c4ca4bac57664c3ebf40d976",
//       database  :"d9ulrv9qnqc0hm" 
//     },
//   })
//   pool          = new pg.Pool(dbOption)
//   pg.defaults.ssl = true;


// const db = knex({
//      client: 'pg',
//      connection: DATABASE_URL,
     
    
//     })
//     app.set('db', db)


// app.listen(PORT, () => {
//   console.log(`Server listening at http://localhost:${PORT}`)
// })
