// Create web server


// Import the express module
const express = require('express');
const app = express();
const port = 3000;

// Import the comments module
const comments = require('./comments');

// Import the body-parser module
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// Create a route for getting all comments
app.get('/comments', (req, res) => {
    res.json(comments.getComments());
});

// Create a route for getting a single comment
app.get('/comments/:id', (req, res) => {
    res.json(comments.getComment(req.params.id));
});

// Create a route for creating a comment
app.post('/comments', (req, res) => {
    const { username, comment } = req.body;
    comments.addComment(username, comment);
    res.status(201).send('Comment added');
});

// Create a route for updating a comment
app.put('/comments/:id', (req, res) => {
    const { username, comment } = req.body;
    comments.updateComment(req.params.id, username, comment);
    res.status(200).send('Comment updated');
});

// Create a route for deleting a comment
app.delete('/comments/:id', (req, res) => {
    comments.deleteComment(req.params.id);
    res.status(204).send('Comment deleted');
});

// Start the server
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
