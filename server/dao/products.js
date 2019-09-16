const DB = require('../services/db');

exports.get = async ({name = null, vendor = null}) => {
  const client = await DB();
  const db = client.db(process.env.DB_NAME);
  try {
    let query = {};
    if(name) query.name = {'$regex': name, $options: 'i'};
    if(vendor) query.vendor = vendor;
    return await db.collection('products').find(query).toArray();
  }
  catch(err) {
    return Promise.reject(err);
  }
  finally {
    client.close();
  }
};