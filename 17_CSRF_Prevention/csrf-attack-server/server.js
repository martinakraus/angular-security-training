const express = require("express");
const fs = require('fs');


const port = 1111;
const app = express();

let reviews = [];

app.use(express.static('public'));

app.get('/', function (req, res) {
  if (req.query.newReview) reviews.push(req.query.newReview);
  const formattedReviews = reviews.map((review)=> `<dt>User</dt><dd>${review}</dd>`).join(' ');
  const template = fs.readFileSync('./templates/index.html', 'utf8');
  const view = template.replace('$reviews$', formattedReviews);
  res.send(view);
});

app.listen(port, () => console.log(`The server is listening at http://localhost:${port}`));
