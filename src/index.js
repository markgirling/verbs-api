const app = require('./app')();

const port = process.env.PORT || 3000;
app.listen(port);
console.log(`Verb api listening on port ${port}`); // eslint-disable-line no-console
