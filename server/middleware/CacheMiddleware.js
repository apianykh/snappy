const mcache = require('memory-cache');

module.exports = (duration_min) => {
  return (req, res, next) => {
    let key = 'cache-' + req.originalUrl || req.url;
    let cachedBody = mcache.get(key);
    if (cachedBody) {
      res.send(cachedBody);
      return;
    } else {
      res.sendResponse = res.send;
      res.send = (body) => {
        mcache.put(key, body, duration_min * 60 * 1000);
        res.sendResponse(body);
      };
      next();
    }
  };
};