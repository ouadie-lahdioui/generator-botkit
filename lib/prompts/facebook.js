const BotkitConst = require('../botkitConst');

let facebookPrompts = [];

module.exports = (options) => {

  if (!options['pageToken']) {
    facebookPrompts.push({
      type: 'input',
      name: 'pageToken',
      message: 'Facebook page token :',
      when: function (answers) {
        return answers['messaging'] === BotkitConst.FACEBOOK;
      }
    });
  }

  if (!options['verifyToken']) {
    facebookPrompts.push({
      type: 'input',
      name: 'verifyToken',
      message: 'Facebook verify token :',
      when: function (answers) {
        return answers['messaging'] === BotkitConst.FACEBOOK;
      }
    });
  }

  if (!options['appSecret']) {
    facebookPrompts.push({
      type: 'input',
      name: 'appSecret',
      message: 'Facebook application secret :',
      when: function (answers) {
        return answers['messaging'] === BotkitConst.FACEBOOK;
      }
    });
  }

  if (!options['port']) {
    facebookPrompts.push({
      type: 'input',
      name: 'port',
      message: 'Port :',
      when: function (answers) {
        return answers['messaging'] === BotkitConst.FACEBOOK;
      }
    });
  }

  return facebookPrompts;
};
