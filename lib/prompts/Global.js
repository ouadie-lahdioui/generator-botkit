const _ = require('lodash');
const BotkitConst = require('../BotkitConst');

let marvelHeroes = ['SpiderMan', 'CaptainMarvel', 'Hulk', 'Thor', 'IronMan', 'LukeCage', 'BlackWidow', 'Daredevil', 'Wolverine'];
let globalPrompts = [];

module.exports = (options) => {

  if (!options['name']) {
    globalPrompts.push({
      type: 'input',
      name: 'name',
      message: 'What is the Bot name ?',
      default: marvelHeroes[_.random(marvelHeroes.length - 1)]
    });
  }

  if (!options['description']) {
    globalPrompts.push({
      type: 'input',
      name: 'description',
      message: 'What will your bot do ?'
    });
  }

  if (!options['messaging']) {
    globalPrompts.push({
      type: 'list',
      name: 'messaging',
      message: 'What is the messaging platform ?',
      choices: [BotkitConst.FACEBOOK, BotkitConst.SLACK, BotkitConst.CISCO]
    });
  }

  if (!options['nlp']) {
    globalPrompts.push({
      type: 'list',
      name: 'nlp',
      message: 'Would you like to enable a Natural Language Processing tool ?',
      choices: [BotkitConst.NOPE, BotkitConst.WIT_AI, BotkitConst.API_AI, BotkitConst.RECAST_AI, BotkitConst.WATSON, BotkitConst.LUIS]
    });
  }

  if (!options['starage']) {
    globalPrompts.push({
      type: 'list',
      name: 'starage',
      message: 'Which storage system you need to keep data ?',
      choices: [BotkitConst.NO_ONE, BotkitConst.MONGODB, BotkitConst.REDISDB, BotkitConst.COUCHDB, BotkitConst.DATASTORE, BotkitConst.FIREBASE, BotkitConst.POSTGRESQL]
    });
  }

  if (!options['hasYarn']) {
    globalPrompts.push({
      type: 'list',
      name: 'hasYarn',
      message: 'Would you like to use YARN ?',
      choices: [BotkitConst.YES, BotkitConst.NO]
    });
  }

  if (!options['hasTypeScript']) {
    globalPrompts.push({
      type: 'list',
      name: 'hasTypeScript',
      message: 'Would you like to use TypeScript ?',
      choices: [BotkitConst.YES, BotkitConst.NO]
    });
  }

  if (!options['unitTest']) {
    globalPrompts.push({
      type: 'list',
      name: 'unitTest',
      message: 'Which unit testing framework you love more ?',
      choices: ['Mocha', 'Jasmine']
    });
  }

  /*
  prompts.push({
    type: 'checkbox',
    name: 'features',
    message: 'Which additional features would you like to include?',
    choices: [
      {
        name: 'hello',
        value: 'includeHello',
        checked: true
      }, {
        name: 'silent push reply',
        value: 'includeSilentPush',
        checked: true
      }, {
        name: 'shutdown',
        value: 'includShutdown',
        checked: true
      }
    ],
    when: function (answers) {
      return answers['messaging'] === 'Facebook';
    }
  });
  */


  return globalPrompts;
};
