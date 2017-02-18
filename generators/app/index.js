const chalk = require('chalk');
const _ = require('lodash');
const mkdirp = require('mkdirp');
const path = require('path');
const Generator = require('yeoman-generator');

const BotkitGreeting = require('../../lib/botkitGreeting');
const Promps = require('../../lib/prompts');
const Actions = require('../../lib/actions');

module.exports = class extends Generator {

  constructor(args, opts) {
    super(args, opts);
  }

  initializing() {
    this.log(BotkitGreeting());
  }

  prompting() {
    let prompts = [];
    let options = this.options;
    prompts.push(...Promps.Global(options));
    prompts.push(...Promps.Facebook(options));
    prompts.push(...Promps.Slack(options));
    prompts.push(...Promps.Cisco(options));
    return this.prompt(prompts).then((answers) => {
      this.answers = answers;
    });
  }

  writing() {
    this._createDirectory(_.kebabCase(this.answers.name));
    Actions.startAll({self: this, answers: this.answers});
  }

  install() {
    this.installDependencies({bower: false});
  }

  end() {
    this.log(chalk.blue('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
    this.log(chalk.blue(`Congratulation ! your Bot has just been created`));
    this.log(chalk.blue(`Execute your bot application like this :`));
    this.log(chalk.blue(` - cd ${_.kebabCase(this.answers.name)}`));
    this.log(chalk.blue(` - npm start`));
    this.log(chalk.blue('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~'));
  }

  _createDirectory(directoryName) {
    if (path.basename(this.destinationPath()) !== directoryName) {
      this.log(chalk.yellow(`Your bot should be in a directory named ${directoryName} I'll automatically create this folder ;)`));
      mkdirp(directoryName);
      this.destinationRoot(this.destinationPath(directoryName));
    }
  }

};

