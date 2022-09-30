const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'miltinjs.dev@gmail.com',
    pass: 'dgraljljtzuwkaie'
  }
});

const handleSendEmail = (options = { from: '', html: '', text: '' }) => {
  const mail = {
    from: 'miltinjs.dev@gmail.com',
    to: 'miltinjs.dev@gmail.com',
    cc: options.from,
    subject: 'Mensagem do portfólio',
    html: options.html
  };

  transporter.sendMail(mail, (err, info) => {
    if (err) {
      console.log(`Não foi possivel enviar o email.\n ${err}`);
    } else if (info) {
      console.log('Email enviado com sucesso!');
    }
  });
};

module.exports = handleSendEmail;