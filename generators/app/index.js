const Generator = require('yeoman-generator');
const BotkitGreeting = require('../../lib/BotkitGreeting');

const chalk = require('chalk');
const _ = require('lodash');

const marvelHeroes = ['SpiderMan', 'CaptainMarvel', 'Hulk', 'Thor', 'IronMan', 'LukeCage', 'BlackWidow', 'Daredevil', 'Wolverine'];

module.exports = class extends Generator {

  initializing() {
    this.log(BotkitGreeting());
  }

  prompting() {

    var prompts = [
      {
        type: 'input',
        name: 'botName',
        message: 'What is the Bot name ?',
        default: marvelHeroes[_.random(marvelHeroes.length - 1)]
      },
      {
        type: 'confirm',
        name: 'someAnswer',
        message: 'Would you like to enable this option 2 ?',
        default: true
      },
      {
        type: 'list',
        name: 'messagingPlatform',
        message: 'What is the messaging platform ?',
        choices: [ 'Facebook', 'Slack', 'Twilio', 'Nexmo']
      },
      {
        type: 'list',
        name: 'nlpPlatform',
        message: 'Would you like to enable a Natural Language Processing tool ? ',
        choices: [ 'Nope', 'Wit.ai', 'Api.ai', 'Recast.ai', 'Watson', 'Luis']
      },
      {
        type: 'list',
        name: 'starage',
        message: 'Which storage system you need to keep data ?',
        choices: [ 'No one', 'MongoDB', 'RedisDB', 'CouchDB', 'Datastore', 'Firebase', 'Postgres']
      }
    ];

    return this.prompt(prompts).then((props) => {
      this.props = props;
    });
  }

  writing() {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  }

  install() {
    console.log('==>' + JSON.stringify(this.props));
    //this.installDependencies();
  }

  end() {
    this.log(chalk.blue('Good bye'));
  }

};

