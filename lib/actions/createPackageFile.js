module.exports = {
  start: (options) => {

    let generator = options.self;

    let getAuthor = () => {
      let name, email;

      if (typeof(generator.user.git.name) == 'function') {
        name = generator.user.git.name()
      } else {
        name = generator.user.git.name
      }

      if (typeof(generator.user.git.email) == 'function') {
        email = generator.user.git.email()
      } else {
        email = generator.user.git.email
      }

      if (name && email) {
        return `${name} <${email}>`;
      } else {
        return 'Author <name@example.com>';
      }
    };

    generator.fs.copyTpl(
      generator.templatePath('package.json'),
      generator.destinationPath('package.json'),
      {
        name: generator.answers.name,
        description: generator.answers.description,
        author: getAuthor()
      }
    );

  }
};
