module.exports = {
  start: (options) => {

    let generator = options.self;
    generator.fs.copy(generator.templatePath(`${options.answers.messaging}/components`), generator.destinationPath('components'));

  }
};
