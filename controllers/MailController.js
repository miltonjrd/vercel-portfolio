const mailSender = require('../mailer');

exports.send = (req, res) => {
  const { email:from, message:html } = req.body;

  console.log(req.body)
  mailSender({from, html});

  return res.send({success: 'Email enviado com sucesso.'});
};