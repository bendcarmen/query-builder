const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const ontology = require('./ontology');
const config = require('queryTool.config');

const app = express();
const port = process.env.PORT || config.SERVER_PORT;
const router = express.Router();

function start() {
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use('/query-tool', router);
  app.listen(port);

  console.log(`Server started on ${port}`);

  // -- routes --//
  router.get('/api/ontology/', (req, res) => {
    res.json(ontology.terms.map((term, index) => ({
      id: index,
      name: term,
    })));
  });
}

module.exports = start;
