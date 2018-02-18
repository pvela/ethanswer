const SE_BASE_URL='https://api.stackexchange.com/2.2/'
const API_KEY='ekGQbH8mopUzetlfSTPUrQ((';
var request = require('request');

exports.postAnswer = function(req,res,next) {
    const questionId = req.id;
    const accessToken = req.accessToken;
    const body = req.body;
    const POST_ANSWER_URL = '/questions/'+questionId+'/answers/add?key='+API_KEY+'&site=stackoverflow&order=desc&sort=activity&filter=default'
    
    request({uri:SE_BASE_URL+POST_ANSWER_URL,gzip:true}, function (error, response, data) {
        //console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        //console.log('data:', data); // Print the HTML for the Google homepage.
        if(!error)
            res.json(data);
      });
}
