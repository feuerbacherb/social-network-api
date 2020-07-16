// dependencies
const router = require('express').Router();

const {
    addThought,
    removeThought
} = require('../../controllers/thought-controllers');

router
    .route(':userId')
    .post(addThought)


    

module.exports = router;