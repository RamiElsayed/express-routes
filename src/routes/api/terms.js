const {Router} = require('express');


const { getTerms, getTermsByCategory } = require('../../controllers/api/terms');

const router = Router();

router.get('/category', getTermsByCategory);
router.get('/', getTerms);

module.exports = router;