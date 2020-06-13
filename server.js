const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

// require the htmlRoutes and apiRoutes
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// middleware that is needed to use POST data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});

