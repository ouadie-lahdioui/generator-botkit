const chalk = require('chalk');
const _ = require('lodash');
const mkdirp = require('mkdirp');
const path = require('path');

const Generator = require('yeoman-generator');
const BotkitGreeting = require('../../lib/BotkitGreeting');
const GlobalPromps = require('../../lib/prompts/Global');
const FacebookPromps = require('../../lib/prompts/Facebook');
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
    prompts.push(...GlobalPromps(options));
    prompts.push(...FacebookPromps(options));
    return this.prompt(prompts).then((answers) => {
      this.answers = answers;
    });
  }

  writing() {
    const directoryName = _.kebabCase(this.answers.name);

    Actions({self: this});

    this._createDirectory(directoryName);
  }

  install() {
    this.installDependencies({bower: false});
  }

  end() {
    let congratulation = chalk.bgWhite.gray(`\\/\\/\\/\\/\\/\\/\\/\\/\\ Congratulation ! your ${this.answers.name} Bot has just been created /\\/\\/\\/\\/\\/\\/\\/\\/`);
    let cd = chalk.bgWhite.gray(`| cd ${_.kebabCase(this.answers.name)}`);
    let start = chalk.bgWhite.gray(`| npm start`)
    let end = chalk.bgWhite.gray('\\/\\/\\/\\/\\/\\/\\/\\/\\ Enjoy /\\/\\/\\/\\/\\/\\/\\/\\/');
    this.log(congratulation);
    this.log(cd);
    this.log(start);
    this.log(end);
  }

  _createDirectory(directoryName) {
    if (path.basename(this.destinationPath()) !== directoryName) {
      this.log(chalk.yellow(`Your bot should be in a directory named ${directoryName} I'll automatically create this folder ;)`));
      mkdirp(directoryName);
      this.destinationRoot(this.destinationPath(directoryName));
    }
  }

};

