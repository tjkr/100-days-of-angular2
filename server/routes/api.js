var express = require('express');
var router = express.Router();

let messageOfTheMoment = "If you ever fall off the Sears Tower, just go real limp, because maybe you'll look like a dummy and people will try to catch you because, hey, free dummy.";

router.get('/test', function(req, res, next) {
  res.json({'testMessage': 'everything is going to be ok', 'someNumber': 457});
});

router.get('/get-message-of-the-moment', function(req, res, next) {
  res.json({'message': messageOfTheMoment});
});

router.post('/post-message', function(req, res, next) {
  if(req.body.message && req.body.message.length < 500) {
    let unsafeMessage = req.body.message;
    let sanitizedMessage = req.sanitize(req.body.message);
    console.log('New message of the moment (unsafe): ' + unsafeMessage);
    console.log('New message of the moment (clean) : ' + sanitizedMessage);
    messageOfTheMoment = sanitizedMessage;
    res.json({'message': sanitizedMessage});
  } else {
    res.json({'error': 'message not set'});
  }
});

module.exports = router;
