import express from 'express';
import { MongoClient } from 'mongodb';

const uri = 'mongodb://jaham:0214@db:27017/testdb';

const client = new MongoClient(uri);

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  await client.connect();

  const object = await client
    .db('testdb')
    .collection('test_coll')
    .find()
    .next();

  res.send(object);
});

app.listen(port, () => {
  console.log('server start listening');
});
