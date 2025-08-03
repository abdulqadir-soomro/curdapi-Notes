const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const noteroute=require("./routes/notesRoute")

const app = express();
dotenv.config();
connectDB();

app.use(express.json());

app.use('/',noteroute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
