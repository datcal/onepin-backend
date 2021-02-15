const router = require('express').Router();
let User = require('../models/user.model');

router.route('/:username').get((req, res) => {
  User.findOne( { 'username' : req.params.username } )
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const flname = req.body.flname;
  const description = req.body.description;
  const image = req.body.image;


  const newUser = new User({
    username,
    flname,
    description,
    image,
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;