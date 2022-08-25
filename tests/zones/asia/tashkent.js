"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Tashkent"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Tashkent", { offset: true, expect: "Asia/Karachi" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Tashkent", { abbr: true, expect: "Asia/Karachi" }),

	"1924" : helpers.makeTestYear("Asia/Tashkent", [
		["1924-05-01T19:22:49+00:00", "00:22:49", "+05", -300]
	]),

	"1930" : helpers.makeTestYear("Asia/Tashkent", [
		["1930-06-20T18:59:59+00:00", "23:59:59", "+05", -300],
		["1930-06-20T19:00:00+00:00", "01:00:00", "+06", -360]
	]),

	"1981" : helpers.makeTestYear("Asia/Tashkent", [
		["1981-03-31T17:59:59+00:00", "23:59:59", "+06", -360],
		["1981-03-31T18:00:00+00:00", "01:00:00", "+07", -420],
		["1981-09-30T16:59:59+00:00", "23:59:59", "+07", -420],
		["1981-09-30T17:00:00+00:00", "23:00:00", "+06", -360]
	]),

	"1982" : helpers.makeTestYear("Asia/Tashkent", [
		["1982-03-31T17:59:59+00:00", "23:59:59", "+06", -360],
		["1982-03-31T18:00:00+00:00", "01:00:00", "+07", -420],
		["1982-09-30T16:59:59+00:00", "23:59:59", "+07", -420],
		["1982-09-30T17:00:00+00:00", "23:00:00", "+06", -360]
	]),

	"1983" : helpers.makeTestYear("Asia/Tashkent", [
		["1983-03-31T17:59:59+00:00", "23:59:59", "+06", -360],
		["1983-03-31T18:00:00+00:00", "01:00:00", "+07", -420],
		["1983-09-30T16:59:59+00:00", "23:59:59", "+07", -420],
		["1983-09-30T17:00:00+00:00", "23:00:00", "+06", -360]
	]),

	"1984" : helpers.makeTestYear("Asia/Tashkent", [
		["1984-03-31T17:59:59+00:00", "23:59:59", "+06", -360],
		["1984-03-31T18:00:00+00:00", "01:00:00", "+07", -420],
		["1984-09-29T19:59:59+00:00", "02:59:59", "+07", -420],
		["1984-09-29T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"1985" : helpers.makeTestYear("Asia/Tashkent", [
		["1985-03-30T19:59:59+00:00", "01:59:59", "+06", -360],
		["1985-03-30T20:00:00+00:00", "03:00:00", "+07", -420],
		["1985-09-28T19:59:59+00:00", "02:59:59", "+07", -420],
		["1985-09-28T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"1986" : helpers.makeTestYear("Asia/Tashkent", [
		["1986-03-29T19:59:59+00:00", "01:59:59", "+06", -360],
		["1986-03-29T20:00:00+00:00", "03:00:00", "+07", -420],
		["1986-09-27T19:59:59+00:00", "02:59:59", "+07", -420],
		["1986-09-27T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"1987" : helpers.makeTestYear("Asia/Tashkent", [
		["1987-03-28T19:59:59+00:00", "01:59:59", "+06", -360],
		["1987-03-28T20:00:00+00:00", "03:00:00", "+07", -420],
		["1987-09-26T19:59:59+00:00", "02:59:59", "+07", -420],
		["1987-09-26T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"1988" : helpers.makeTestYear("Asia/Tashkent", [
		["1988-03-26T19:59:59+00:00", "01:59:59", "+06", -360],
		["1988-03-26T20:00:00+00:00", "03:00:00", "+07", -420],
		["1988-09-24T19:59:59+00:00", "02:59:59", "+07", -420],
		["1988-09-24T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"1989" : helpers.makeTestYear("Asia/Tashkent", [
		["1989-03-25T19:59:59+00:00", "01:59:59", "+06", -360],
		["1989-03-25T20:00:00+00:00", "03:00:00", "+07", -420],
		["1989-09-23T19:59:59+00:00", "02:59:59", "+07", -420],
		["1989-09-23T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"1990" : helpers.makeTestYear("Asia/Tashkent", [
		["1990-03-24T19:59:59+00:00", "01:59:59", "+06", -360],
		["1990-03-24T20:00:00+00:00", "03:00:00", "+07", -420],
		["1990-09-29T19:59:59+00:00", "02:59:59", "+07", -420],
		["1990-09-29T20:00:00+00:00", "02:00:00", "+06", -360]
	]),

	"1991" : helpers.makeTestYear("Asia/Tashkent", [
		["1991-03-30T19:59:59+00:00", "01:59:59", "+06", -360],
		["1991-03-30T20:00:00+00:00", "02:00:00", "+06", -360],
		["1991-09-28T20:59:59+00:00", "02:59:59", "+06", -360]
	])
};