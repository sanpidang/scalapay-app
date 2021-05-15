const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const { Sequelize, Model, DataTypes } = require('sequelize')
const finale = require('finale-rest')

let app = express()
app.use(cors())
app.use(bodyParser.json())

// let database = new Sequelize({
//   dialect: 'sqlite',
//   storage: './test.sqlite'
// })

const sequelize = new Sequelize('sqlite::memory:');

class Config extends Model {}
Config.init({
  type: Sequelize.STRING,
  decription: Sequelize.STRING,
  minimumAmount: DataTypes.STRING
}, { sequelize, modelName: 'Configurations' });

// Define our Post model
// id, createdAt, and updatedAt are added by sequelize automatically
let Post = sequelize.define('posts', {
  title: Sequelize.STRING,
  body: Sequelize.TEXT
})

(async () => {
  await sequelize.sync();
  const jane = await Config.create({
    type: "PAY_BY_INSTALLMENT",
    decription: "Pay over time",
    minimumAmount: "5.00"
  });
  console.log(jane.toJSON());
})();
// Initialize finale
finale.initialize({
  app: app,
  sequelize: sequelize
})

// Create the dynamic REST resource for our Post model
let userResource = finale.resource({
  model: Post,
  endpoints: ['/posts', '/posts/:id']
})

// Resets the database and launches the express app on :8081
database
  .sync({ force: true })
  .then(() => {
    app.listen(8081, () => {
      console.log('listening to port localhost:8081')
    })
  })
