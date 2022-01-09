const express = require('express')
const app = express();
const ejs = require('ejs')
const bodyParser = require("body-parser")
const path = require('path')
const session = require('express-session');

app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');

app.use('/js', express.static('js'))
app.use('/css', express.static('css'))
app.use('/images', express.static('images'))
app.use('/vendor', express.static('vendor'))
app.use('/fonts', express.static('fonts'))


app.use(session({
	secret: 'CkXrYEK8yTNFKd3nwsMdDudgE3qb4fSfaIIUGT2SJhfMDcXKdceyegS3r5XJkSnMPqMGzx6GwiCV5Gw4ibT6Ij9QvVsC6eeaseaszz412312gbb2qZwiJjErbDWmxCNNqzk1uYGu6E',
	resave: true,
	saveUninitialized: true
}));


app.get('/', async function(req, res){

    res.render('index')
}) 


app.get('/about', async function (req, res) {
    res.render('index2')
})

app.get('/contact', async function (req, res) {
    res.render('index3')
})




const nodemailer = require('nodemailer')

app.post('/contact-form', async function (req, res) {

console.log('hello')
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ledyardemailmanagement@gmail.com',
    pass: 'ledyardtech123'
  }
});

var mailOptions = {
  from: 'ledyardemailmanagement@gmail.com',
  to: 'support@ledyardtech.com',
  subject: `email from: ${req.body.email}`,
  text: `Sender: ${req.body.email}\nName: ${req.body.name}\n------------------------Message------------------------\n${req.body.message}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

res.redirect('/contact')

})

const listener = app.listen(3000, () => {
    console.log("Your app is listening on port " + listener.address().port);
  });