const DB = require('../services/db');

exports.get = async () => {
  const client = await DB();
  const db = client.db(process.env.DB_NAME);
  try {
    return await db.collection('promotion').findOne();
  }
  catch(err) {
    return Promise.reject(err);
  }
  finally {
    client.close();
  }
};