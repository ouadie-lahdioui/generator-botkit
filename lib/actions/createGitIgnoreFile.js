module.exports = {
  start: (options) => {

    let generator = options.self;

    generator.fs.copy(
      generator.templatePath('.gitignore'),
      generator.destinationPath('.gitignore')
    );

  }
};
