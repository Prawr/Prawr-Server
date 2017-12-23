# Prawr-Server
[![Build Status](https://travis-ci.org/Prawr/Prawr-Server.svg?branch=master)](https://travis-ci.org/Prawr/Prawr-Server) 
[![Maintainability](https://api.codeclimate.com/v1/badges/19d3b9aeb33112d97178/maintainability)](https://codeclimate.com/github/Prawr/Prawr-Server/maintainability) 
 [![Test Coverage](https://api.codeclimate.com/v1/badges/19d3b9aeb33112d97178/test_coverage)](https://codeclimate.com/github/Prawr/Prawr-Server/test_coverage)  

This is the server for the prawr-project

## General Stuff
The server is based on express, the database connection uses mongoose.  
For logging we use morgan, for authentication we ise jsonwebtoken.  
In addition to express we use body-parser to parse request body data.  
Tests are executed with Jest & supertest.

## Testing
For testing, we use Jest. To run a test, run the command `npm test`.  
Coverage is saved in the /coverage directory.  
All tests are inside the `/tests` directory.