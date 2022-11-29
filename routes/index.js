var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages });
});

router.get('/new', function(req, res, next){
  res.render('form', { title: 'Mini Messageboard'})
})

router.post('/new', function(req, res, next){
  req.body.user && req.body.text != null ?
    messages.push({
      text: req.body.text,
      user: req.body.user,
      added: new Date()
    }) : null
    res.redirect('/')
})

module.exports = router;
