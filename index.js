const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api', (req, res) => {
    res.status(200).json({api: 'hello from server!'});
})

app.listen(port, () => console.log(`server started on ${port}`));