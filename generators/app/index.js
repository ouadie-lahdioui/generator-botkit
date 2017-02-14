const Generator = require('yeoman-generator');
const BotkitGreeting = require('../../lib/BotkitGreeting');
const chalk = require('chalk');

module.exports = Generator.extend({
  method1: function() {
    this.log(BotkitGreeting());
  },
  prompting: function () {
    //this.log(yosay('Welcome to the superior ' + chalk.red('generator-botkit') + ' generator!'));

    var prompts = [{
      type: 'confirm',
      name: 'someAnswer',
      message: 'Would you like to enable this option?',
      default: true
    }];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
    }.bind(this));
  },

  writing: function () {
    this.fs.copy(
      this.templatePath('dummyfile.txt'),
      this.destinationPath('dummyfile.txt')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
