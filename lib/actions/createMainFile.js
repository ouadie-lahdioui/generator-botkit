module.exports = {
  start: (options) => {

    let generator = options.self;
    let messaging = generator.answers['messaging'];
    let sourceFileName = `${messaging}/${messaging.toLowerCase()}Bot.js`;

    generator.fs.copyTpl(
      generator.templatePath(sourceFileName),
      generator.destinationPath('bot.js'),
      {name: generator.answers.name}
    );

  }
};
