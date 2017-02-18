module.exports = {
  start: (options) => {

    let generator = options.self;
    generator.fs.copy(generator.templatePath(`${options.answers.messaging}/skills`), generator.destinationPath('skills'));

  }
};
