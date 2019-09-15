const promotion = require('../dao/promotion');

exports.get = async (req, res) => 
{
  try {
    let data = await promotion.get();
    res.send(data);
  }
  catch(err) {
    console.log('err: ', err);
    res.status(500).send('Server error');
  }
};