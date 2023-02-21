import { MongoClient } from 'mongodb';

const uri = 'mongodb://jaham:0214@db:27017/testdb';

const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Establish and verify connection
    await client.db('testdb').command({ ping: 1 });
    console.error('Connected successfully to server');
  } catch (e) {
    console.error(e);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run();
