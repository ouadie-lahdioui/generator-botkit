module.exports = {
  write: (options) => {

    let generator = options.self;

    generator.fs.copyTpl(
      generator.templatePath('bot.js'),
      generator.destinationPath('bot.js'),
      {name: generator.answers.botName}
    );

  }
};
