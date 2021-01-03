const airtable = require('airtable');

// Configure Airtable with the API key and Base key
airtable.configure({
    apiKey: process.env.TOKEN,
    endpointUrl: 'https://api.airtable.com',
});
const base = airtable.base(process.env.DATABASE);

module.exports = base;