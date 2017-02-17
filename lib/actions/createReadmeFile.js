module.exports = {
  start: (options) => {

    let generator = options.self;

    generator.fs.copyTpl(generator.templatePath('README.md'), generator.destinationPath('README.md'),
      {
        name: generator.answers.name,
        description: generator.answers.description,
      }
    );

  }
};
