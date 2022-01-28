const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db;

const MONGODB_URL = process.env.MONGODB_URL || "mongodb+srv://admin:rOEtZCt9TCcf1g1a@cluster0.dp8pa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const mongoConnect = callback => {
  MongoClient.connect(
    MONGODB_URL, options
  )
    .then(client => {
      console.log('Connected!');
      _db = client.db();
      callback();
    })
    .catch(err => {
      console.log(err);
      throw err;
    });
};

const getDb = () => {
  if (_db) {
    return _db;
  }
  throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
