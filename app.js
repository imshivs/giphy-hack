require('dotenv').load();
// var schedule = require('node-schedule');
var giphy = require( 'giphy' )( 'dc6zaTOxFJmzC' );

// giphy.trending({
//     limit: 5,
//     rating: 'g',
//     fmt: 'json'
// }, function(err, res) {
// 	console.log(res);
// });
// var cron = require('cron').CronJob;
// cronEmail = new cron( '10 * * * *', function

var nodemailer = require("nodemailer");
console.log(process.env.MY_PASSWORD);
var smtpTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",
   auth: {
       user: process.env.MY_EMAIL,
       pass: process.env.MY_PASSWORD
   }
});


// var job = new CronJob('*/60 * * * * *', this.email, true, 'America/San_Francisco');
var CronJob = require('cron').CronJob;
new CronJob('*/1 * * * *', function() {
	giphy.search({ 
	q: 'baby animals', 
	limit:100,
	rating: 'g'
	}, function (err, res) { 
	    var gifs = res.data;
	    var gif = gifs[Math.floor(Math.random()*gifs.length)];
	    console.log("here");

	    smtpTransport.sendMail({
		   from: process.env.MY_EMAIL, // sender address
		   to: "negishivs@gmail.com", // comma separated list of receivers
		   subject: "DAILY GIF ✔", // Subject line
		   text: gif.images.downsized_large.url // plaintext body
		}, function(error, response){
		   if(error){
		       console.log(error);
		   }else{
		       console.log("Message sent: " + response.message);
		   }
		});
	});

}, null, true, 'America/Los_Angeles');

var email = function(){

giphy.search({ 
	q: 'pokemon', 
	limit:100,
	rating: 'g'
	}, function (err, res) { 
	    var gifs = res.data;
	    var gif = gifs[Math.floor(Math.random()*gifs.length)];
	    console.log("here");

	    smtpTransport.sendMail({
		   from: process.env.MY_EMAIL, // sender address
		   to: "negishivs@gmail.com", // comma separated list of receivers
		   subject: "DAILY GIF ✔", // Subject line
		   text: gif.images.downsized_large.url // plaintext body
		}, function(error, response){
		   if(error){
		       console.log(error);
		   }else{
		       console.log("Message sent: " + response.message);
		   }
		});
	});
}
// });