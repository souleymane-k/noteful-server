const { expect } = require('chai')
const supertest = require('supertest')

global.expect = expect
global.supertest = supertest


// NODE_ENV=development
// PORT=8001
// DATABASE_URL="postgresql://dunder_mifflin:hello@localhost/noteful"