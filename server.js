const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

const publicDir = path.join(__dirname, 'public');
const distDir = path.join(__dirname, 'dist');

app.use(morgan('dev'));
app.use(express.static(publicDir));
app.use(express.static(distDir));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server running at http://localhost:${PORT}`));
