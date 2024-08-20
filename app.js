//Task 1: Get the book list available in the shop
// Endpoint: GET /books
const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/books', async (req, res) => {
    try {
        const response = await axios.get(' http://localhost:3000/books');
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Task 2: Get the books based on ISBN
// Endpoint: GET /books/:isbn

app.get('/books/:isbn', async (req, res) => {
    const { isbn } = req.params;
    try {
        const response = await axios.get(`http://localhost:3000/books/978-3-16-148410-0/${isbn}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

// Task 3: Get all books by Author
// Endpoint: GET /books/author/:authorName

app.get('/books/author/:authorName', async (req, res) => {
    const { authorName } = req.params;
    try {
        const response = await axios.get(`http://localhost:3000/books/author/John%20Doe/${authorName}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});


// Task 4: Get all books based on Title
// Endpoint: GET /books/title/:title

app.get('/books/title/:title', async (req, res) => {
    const { title } = req.params;
    try {
        const response = await axios.get(`http://localhost:3000/books/title/Some%20Book%20Title/${title}`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});


// Task 5: Get book Review
// Endpoint: GET /books/:isbn/reviews

app.get('/books/:isbn/reviews', async (req, res) => {
    const { isbn } = req.params;
    try {
        const response = await axios.get(`http://localhost:3000/books/978-3-16-148410-0/reviews`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

// Task 6: Register New user
// Endpoint: POST /users/register

app.use(express.json());

app.post('/users/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const response = await axios.post('http://localhost:3000/users/register', { username, password });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});


// Task 7: Login as a Registered user
// Endpoint: POST /users/login

app.post('/users/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const response = await axios.post('http://localhost:3000/users/login', { username, password });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});

// Task 8: Add/Modify a book review
// Endpoint: POST /books/:isbn/reviews

app.post('/books/:isbn/reviews', async (req, res) => {
    const { isbn } = req.params;
    const { review } = req.body;
    try {
        const response = await axios.post(`http://localhost:3000/books/978-3-16-148410-0/reviews`, { review });
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});


// Task 9: Delete book review added by that particular user
// Endpoint: DELETE /books/:isbn/reviews/:reviewId

app.delete('/books/:isbn/reviews/:reviewId', async (req, res) => {
    const { isbn, reviewId } = req.params;
    try {
        const response = await axios.delete(`http://localhost:3000/books/978-3-16-148410-0/reviews/12345`);
        res.json(response.data);
    } catch (error) {
        res.status(500).send(error.toString());
    }
});


// Node.js Methods with Async/Await and Promises
// Task 10: Get all books – Using async callback function

function getAllBooks(callback) {
    axios.get('http://localhost:3000/books/async-callback')
        .then(response => callback(null, response.data))
        .catch(error => callback(error, null));
}

getAllBooks((error, data) => {
    if (error) {
        console.error('Error fetching books:', error);
    } else {
        console.log('Books:', data);
    }
});

//Task 11: Search by ISBN – Using Promises
function getBookByISBN(isbn) {
    return axios.get(`http://localhost:3000/books/isbn-promise/:isbn`)
        .then(response => response.data)
        .catch(error => { throw error; });
}

getBookByISBN('1234567890')
    .then(book => console.log('Book:', book))
    .catch(error => console.error('Error:', error));

// Task 12: Search by Author
async function getBooksByAuthor(author) {
    try {
        const response = await axios.get(`GET http://localhost:3000/books/author/:authorName`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
getBooksByAuthor('J.K. Rowling')
    .then(books => console.log('Books by author:', books))
    .catch(error => console.error('Error:', error));

// Task 13: Search by Title
async function getBooksByTitle(title) {
    try {
        const response = await axios.get(`http://localhost:3000/books/title/:title`);
        return response.data;
    } catch (error) {
        throw error;
    }
}
getBooksByTitle('Harry Potter')
    .then(books => console.log('Books with title:', books))
    .catch(error => console.error('Error:', error));



