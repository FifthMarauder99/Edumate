var express = require('express');
var router = express.Router();
const { Pool, Query } = require('pg');

// creating a new account
router.post('/', async (req, res) => {
    try {
        // TODO: this cannot be hardcoded. --> change later
        const pool = new Pool({
            connectionString: process.env.REACT_APP_DATABASE_URL || "localhost",
            ssl: (process.env.REACT_APP_DATABASE_URL) ? {rejectUnauthorized : false} : true,
        });
        const client = await pool.connect();
        const query = `INSERT INTO users (email, username, password, user_role, mobile) VALUES ('${req.body.email}', '${req.body.username}', '${req.body.password}', '${req.body.role}', '${req.body.mobile}')`;
        const result = await client.query(query);
        const results = { 'results': (result) ? result.rows : null};
        res.send(`ayo this shit works ${results.rows}`);
        console.log("should've worked o3o");
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});


module.exports = router;