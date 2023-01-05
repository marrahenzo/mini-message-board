var express = require('express');
var router = express.Router();

const messages = [
  {
    text: 'Hi there!',
    user: 'Amando',
    added: new Date()
  },
  {
    text: 'Hello World!',
    user: 'Charles',
    added: new Date()
  },
  { text: 'Zeus!', user: 'Kratos', added: new Date() },
  {
    text: 'The Arcana is the means by which all is revealed',
    user: 'Nyx Avatar',
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function (req, res, next) {
  res.render('form');
});

router.post('/new', function (req, res, next) {
  messages.push({
    text: req.body.name,
    user: req.body.message,
    added: new Date()
  });
  res.redirect('/');
});

module.exports = router;
