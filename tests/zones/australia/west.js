"use strict";

var helpers = require("../../helpers/helpers");

exports["Australia/West"] = {

	"guess:by:offset" : helpers.makeTestGuess("Australia/West", { offset: true, expect: "Asia/Manila" }),

	"guess:by:abbr" : helpers.makeTestGuess("Australia/West", { abbr: true, expect: "Australia/Perth" }),

	"1895" : helpers.makeTestYear("Australia/West", [
		["1895-11-30T16:16:36+00:00", "00:16:36", "AWST", -480]
	]),

	"1916" : helpers.makeTestYear("Australia/West", [
		["1916-12-31T17:59:59+00:00", "01:59:59", "AWST", -480],
		["1916-12-31T18:00:00+00:00", "03:00:00", "AWDT", -540]
	]),

	"1917" : helpers.makeTestYear("Australia/West", [
		["1917-03-24T17:59:59+00:00", "02:59:59", "AWDT", -540],
		["1917-03-24T18:00:00+00:00", "02:00:00", "AWST", -480]
	]),

	"1941" : helpers.makeTestYear("Australia/West", [
		["1941-12-31T17:59:59+00:00", "01:59:59", "AWST", -480],
		["1941-12-31T18:00:00+00:00", "03:00:00", "AWDT", -540]
	]),

	"1942" : helpers.makeTestYear("Australia/West", [
		["1942-03-28T17:59:59+00:00", "02:59:59", "AWDT", -540],
		["1942-03-28T18:00:00+00:00", "02:00:00", "AWST", -480],
		["1942-09-26T17:59:59+00:00", "01:59:59", "AWST", -480],
		["1942-09-26T18:00:00+00:00", "03:00:00", "AWDT", -540]
	]),

	"1943" : helpers.makeTestYear("Australia/West", [
		["1943-03-27T17:59:59+00:00", "02:59:59", "AWDT", -540],
		["1943-03-27T18:00:00+00:00", "02:00:00", "AWST", -480]
	]),

	"1974" : helpers.makeTestYear("Australia/West", [
		["1974-10-26T17:59:59+00:00", "01:59:59", "AWST", -480],
		["1974-10-26T18:00:00+00:00", "03:00:00", "AWDT", -540]
	]),

	"1975" : helpers.makeTestYear("Australia/West", [
		["1975-03-01T17:59:59+00:00", "02:59:59", "AWDT", -540],
		["1975-03-01T18:00:00+00:00", "02:00:00", "AWST", -480]
	]),

	"1983" : helpers.makeTestYear("Australia/West", [
		["1983-10-29T17:59:59+00:00", "01:59:59", "AWST", -480],
		["1983-10-29T18:00:00+00:00", "03:00:00", "AWDT", -540]
	]),

	"1984" : helpers.makeTestYear("Australia/West", [
		["1984-03-03T17:59:59+00:00", "02:59:59", "AWDT", -540],
		["1984-03-03T18:00:00+00:00", "02:00:00", "AWST", -480]
	]),

	"1991" : helpers.makeTestYear("Australia/West", [
		["1991-11-16T17:59:59+00:00", "01:59:59", "AWST", -480],
		["1991-11-16T18:00:00+00:00", "03:00:00", "AWDT", -540]
	]),

	"1992" : helpers.makeTestYear("Australia/West", [
		["1992-02-29T17:59:59+00:00", "02:59:59", "AWDT", -540],
		["1992-02-29T18:00:00+00:00", "02:00:00", "AWST", -480]
	]),

	"2006" : helpers.makeTestYear("Australia/West", [
		["2006-12-02T17:59:59+00:00", "01:59:59", "AWST", -480],
		["2006-12-02T18:00:00+00:00", "03:00:00", "AWDT", -540]
	]),

	"2007" : helpers.makeTestYear("Australia/West", [
		["2007-03-24T17:59:59+00:00", "02:59:59", "AWDT", -540],
		["2007-03-24T18:00:00+00:00", "02:00:00", "AWST", -480],
		["2007-10-27T17:59:59+00:00", "01:59:59", "AWST", -480],
		["2007-10-27T18:00:00+00:00", "03:00:00", "AWDT", -540]
	]),

	"2008" : helpers.makeTestYear("Australia/West", [
		["2008-03-29T17:59:59+00:00", "02:59:59", "AWDT", -540],
		["2008-03-29T18:00:00+00:00", "02:00:00", "AWST", -480],
		["2008-10-25T17:59:59+00:00", "01:59:59", "AWST", -480],
		["2008-10-25T18:00:00+00:00", "03:00:00", "AWDT", -540]
	]),

	"2009" : helpers.makeTestYear("Australia/West", [
		["2009-03-28T17:59:59+00:00", "02:59:59", "AWDT", -540]
	])
};