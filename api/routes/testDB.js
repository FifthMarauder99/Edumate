var express = require('express');
var router = express.Router();
const { Pool, Query } = require('pg');


router.get('/', async function(req, res, next) {
    try {
        const pool = new Pool({
            connectionString: "postgres://akeiblbxtugmjc:499dbdfb81e68eafb1996d0833e3127bd558b166ddb4e247104c8dc26701fdbd@ec2-3-217-251-77.compute-1.amazonaws.com:5432/dev7840n5hhvvt",
            ssl: { rejectUnauthorized: false },
        });
        const client = await pool.connect();
        const query = `INSERT INTO users (email, username, password, user_role, mobile) VALUES ('zhanso@iu.edu', 'zhanso', 'bubbles123', 'Student', '317-771-4418')`;
        const result = await client.query(query);
        const results = { 'results': (result) ? result.rows : null};
        res.send(`ayo this shit works ${results.rows}`);
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
    }
});

module.exports = router;