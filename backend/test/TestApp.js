const supertest = require('supertest');
const chai = require('chai');
const should = chai.should();
const faker = require('faker');

const server = supertest.agent("http://localhost:8080");

describe("UrlShortner Request", () => {
    it("base url should return a form", (done) => {
    	server
    		.get('/')
    		.expect("content-type", /text\/html/)
        	.expect(200)
        	.end((error, res) => {
        		if (error) console.log(error);
            	done();
       		});
    });

    it("saved form should create new entry", (done) => {
    	server
    		.post('/')
    		.send({"long_url": faker.internet.url()})
    		.expect("content-type", /json/)
    		.expect(201)
    		.end((error, res) => {
    			if(error) console.log(error);
    			done();
    		})
    });


    it("retrieve the actual url for shortened url", (done) => {
    	server
    		.get('/:vFLKXNu6')
    		.send({"shortUrl": "http://localhost:8000/vFLKXNu6"})
    		.expect("content-type", /json/)
    		.expect(200)
    		.end((error, res) => {
    			if(error) console.log(error);
    			done();
    		});
    });

    it("get all url", (done) => {
    	server
    		.get('/urls/all')
    		.expect(200)
    		.end((error, res) => {
    			if(error) console.log(error);
    			done();
    		});
    });
});