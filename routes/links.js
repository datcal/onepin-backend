const router = require('express').Router();
let Link = require('../models/link.model');

router.route('/:username').get((req, res) => {
  Link.find( { 'username' : req.params.username } )
    .then(links => res.json(links))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const title = req.body.title;
  const url = req.body.url;

  const newLink = new Link({
    username,
    title,
    url,
  });

  newLink.save()
    .then(() => res.json('Link added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;