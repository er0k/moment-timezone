"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Managua"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Managua", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Managua", { abbr: true }),

	"1890" : helpers.makeTestYear("America/Managua", [
		["1890-01-01T05:45:08+00:00", "23:59:56", "MMT", 20712 / 60]
	]),

	"1934" : helpers.makeTestYear("America/Managua", [
		["1934-06-23T05:45:11+00:00", "23:59:59", "MMT", 20712 / 60],
		["1934-06-23T05:45:12+00:00", "23:45:12", "CST", 360]
	]),

	"1973" : helpers.makeTestYear("America/Managua", [
		["1973-05-01T05:59:59+00:00", "23:59:59", "CST", 360],
		["1973-05-01T06:00:00+00:00", "01:00:00", "EST", 300]
	]),

	"1975" : helpers.makeTestYear("America/Managua", [
		["1975-02-16T04:59:59+00:00", "23:59:59", "EST", 300],
		["1975-02-16T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1979" : helpers.makeTestYear("America/Managua", [
		["1979-03-18T05:59:59+00:00", "23:59:59", "CST", 360],
		["1979-03-18T06:00:00+00:00", "01:00:00", "CDT", 300],
		["1979-06-25T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1979-06-25T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1980" : helpers.makeTestYear("America/Managua", [
		["1980-03-16T05:59:59+00:00", "23:59:59", "CST", 360],
		["1980-03-16T06:00:00+00:00", "01:00:00", "CDT", 300],
		["1980-06-23T04:59:59+00:00", "23:59:59", "CDT", 300],
		["1980-06-23T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1992" : helpers.makeTestYear("America/Managua", [
		["1992-01-01T09:59:59+00:00", "03:59:59", "CST", 360],
		["1992-01-01T10:00:00+00:00", "05:00:00", "EST", 300],
		["1992-09-24T04:59:59+00:00", "23:59:59", "EST", 300],
		["1992-09-24T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"1993" : helpers.makeTestYear("America/Managua", [
		["1993-01-01T05:59:59+00:00", "23:59:59", "CST", 360],
		["1993-01-01T06:00:00+00:00", "01:00:00", "EST", 300]
	]),

	"1997" : helpers.makeTestYear("America/Managua", [
		["1997-01-01T04:59:59+00:00", "23:59:59", "EST", 300],
		["1997-01-01T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"2005" : helpers.makeTestYear("America/Managua", [
		["2005-04-10T05:59:59+00:00", "23:59:59", "CST", 360],
		["2005-04-10T06:00:00+00:00", "01:00:00", "CDT", 300],
		["2005-10-02T04:59:59+00:00", "23:59:59", "CDT", 300],
		["2005-10-02T05:00:00+00:00", "23:00:00", "CST", 360]
	]),

	"2006" : helpers.makeTestYear("America/Managua", [
		["2006-04-30T07:59:59+00:00", "01:59:59", "CST", 360],
		["2006-04-30T08:00:00+00:00", "03:00:00", "CDT", 300],
		["2006-10-01T05:59:59+00:00", "00:59:59", "CDT", 300]
	])
};