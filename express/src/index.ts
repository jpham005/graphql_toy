import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = 3000;

const mongo = new MongoClient('mongodb://jaham:0214@db/testdb');

app.get('/', async (req, res) => {
  mongo.db().dropCollection('user');
  mongo.db().dropCollection('users');

  res.send('hi');
});

app.listen(port, () => {
  console.log('server start listening');
});
