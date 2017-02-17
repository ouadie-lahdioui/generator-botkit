module.exports = {
  write: (options) => {

    let generator = options.self;

    generator.fs.copyTpl(generator.templatePath('README.md'), generator.destinationPath('README.md'),
      {
        botName: generator.answers.name,
        description: generator.answers.description
      }
    );

  }
};
