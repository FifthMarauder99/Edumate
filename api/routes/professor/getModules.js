var express = require('express');
var router = express.Router();
const { Pool, Query } = require('pg');

// retrieve modules for a specific course
router.post('/', async (req, res) => {
    try {
        console.log(process.env.REACT_APP_DATABASE_URL);
        const pool = new Pool({
            connectionString: process.env.REACT_APP_DATABASE_URL || "localhost",
            ssl: (process.env.REACT_APP_DATABASE_URL) ? {rejectUnauthorized : false} : true,
        });
        const client = await pool.connect();
        const query = `SELECT *
                    FROM modules WHERE course_id = '${req.body.course_id}'` ;
        const result = await client.query(query);
        const results = { 'results': (result) ? result.rows : null };
        console.log("result from query: " + JSON.stringify(results));
        const results_json_str = JSON.stringify(results);
        const results_json = JSON.parse(results_json_str);
        console.log(results_json.results[0]); //  JSON.parse(results_json) == {"results":[{"course_id":"xxxx","course_title":"asdfghjk"}]}
        res.send(results_json.results); 
        client.release();
    } catch (err) {
        console.error(err);
        res.send(404);
        client.release();
        // throw err;
    }
});


module.exports = router;