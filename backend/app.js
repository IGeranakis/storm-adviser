// app.js

const express = require('express');
const cors = require('cors');
const TextsRoute = require('./routes/texts');

const app = express();

// Middleware
app.use('/texts', cors())
app.use('/texts', TextsRoute);

//Start server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));