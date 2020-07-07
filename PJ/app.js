const express = require('express');
const serve = require('express-static');
const Home = require('./pages/Home');
const Yearly = require('./pages/Yearly');
const Intro = require('./pages/Intro');
const app = express();

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/' || req.originalUrl === '/index.html') {
    res.send(Home());
    return ;
  }
  next();
});

app.use('/end/:id', (req, res, next) => {
  const year = req.params.id;
  if (2015 <= year && year <= 2020) {
    res.send(Yearly(year));
  } else {
    res.send('invalid year');
  }
  next();
});

app.use('/intro', (req, res, next) => {
  const isOnAir = req.query.isOnAir;
  const year = req.query.year;
  const idx = req.query.idx;

  console.log(req.param);
  
    res.send(Intro(isOnAir, year, idx));
    res.send('invalid year');

  next();
});

app.use(serve(__dirname + '/public'));

app.listen(8080, function () {
  console.log('server start');
});
