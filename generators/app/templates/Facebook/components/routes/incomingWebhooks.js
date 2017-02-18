module.exports = function(webserver, controller) {

  console.log('Configured POST /facebook/receive url for receiving events');
  webserver.post('/facebook/receive', function(req, res) {
    console.log('----->');
    // NOTE: we should enforce the token check here

    // respond to Slack that the webhook has been received.
    res.status(200);
    res.send('ok');

    let bot = controller.spawn({});

    // Now, pass the webhook into be processed
    controller.handleWebhookPayload(req, res, bot);

  });

  console.log('Configured GET /facebook/receive url for verification');
  webserver.get('/facebook/receive', function(req, res) {
    console.log('----->');
    if (req.query['hub.mode'] == 'subscribe') {
      if (req.query['hub.verify_token'] == controller.config.verify_token) {
        res.send(req.query['hub.challenge']);
      } else {
        res.send('OK');
      }
    }
  });

}
