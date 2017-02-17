const BotkitConst = require('../BotkitConst');

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
      name: 'pageToken',
      message: 'Facebook application secret :',
      when: function (answers) {
        return answers['messaging'] === BotkitConst.FACEBOOK;
      }
    });
  }

  return facebookPrompts;
};
