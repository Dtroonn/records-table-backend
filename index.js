const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5555;

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/records', require('./routes/records'));

app.listen(PORT, () => console.log(`Server started on port ${PORT} ...`));
