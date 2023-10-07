const express = require('express')
const defaultControllers = require('../controllers/defaultControllers')
const router = express.Router()



router.all('/*', (req, res, next) => {

    req.app.locals.layout = 'default';

    next();
})


// router.use('/', defaultControllers.index)

router.route('/').get(defaultControllers.index)

router.route('/login')
    .get(defaultControllers.loginRoute)


module.exports = router