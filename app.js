const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user-route');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    const currentTime = new Date().toISOString();
    console.log(`[${currentTime}] ${req.method} ${req.url}`);
    next();
});

app.get('/', (req, res) => {
    res.send('Welcome to the User Profile API!');
});


app.use('/api/users', userRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
