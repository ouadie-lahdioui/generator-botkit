# Yeoman generator for Botkit [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> Allo Aloo, welcome to Botkit, ladies and gentlemen !

<p align="center">
	<img src="https://github.com/ouadie-lahdioui/generator-botkit/blob/master/images/yeomanBotkit.png">
</p>

## Features

- Scaffolds a bot using [Botkit](https://github.com/howdyai/botkit)
- Deploy it to Heroku

## Dependencies

- dotenv for managing environmental variables
- restify for hosting the API

## Installation

First, install [Yeoman](http://yeoman.io) and generator-botkit using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-botkit
```

Then generate your new project:

```bash
yo botkit
```

## Next Steps

- Update .env with your bot App ID and Password (if needed)
- Add your logic to bot.js

## License

- This project is licensed under the terms of the MIT license and developed with love by [Ouadie LAHDIOUI](www.twitter.com/lahdiouiouadie)
- Feel free to make PRs, if there's anything you feel we could do better
- Full license text is available in [LICENSE.md](LICENSE.md) 

[npm-image]: https://badge.fury.io/js/generator-botkit.svg
[npm-url]: https://npmjs.org/package/generator-botkit
[travis-image]: https://travis-ci.org/ouadie-lahdioui/generator-botkit.svg?branch=master
[travis-url]: https://travis-ci.org/ouadie-lahdioui/generator-botkit
[daviddm-image]: https://david-dm.org/ouadie-lahdioui/generator-botkit.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/ouadie-lahdioui/generator-botkit
