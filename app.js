const history = require('connect-history-api-fallback');
const express = require('express');
const app = express();

const staticFileMiddleware = express.static(__dirname);
app.use(staticFileMiddleware);
app.use(history({
  disableDotRule: true,
  verbose: true
}));
app.use(staticFileMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});