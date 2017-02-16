const chalk = require('chalk');
const _ = require('lodash');
const mkdirp = require('mkdirp');
const path = require('path');

const Generator = require('yeoman-generator');
const BotkitGreeting = require('../../lib/BotkitGreeting');
const BotkitConst = require('../../lib/BotkitConst');

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

    if (!this.options['botName']) {
      prompts.push({
        type: 'input',
        name: 'botName',
        message: 'What is the Bot name ?',
        default: marvelHeroes[_.random(marvelHeroes.length - 1)]
      });
    }

    if (!this.options['description']) {
      prompts.push({
        type: 'input',
        name: 'description',
        message: 'What will your bot do ?',
        default: marvelHeroes[_.random(marvelHeroes.length - 1)]
      });
    }

    if (!this.options['messaging']) {
      prompts.push({
        type: 'list',
        name: 'messaging',
        message: 'What is the messaging platform ?',
        choices: [BotkitConst.FACEBOOK, BotkitConst.SLACK, BotkitConst.TWILIO, BotkitConst.NEXMO]
      });
    }

    if (!this.options['nlp']) {
      prompts.push({
        type: 'list',
        name: 'nlp',
        message: 'Would you like to enable a Natural Language Processing tool ? ',
        choices: [BotkitConst.NOPE, BotkitConst.WIT_AI, BotkitConst.API_AI, BotkitConst.RECAST_AI, BotkitConst.WATSON, BotkitConst.TWILIO]
      });
    }

    if (!this.options['starage']) {
      prompts.push({
        type: 'list',
        name: 'starage',
        message: 'Which storage system you need to keep data ?',
        choices: [BotkitConst.NO_ONE, BotkitConst.MONGODB, BotkitConst.REDISDB, BotkitConst.COUCHDB, BotkitConst.DATASTORE, BotkitConst.FIREBASE, BotkitConst.POSTGRESQL]
      });
    }

    if (!this.options['dependencyManagementTool']) {
      prompts.push({
        type: 'list',
        name: 'dependencyManagementTool',
        message: 'Would you like to use NPM or YARN ?',
        choices: [BotkitConst.NPM, BotkitConst.YARN]
      });
    }

    if (!this.options['language']) {
      prompts.push({
        type: 'list',
        name: 'language',
        message: 'What language do you want to use ?',
        choices: [BotkitConst.ES6, BotkitConst.ECMASCRIPT_5, BotkitConst.TYPESCRIPT]
      });
    }

    if (!this.options['unitTest']) {
      prompts.push({
        type: 'list',
        name: 'unitTest',
        message: 'Wich unit testing framework you like to use ?',
        choices: ['Mocha', 'Jasmine']
      });
    }

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

    prompts.push()
    return this.prompt(prompts).then((answers) => {
      this.answers = answers;
    });
  }

  writing() {
    const directoryName = _.kebabCase(this.answers.botName);

    if (path.basename(this.destinationPath()) !== directoryName) {
      this.log(chalk.yellow(`Your bot should be in a directory named ${directoryName} I'll automatically create this folder ;)`));
      mkdirp(directoryName);
      this.destinationRoot(this.destinationPath(directoryName));
    }

    // package.json
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'),
      {
        botName: this.answers.botName,
        author: this._getAuthor()
      }
    );

    // .gitignore
    this.fs.copy(
      this.templatePath('_gitignore'),
      this.destinationPath('.gitignore')
    );

    // Readme.md
    this.fs.copyTpl(this.templatePath('_README.md'), this.destinationPath('README.md'),
      {
        botName: this.answers.botName,
        description: this.answers.description
      }
    );

    // Environment variables
    this.fs.copy(
      this.templatePath('_envVars'),
      this.destinationPath('.envVars')
    );

    this.fs.copyTpl(
      this.templatePath('bot.js'),
      this.destinationPath('bot.js'),
      {name: this.answers.botName}
    );
  }

  install() {
    this.installDependencies({bower: false});
  }

  end() {
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

