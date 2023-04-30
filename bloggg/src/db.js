const MongoClient = require('mongodb').MongoClient;
async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb://localhost:27017/cap');
  const db = client.db('mydatabase');
  return db;
}
 