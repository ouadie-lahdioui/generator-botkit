const BotkitConst = require('../botkitConst');

module.exports = {
  start: (options) => {

    let generator = options.self;
    let messaging = generator.answers['messaging'];
    let params = {};

    switch(messaging) {
      case BotkitConst.FACEBOOK:
        params.pageToken = generator.answers['pageToken'];
        params.verifyToken = generator.answers['verifyToken'];
        params.appSecret = generator.answers['appSecret'];
        break;
      case BotkitConst.SLACK:
        // TODO : Put slack env vars
        break;
      case BotkitConst.CISCO:
        // TODO : Put Cisco env vars
        break;
    }

    generator.fs.copyTpl(
      generator.templatePath(`${messaging}/.env`),
      generator.destinationPath('.env'),
      params
    );

  }
};
