const express = require('express');
const router = express.Router();
const db = require('../models/db');


router.get('/', (request, response) => {
	response.send('Hello World');
});

  
router.post('/', (request, response, next) => {
    const shortUrl = { ...request.body, short_url: "http://localhost:8080/"+request.body.hash };
    var sql ='INSERT INTO shortend_urls (short_url, long_url, hash) VALUES (?,?,?)'
    var params =[shortUrl.short_url, shortUrl.long_url, shortUrl.hash]
    db.run(sql, params, function (error, result) {
        if (error) {
            return response.status(400).json({
                "error": error.message, 
                "status": false,
                "message": "short url not created!"
            });
        }

        return response.status(201).json({
        	"status": true,
            "message": "short url created.",
            "data": shortUrl,
            "id" : this.lastID
        })
    });
   
});


router.get('/:slug', (request, response, next) => {
	var sql = "select * from shortend_urls where hash = ?"
    var params = [request.params.slug]
    db.get(sql, params, (error, row) => {
        if (error) {
            return response.status(400).json({
                "error": error.message, 
                "status": false,
                "message": "short url not retrieved!"
            });
        }

        return response.status(200).json({
        	"status": true,
            "message":"short url retrieved.",
            "data":row
        });
    });
});


router.get("/urls/all", (request, response, next) => {
    var sql = "select * from shortend_urls"
    var params = []
    db.all(sql, params, (error, rows) => {
        if (error) {
            return response.status(400).json({
                "error": error.message, 
                "status": false,
                "message": "List of short long not returned!"
            });
        }

        return response.status(200).json({
        	"status": true,
            "message":"list of short url returned.",
            "data":rows
        })
      });
});


module.exports = router;