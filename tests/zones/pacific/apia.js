"use strict";

var helpers = require("../../helpers/helpers");

exports["Pacific/Apia"] = {

	"guess:by:offset" : helpers.makeTestGuess("Pacific/Apia", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Pacific/Apia", { abbr: true }),

	"1892" : helpers.makeTestYear("Pacific/Apia", [
		["1892-07-04T11:26:56+00:00", "00:00:00", "LMT", 41216 / 60]
	]),

	"1911" : helpers.makeTestYear("Pacific/Apia", [
		["1911-01-01T11:26:55+00:00", "23:59:59", "LMT", 41216 / 60],
		["1911-01-01T11:26:56+00:00", "23:56:56", "-1130", 690]
	]),

	"1950" : helpers.makeTestYear("Pacific/Apia", [
		["1950-01-01T11:29:59+00:00", "23:59:59", "-1130", 690],
		["1950-01-01T11:30:00+00:00", "00:30:00", "-11", 660]
	]),

	"2010" : helpers.makeTestYear("Pacific/Apia", [
		["2010-09-26T10:59:59+00:00", "23:59:59", "-11", 660],
		["2010-09-26T11:00:00+00:00", "01:00:00", "-10", 600]
	]),

	"2011" : helpers.makeTestYear("Pacific/Apia", [
		["2011-04-02T13:59:59+00:00", "03:59:59", "-10", 600],
		["2011-04-02T14:00:00+00:00", "03:00:00", "-11", 660],
		["2011-09-24T13:59:59+00:00", "02:59:59", "-11", 660],
		["2011-09-24T14:00:00+00:00", "04:00:00", "-10", 600],
		["2011-12-30T09:59:59+00:00", "23:59:59", "-10", 600],
		["2011-12-30T10:00:00+00:00", "00:00:00", "+14", -840]
	]),

	"2012" : helpers.makeTestYear("Pacific/Apia", [
		["2012-03-31T13:59:59+00:00", "03:59:59", "+14", -840],
		["2012-03-31T14:00:00+00:00", "03:00:00", "+13", -780],
		["2012-09-29T13:59:59+00:00", "02:59:59", "+13", -780],
		["2012-09-29T14:00:00+00:00", "04:00:00", "+14", -840]
	]),

	"2013" : helpers.makeTestYear("Pacific/Apia", [
		["2013-04-06T13:59:59+00:00", "03:59:59", "+14", -840],
		["2013-04-06T14:00:00+00:00", "03:00:00", "+13", -780],
		["2013-09-28T13:59:59+00:00", "02:59:59", "+13", -780],
		["2013-09-28T14:00:00+00:00", "04:00:00", "+14", -840]
	]),

	"2014" : helpers.makeTestYear("Pacific/Apia", [
		["2014-04-05T13:59:59+00:00", "03:59:59", "+14", -840],
		["2014-04-05T14:00:00+00:00", "03:00:00", "+13", -780],
		["2014-09-27T13:59:59+00:00", "02:59:59", "+13", -780],
		["2014-09-27T14:00:00+00:00", "04:00:00", "+14", -840]
	]),

	"2015" : helpers.makeTestYear("Pacific/Apia", [
		["2015-04-04T13:59:59+00:00", "03:59:59", "+14", -840],
		["2015-04-04T14:00:00+00:00", "03:00:00", "+13", -780],
		["2015-09-26T13:59:59+00:00", "02:59:59", "+13", -780],
		["2015-09-26T14:00:00+00:00", "04:00:00", "+14", -840]
	]),

	"2016" : helpers.makeTestYear("Pacific/Apia", [
		["2016-04-02T13:59:59+00:00", "03:59:59", "+14", -840],
		["2016-04-02T14:00:00+00:00", "03:00:00", "+13", -780],
		["2016-09-24T13:59:59+00:00", "02:59:59", "+13", -780],
		["2016-09-24T14:00:00+00:00", "04:00:00", "+14", -840]
	]),

	"2017" : helpers.makeTestYear("Pacific/Apia", [
		["2017-04-01T13:59:59+00:00", "03:59:59", "+14", -840],
		["2017-04-01T14:00:00+00:00", "03:00:00", "+13", -780],
		["2017-09-23T13:59:59+00:00", "02:59:59", "+13", -780],
		["2017-09-23T14:00:00+00:00", "04:00:00", "+14", -840]
	]),

	"2018" : helpers.makeTestYear("Pacific/Apia", [
		["2018-03-31T13:59:59+00:00", "03:59:59", "+14", -840],
		["2018-03-31T14:00:00+00:00", "03:00:00", "+13", -780],
		["2018-09-29T13:59:59+00:00", "02:59:59", "+13", -780],
		["2018-09-29T14:00:00+00:00", "04:00:00", "+14", -840]
	]),

	"2019" : helpers.makeTestYear("Pacific/Apia", [
		["2019-04-06T13:59:59+00:00", "03:59:59", "+14", -840],
		["2019-04-06T14:00:00+00:00", "03:00:00", "+13", -780],
		["2019-09-28T13:59:59+00:00", "02:59:59", "+13", -780],
		["2019-09-28T14:00:00+00:00", "04:00:00", "+14", -840]
	]),

	"2020" : helpers.makeTestYear("Pacific/Apia", [
		["2020-04-04T13:59:59+00:00", "03:59:59", "+14", -840],
		["2020-04-04T14:00:00+00:00", "03:00:00", "+13", -780],
		["2020-09-26T13:59:59+00:00", "02:59:59", "+13", -780],
		["2020-09-26T14:00:00+00:00", "04:00:00", "+14", -840]
	]),

	"2021" : helpers.makeTestYear("Pacific/Apia", [
		["2021-04-03T13:59:59+00:00", "03:59:59", "+14", -840]
	])
};