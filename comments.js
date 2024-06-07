// Create web server
// Create a new comment
router.post('/', async (req, res) => {
    // Validate the data before creating a new comment
    const { error } = commentValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    // Create a new comment
    const comment = new Comment({
        comment: req.body.comment,
        user: req.body.user,
        post: req.body.post
    });

    try {
        const savedComment = await comment.save();
        res.send(savedComment);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Path: comment.js
// Get all comments
router.get('/', async (req, res) => {
    try {
        const comments = await Comment.find();
        res.send(comments);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Path: comment.js
// Get a specific comment
router.get('/:commentId', async (req, res) => {
    try {
        const comment = await Comment.findById(req.params.commentId);
        res.send(comment);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Path: comment.js
// Delete a specific comment
router.delete('/:commentId', async (req, res) => {
    try {
        const removedComment = await Comment.remove({ _id: req.params.commentId });
        res.send(removedComment);
    } catch (err) {
        res.status(400).send(err);
    }
});

// Path: comment.js
// Update a specific comment
router.patch('/:commentId', async (req, res) => {
    try {
        const updatedComment = await Comment.updateOne(
            { _id: req.params.commentId },
            { $set: { comment: req.body.comment } }
        );
        res.send(updatedComment);
    } catch (err) {
        res.status(400).send(err);
    }
});

module.exports = router;