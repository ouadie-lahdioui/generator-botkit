const Generator = require('yeoman-generator');
const BotkitGreeting = require('../../lib/BotkitGreeting');
const mkdirp = require('mkdirp');

const chalk = require('chalk');
const _ = require('lodash');

const marvelHeroes = ['SpiderMan', 'CaptainMarvel', 'Hulk', 'Thor', 'IronMan', 'LukeCage', 'BlackWidow', 'Daredevil', 'Wolverine'];

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
  }

  initializing() {
    this.package = require('../../package.json');
    this.log(BotkitGreeting());
  }

  prompting() {
    let prompts = [];

    if(!this.options['botName']) {
      prompts.push({
        type: 'input',
        name: 'botName',
        message: 'What is the Bot name ?',
        default: marvelHeroes[_.random(marvelHeroes.length - 1)]
      });
    }

    if(!this.options['messaging']) {
      prompts.push({
        type: 'list',
        name: 'messaging',
        message: 'What is the messaging platform ?',
        choices: [ 'Facebook', 'Slack', 'Twilio', 'Nexmo']
      });
    }

    if(!this.options['nlp']) {
      prompts.push({
        type: 'list',
        name: 'nlp',
        message: 'Would you like to enable a Natural Language Processing tool ? ',
        choices: [ 'Nope', 'Wit.ai', 'Api.ai', 'Recast.ai', 'Watson', 'Luis']
      });
    }

    if(!this.options['starage']) {
      prompts.push({
        type: 'list',
        name: 'starage',
        message: 'Which storage system you need to keep data ?',
        choices: [ 'No one', 'MongoDB', 'RedisDB', 'CouchDB', 'Datastore', 'Firebase', 'Postgres']
      });
    }

    if(!this.options['dependencyManagementTool']) {
      prompts.push({
        type: 'list',
        name: 'dependencyManagementTool',
        message: 'Would you like to use NPM or YARN ?',
        choices: [ 'NPM', 'Yarn']
      });
    }

    if(!this.options['unitTest']) {
      prompts.push({
        type: 'list',
        name: 'unitTest',
        message: 'Would you like to use ES6 or ECMASCRIPT 5 ?',
        choices: [ 'ES6', 'ECMASCRIPT 5']
      });
    }

    if(!this.options['jsVersion']) {
      prompts.push({
        type: 'list',
        name: 'jsVersion',
        message: 'Wich JavaScript testing framework you like to use ?',
        choices: [ 'Mocha', 'Jasmine']
      });
    }

    prompts.push({
      type: 'checkbox',
      name: 'features',
      message: 'Which additional features would you like to include?',
      choices: [
          {
            name: 'Sass',
            value: 'includeSass',
            checked: true
          }, {
            name: 'Bootstrap',
            value: 'includeBootstrap',
            checked: true
          }, {
            name: 'Modernizr',
            value: 'includeModernizr',
            checked: true
          }
      ],
      when: function (answers) {
        return answers['messaging'] === 'Facebook';
      }
    });

    prompts.push()
    return this.prompt(prompts).then((answers) => {
      this.answers = answers;
    });
  }

  writing() {
    this.fs.copyTpl(
      this.templatePath('index.js'),
      this.destinationPath('index.js'),
      { name: this.answers.botName }
    );
  }

  install() {
    console.log('==>' + JSON.stringify(this.answers));
    //this.installDependencies();
  }

  end() {
    let packages = ['chalk'];
    this.npmInstall(packages, {'save': true});
    this.log(chalk.blue('Good bye'));
  }

  _getAuthor() {
    let name, email;

    if (typeof(this.user.git.name) == 'function') {
      name = this.user.git.name()
    } else {
      name = this.user.git.name
    }

    if (typeof(this.user.git.email) == 'function') {
      email = this.user.git.email()
    } else {
      email = this.user.git.email
    }

    if (name && email) {
      return `${name} <${email}>`;
    } else {
      return 'Author <name@example.com>';
    }
  }

};

