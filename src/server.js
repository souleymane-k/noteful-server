const knex = require('knex')
const app = require('./app')
const { PORT, DATABASE_URL } = require('./config')


var client = new pg.Client({
  user: "emrwbvujwlxffo",
  password: "4b9b0a57f6fc57f846c77db82847b0310e354c98c4ca4bac57664c3ebf40d976",
  database: "d9ulrv9qnqc0hm",
  port: 5432,
  host: "ec2-54-211-77-238.compute-1.amazonaws.com",
  ssl: true
}); 
client.connect();


// const db = knex({
//      client: 'pg',
//      connection: DATABASE_URL,
//     })
//     app.set('db', db)


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})
