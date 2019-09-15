const express = require('express');
const router = express.Router({mergeParams: true});
const cache = require('./middleware/CacheMiddleware');
const ProductsController = require('./controllers/ProductsController');
const VendorsController = require('./controllers/VendorsController');
const PromotionController = require('./controllers/PromotionController');

router.get('/products', cache(5), ProductsController.list);
router.get('/vendors', VendorsController.list);
router.get('/promotion', PromotionController.get);

module.exports = router;