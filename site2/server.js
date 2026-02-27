const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname));

const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
