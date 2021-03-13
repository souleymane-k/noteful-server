require('dotenv').config()

module.exports = {
    PORT: process.env.PORT || 8001,
    NODE_ENV: process.env.NODE_ENV || 'production',
    
    
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://emrwbvujwlxffo:4b9b0a57f6fc57f846c77db82847b0310e354c98c4ca4bac57664c3ebf40d976@ec2-54-211-77-238.compute-1.amazonaws.com:5432/d9ulrv9qnqc0hm',
  

  DATABASE_URL: process.env.DATABASE_URL || 'postgresql://dunder_mifflin:hello@localhost/noteful',
}

  //'postgres://emrwbvujwlxffo:4b9b0a57f6fc57f846c77db82847b0310e354c98c4ca4bac57664c3ebf40d976@ec2-54-211-77-238.compute-1.amazonaws.com:5432/d9ulrv9qnqc0hm',