
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

const { PORT } = process.env
const PORTINIT = PORT || 3001

conn.sync({ force: false }).then(() => {
  server.listen(PORTINIT, () => {
    console.log(`%s listening at ${PORTINIT}}`); // eslint-disable-line no-console
  });
});
