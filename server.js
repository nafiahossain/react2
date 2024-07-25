const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const { Pool } = require('pg');
const jwt = require('jsonwebtoken');

const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 5173;
const jwtSecret = 'your_jwt_secret'

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'hotel_db',
    password: 'p@stgress',
    port: 5433,
});





app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
