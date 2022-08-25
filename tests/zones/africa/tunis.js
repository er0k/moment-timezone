"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Tunis"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Tunis", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Tunis", { abbr: true, expect: "Africa/Algiers" }),

	"1881" : helpers.makeTestYear("Africa/Tunis", [
		["1881-05-11T23:19:16+00:00", "23:28:37", "PMT", -561 / 60]
	]),

	"1911" : helpers.makeTestYear("Africa/Tunis", [
		["1911-03-10T23:50:38+00:00", "23:59:59", "PMT", -561 / 60],
		["1911-03-10T23:50:39+00:00", "00:50:39", "CET", -60]
	]),

	"1939" : helpers.makeTestYear("Africa/Tunis", [
		["1939-04-15T21:59:59+00:00", "22:59:59", "CET", -60],
		["1939-04-15T22:00:00+00:00", "00:00:00", "CEST", -120],
		["1939-11-18T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1939-11-18T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1940" : helpers.makeTestYear("Africa/Tunis", [
		["1940-02-25T21:59:59+00:00", "22:59:59", "CET", -60],
		["1940-02-25T22:00:00+00:00", "00:00:00", "CEST", -120]
	]),

	"1941" : helpers.makeTestYear("Africa/Tunis", [
		["1941-10-05T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1941-10-05T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1942" : helpers.makeTestYear("Africa/Tunis", [
		["1942-03-08T22:59:59+00:00", "23:59:59", "CET", -60],
		["1942-03-08T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1942-11-02T00:59:59+00:00", "02:59:59", "CEST", -120],
		["1942-11-02T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"1943" : helpers.makeTestYear("Africa/Tunis", [
		["1943-03-29T00:59:59+00:00", "01:59:59", "CET", -60],
		["1943-03-29T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1943-04-16T23:59:59+00:00", "01:59:59", "CEST", -120],
		["1943-04-17T00:00:00+00:00", "01:00:00", "CET", -60],
		["1943-04-25T00:59:59+00:00", "01:59:59", "CET", -60],
		["1943-04-25T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1943-10-03T23:59:59+00:00", "01:59:59", "CEST", -120],
		["1943-10-04T00:00:00+00:00", "01:00:00", "CET", -60]
	]),

	"1944" : helpers.makeTestYear("Africa/Tunis", [
		["1944-04-03T00:59:59+00:00", "01:59:59", "CET", -60],
		["1944-04-03T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1944-10-07T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1944-10-07T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1945" : helpers.makeTestYear("Africa/Tunis", [
		["1945-04-02T00:59:59+00:00", "01:59:59", "CET", -60],
		["1945-04-02T01:00:00+00:00", "03:00:00", "CEST", -120],
		["1945-09-15T21:59:59+00:00", "23:59:59", "CEST", -120],
		["1945-09-15T22:00:00+00:00", "23:00:00", "CET", -60]
	]),

	"1977" : helpers.makeTestYear("Africa/Tunis", [
		["1977-04-29T22:59:59+00:00", "23:59:59", "CET", -60],
		["1977-04-29T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1977-09-23T22:59:59+00:00", "00:59:59", "CEST", -120],
		["1977-09-23T23:00:00+00:00", "00:00:00", "CET", -60]
	]),

	"1978" : helpers.makeTestYear("Africa/Tunis", [
		["1978-04-30T22:59:59+00:00", "23:59:59", "CET", -60],
		["1978-04-30T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1978-09-30T22:59:59+00:00", "00:59:59", "CEST", -120],
		["1978-09-30T23:00:00+00:00", "00:00:00", "CET", -60]
	]),

	"1988" : helpers.makeTestYear("Africa/Tunis", [
		["1988-05-31T22:59:59+00:00", "23:59:59", "CET", -60],
		["1988-05-31T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1988-09-24T22:59:59+00:00", "00:59:59", "CEST", -120],
		["1988-09-24T23:00:00+00:00", "00:00:00", "CET", -60]
	]),

	"1989" : helpers.makeTestYear("Africa/Tunis", [
		["1989-03-25T22:59:59+00:00", "23:59:59", "CET", -60],
		["1989-03-25T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1989-09-23T22:59:59+00:00", "00:59:59", "CEST", -120],
		["1989-09-23T23:00:00+00:00", "00:00:00", "CET", -60]
	]),

	"1990" : helpers.makeTestYear("Africa/Tunis", [
		["1990-04-30T22:59:59+00:00", "23:59:59", "CET", -60],
		["1990-04-30T23:00:00+00:00", "01:00:00", "CEST", -120],
		["1990-09-29T22:59:59+00:00", "00:59:59", "CEST", -120],
		["1990-09-29T23:00:00+00:00", "00:00:00", "CET", -60]
	]),

	"2005" : helpers.makeTestYear("Africa/Tunis", [
		["2005-04-30T22:59:59+00:00", "23:59:59", "CET", -60],
		["2005-04-30T23:00:00+00:00", "01:00:00", "CEST", -120],
		["2005-09-29T23:59:59+00:00", "01:59:59", "CEST", -120],
		["2005-09-30T00:00:00+00:00", "01:00:00", "CET", -60]
	]),

	"2006" : helpers.makeTestYear("Africa/Tunis", [
		["2006-03-26T00:59:59+00:00", "01:59:59", "CET", -60],
		["2006-03-26T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2006-10-29T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2006-10-29T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2007" : helpers.makeTestYear("Africa/Tunis", [
		["2007-03-25T00:59:59+00:00", "01:59:59", "CET", -60],
		["2007-03-25T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2007-10-28T00:59:59+00:00", "02:59:59", "CEST", -120],
		["2007-10-28T01:00:00+00:00", "02:00:00", "CET", -60]
	]),

	"2008" : helpers.makeTestYear("Africa/Tunis", [
		["2008-03-30T00:59:59+00:00", "01:59:59", "CET", -60],
		["2008-03-30T01:00:00+00:00", "03:00:00", "CEST", -120],
		["2008-10-26T00:59:59+00:00", "02:59:59", "CEST", -120]
	])
};