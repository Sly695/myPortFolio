var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "sandaraly1@gmail.com",
    pass: "ropstsxlkvnildqn"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/sendEmail", async (req, res) => {
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    to: "sandaraly1@gmail.com",
    subject: "Contact Form Submission",
    html: `<p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Votre message a bien été envoyé, merci." });
    }
  });
});

module.exports = router;
