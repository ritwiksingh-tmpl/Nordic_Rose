//prequisites
require("dotenv").config();
const uuid = require("uuid")
const express = require('express');
const db = require('./database/models');
const config = require("./database/config/routes")
const app = express();

app.use(express.json())
config(app)

PORT = process.env.PORT || 8000

app.listen(PORT, async () => {
    try {
        await db.sequelize.authenticate();
        await db.sequelize.sync()
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }   
    console.log(`Server is running on http://localhost:${PORT}`);
}
)