import express from 'express';
import routes from './routes.js';
import path from 'path';
import bodyParser from 'body-parser';
const __dirname = path.resolve();

const app = express();
app.set('view engine', 'ejs');
app.set('views', __dirname + '/client');

app.use(bodyParser.json());
routes(app);

app.listen(3000, function () {
  console.log('good evening');
});
