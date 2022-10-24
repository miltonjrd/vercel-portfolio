const express = require('express');
const router = express.Router();

const MailController = require('./controllers/MailController');

router.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');
});

router.get('/data', (req, res) => {
  res.sendFile(__dirname + '/public/data.json');
});

router.get('/media/:id', (req, res) => {
  const id = req.params.id;
  console.log(req);
  res.sendFile(__dirname + '/public/images/'+id);
});

router.get('/media/logo/:id', (req, res) => {
  const id = req.params.id;
  console.log(req);
  res.sendFile(__dirname + '/public/images/logos/'+id);
});

router.get('/media/project/:id', (req, res) => {
  const id = req.params.id;
  console.log(req);
  res.sendFile(__dirname + '/public/images/projects/'+id);
});

router.post('/contact', MailController.send);

module.exports = router;
