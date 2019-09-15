const MongoClient = require('mongodb').MongoClient;

const DSN = process.env.DSN;

const options = {
  useNewUrlParser: true, 
  useUnifiedTopology: true
};

module.exports = () => new Promise((resolve, reject) => 
{
  MongoClient.connect(DSN, options, function (err, client) {
    if (err) reject(err);
    resolve(client);
  });
});