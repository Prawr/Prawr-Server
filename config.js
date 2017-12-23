/**
 * This file contains all the configuration for the server.  
 */
// This is just demo data for the local test environment
module.exports = {
    dbUser: "rootuser",
    dbPassword: "   ",
    dbName: "prawr",
    dbHost: "127.0.0.1",
    dbPort: 27017,
    databaseTimeToWait: 10, // time in ms,
    // This is the secret used to create JSON Web Token
    // changing this is VERY IMPORTANT before deploying!
    verificationSecret: "FLEscfHBR75jT2BNAEBv7AxmMAn6bNvX"
};