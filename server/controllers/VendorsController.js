const vendors = require('../dao/vendors');

exports.list = async (req, res) => 
{
  try {
    let data = await vendors.get();
    res.send(data);
  }
  catch(err) {
    console.log('err: ', err);
    res.status(500).send('Server error');
  }
};