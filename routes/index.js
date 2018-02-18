var express = require('express');
var router = express.Router();
var SE_BASE_URL='https://api.stackexchange.com/2.2/'
var API_KEY='ekGQbH8mopUzetlfSTPUrQ((';
//var API_KEY='TI10PZ0HLYke*WkA0HpY4A((';

var QUESTIONS_URL='questions/unanswered?key='+API_KEY+'&site=stackoverflow&order=desc&sort=activity&filter=default'

var request = require('request');

/* GET home page. */
router.get('/', function(req, res, next) {
  getQuestions(function(err,questions) {
    res.render('questions', { questions: questions });
  });
  // Get all the questions (http://api.stackexchange.com/docs/questions)

});

function getQuestions(callback) {
  request({uri:SE_BASE_URL+QUESTIONS_URL,gzip:true}, function (error, response, data) {
    //console.log('error:', error); // Print the error if one occurred
    //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //console.log('data:', data); // Print the HTML for the Google homepage.
    var jdata = JSON.parse(data);
    callback(error,jdata.items);
  });
}
module.exports = router;
