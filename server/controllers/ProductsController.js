const products = require('../dao/products');

exports.list = async (req, res) => 
{
  try {
    let name = req.query.name || null;
    let vendor = req.query.vendor || null;
    let data = await products.get({ name, vendor });
    res.send(data);
  }
  catch(err) {
    console.log('err: ', err);
    res.status(500).send('Server error');
  }
};