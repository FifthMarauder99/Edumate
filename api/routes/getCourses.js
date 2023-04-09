var express = require('express');
var router = express.Router();
const { Pool, Query } = require('pg');

//retrieve courses
router.post('/', async (req, res) => {
    try {
        console.log(process.env.REACT_APP_DATABASE_URL);
        const pool = new Pool({
            connectionString: process.env.REACT_APP_DATABASE_URL || "localhost",
            ssl: (process.env.REACT_APP_DATABASE_URL) ? {rejectUnauthorized : false} : true,
        });
        const client = await pool.connect();
        const query = `SELECT course_title,course_id,semester_id
                    FROM enrollments WHERE user_id = '${req.body.user_id}'` ;
        const result = await client.query(query);
        const results = { 'results': (result) ? result.rows : null};
        console.log("result from query: " + JSON.stringify(results));
        const results_json_str = JSON.stringify(results);
        const results_json = JSON.parse(results_json_str);
        console.log(JSON.parse(results_json_str).results[0]);
        res.send(results_json.results); 
        client.release();
    } catch (err) {
        console.error(err);
        res.send("Error " + err);
        // throw err;
    }
});


module.exports = router;