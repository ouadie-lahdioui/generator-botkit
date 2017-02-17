module.exports = {
  write: (options) => {

    let generator = options.self;

    generator.fs.copy(
      generator.templatePath('.envVars'),
      generator.destinationPath('.envVars')
    );

  }
};
