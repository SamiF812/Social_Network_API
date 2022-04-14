const router = require('express').Router();

const{
    getThought,
    getSingleThought,
    createThought,
    updateThought,
    deleteThought,
    addResponse,
    removeResponse,
} = require('../../controllers/thoughtController.js');

// api/thought
router.route('/').get(getThought).post(createThought);

// api/thought/:thoughtId
router
    .route('/:thoughtId')
    .get(getSingleThought)
    .put(updateThought)
    .delete(deleteThought);

// api/thought/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(addResponse)
    
// api/thought/:thoughtId/reactions/reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(removeResponse);

module.exports = router;