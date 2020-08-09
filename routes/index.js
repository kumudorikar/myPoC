// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
// });

// module.exports = router;

var express = require('express');
var url = require('url');

exports.renderPage = function(req, res) {
  res.render('index');
};

function callback(req, res, success, data) {
  if (!success) {
    var search = url.parse(req.url).search;
    res.status(404);
    return res.send();
  }
  res.send(data);
}
