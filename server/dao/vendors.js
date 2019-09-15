const DB = require('../services/db');

exports.get = async () => {
  const client = await DB();
  const db = client.db(process.env.DB_NAME);
  try {
    let data = await db.collection('products').find().map(doc => doc.vendor).toArray();

    return [...new Set(data)];
  }
  catch(err) {
    return Promise.reject(err);
  }
  finally {
    client.close();
  }
};