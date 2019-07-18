const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

const publicDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(express.static(publicDir));
app.use(express.static(distDir));


app.listen(PORT, () => console.log(`the server running at http://localhost:${PORT}`));
