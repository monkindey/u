/**
 * @author monkindey
 * @date 2016.10.11
 */
'use strict';
const request = require('request');
const cheerio = require('cheerio');
const pify = require('pify');

const UNICODE_URL = 'http://www.fileformat.info/info/unicode/char/search.htm';

module.exports = function(q) {
	return pify(request.post)({
		url: UNICODE_URL,
		form: {
			q: q,
			preview: 'entity'
		}
	}).then((res) => {
		var $ = cheerio.load(res.body);
		var unicode = $('.table-list td').last().text();
		return unicode;
	});
};