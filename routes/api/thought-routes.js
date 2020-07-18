// dependencies
const router = require('express').Router();

const {
    addThought,
    getAllThoughts,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controllers');

// userId and thoughtId
router
    .route('/:userId/thoughts/:thoughtId')
    .delete(removeThought)



// by userId
router
    .route('/:userId')
    .put(addThought)

// get all
router
    .route('/')
    .get(getAllThoughts);


router
    .route('/u/:thoughtId')
    .get(getThoughtById)
    .put(updateThought)

router 
    .route('/r/:thoughtId')
    .put(addReaction)

router
    .route('/r/:thoughtId/reactions/:reactionId')
    .delete(removeReaction)

    

module.exports = router;