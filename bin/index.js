#!/usr/bin/env node

'use strict';
const meow = require('meow');
const Spin = require('io-spin');
const spinner = new Spin('Searching', 'Box1');
const u = require('../');

const cli = meow(`
    Usage
      $ u <unicode>

    Options: 
      --version, -v       Output version number
      --help, -h          Output help

    Examples
      $ u 'u597d'
`, {
	alias: {
		v: 'version',
		h: 'help'
	}
});

var word = cli.input[0];
spinner.start();

u(word).then((unicode) => {
	spinner.stop();
	console.log(unicode);
}).catch(err => {
	console.log(err.toString());
});
