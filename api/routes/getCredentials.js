var express = require('express');
var router = express.Router();
const { Pool, Query } = require('pg');

// creating a new account
router.post('/', async (req, res) => {
    try {
        // TODO: this cannot be hardcoded. --> change later
        console.log(process.env.REACT_APP_DATABASE_URL);
        const pool = new Pool({
            connectionString: process.env.REACT_APP_DATABASE_URL || "postgres://tdqufxivqluvdz:f938ed6d54f160dd301a83fa72fc54de1fc65a0459c4d02e0c19798e2263de34@ec2-52-200-5-135.compute-1.amazonaws.com:5432/dd728pf397dual",
            ssl: (process.env.REACT_APP_DATABASE_URL) ? {rejectUnauthorized : false} : true,
        });
        const client = await pool.connect();
        const query = `SELECT username, password FROM users WHERE username = '${req.body.username}'`;        const result = await client.query(query);
        const results = { 'results': (result) ? result.rows : null};
        console.log("result from query: " + JSON.stringify(results));
        const results_json_str = JSON.stringify(results);
        const results_json = JSON.parse(results_json_str);
        console.log(JSON.parse(results_json_str).results[0]); //  JSON.parse(results_json) == {"results":[{"username":"peppa","password":"asdfghjk"}]}
        res.send(results_json.results[0]); 
        // console.log(results.results[0].username);
        client.release();
    } catch (err) {
        console.error(err);
        throw err;
    }
});

module.exports = router;