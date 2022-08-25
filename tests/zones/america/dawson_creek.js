"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Dawson_Creek"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Dawson_Creek", { offset: true, expect: "America/Phoenix" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Dawson_Creek", { abbr: true, expect: "America/Phoenix" }),

	"1884" : helpers.makeTestYear("America/Dawson_Creek", [
		["1884-01-01T08:00:56+00:00", "00:00:56", "PST", 480]
	]),

	"1918" : helpers.makeTestYear("America/Dawson_Creek", [
		["1918-04-14T09:59:59+00:00", "01:59:59", "PST", 480],
		["1918-04-14T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1918-10-27T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1918-10-27T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1942" : helpers.makeTestYear("America/Dawson_Creek", [
		["1942-02-09T09:59:59+00:00", "01:59:59", "PST", 480],
		["1942-02-09T10:00:00+00:00", "03:00:00", "PWT", 420]
	]),

	"1945" : helpers.makeTestYear("America/Dawson_Creek", [
		["1945-08-14T22:59:59+00:00", "15:59:59", "PWT", 420],
		["1945-08-14T23:00:00+00:00", "16:00:00", "PPT", 420],
		["1945-09-30T08:59:59+00:00", "01:59:59", "PPT", 420],
		["1945-09-30T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1947" : helpers.makeTestYear("America/Dawson_Creek", [
		["1947-04-27T09:59:59+00:00", "01:59:59", "PST", 480],
		["1947-04-27T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1947-09-28T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1947-09-28T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1948" : helpers.makeTestYear("America/Dawson_Creek", [
		["1948-04-25T09:59:59+00:00", "01:59:59", "PST", 480],
		["1948-04-25T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1948-09-26T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1948-09-26T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1949" : helpers.makeTestYear("America/Dawson_Creek", [
		["1949-04-24T09:59:59+00:00", "01:59:59", "PST", 480],
		["1949-04-24T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1949-09-25T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1949-09-25T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1950" : helpers.makeTestYear("America/Dawson_Creek", [
		["1950-04-30T09:59:59+00:00", "01:59:59", "PST", 480],
		["1950-04-30T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1950-09-24T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1950-09-24T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1951" : helpers.makeTestYear("America/Dawson_Creek", [
		["1951-04-29T09:59:59+00:00", "01:59:59", "PST", 480],
		["1951-04-29T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1951-09-30T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1951-09-30T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1952" : helpers.makeTestYear("America/Dawson_Creek", [
		["1952-04-27T09:59:59+00:00", "01:59:59", "PST", 480],
		["1952-04-27T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1952-09-28T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1952-09-28T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1953" : helpers.makeTestYear("America/Dawson_Creek", [
		["1953-04-26T09:59:59+00:00", "01:59:59", "PST", 480],
		["1953-04-26T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1953-09-27T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1953-09-27T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1954" : helpers.makeTestYear("America/Dawson_Creek", [
		["1954-04-25T09:59:59+00:00", "01:59:59", "PST", 480],
		["1954-04-25T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1954-09-26T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1954-09-26T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1955" : helpers.makeTestYear("America/Dawson_Creek", [
		["1955-04-24T09:59:59+00:00", "01:59:59", "PST", 480],
		["1955-04-24T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1955-09-25T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1955-09-25T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1956" : helpers.makeTestYear("America/Dawson_Creek", [
		["1956-04-29T09:59:59+00:00", "01:59:59", "PST", 480],
		["1956-04-29T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1956-09-30T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1956-09-30T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1957" : helpers.makeTestYear("America/Dawson_Creek", [
		["1957-04-28T09:59:59+00:00", "01:59:59", "PST", 480],
		["1957-04-28T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1957-09-29T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1957-09-29T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1958" : helpers.makeTestYear("America/Dawson_Creek", [
		["1958-04-27T09:59:59+00:00", "01:59:59", "PST", 480],
		["1958-04-27T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1958-09-28T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1958-09-28T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1959" : helpers.makeTestYear("America/Dawson_Creek", [
		["1959-04-26T09:59:59+00:00", "01:59:59", "PST", 480],
		["1959-04-26T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1959-09-27T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1959-09-27T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1960" : helpers.makeTestYear("America/Dawson_Creek", [
		["1960-04-24T09:59:59+00:00", "01:59:59", "PST", 480],
		["1960-04-24T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1960-09-25T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1960-09-25T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1961" : helpers.makeTestYear("America/Dawson_Creek", [
		["1961-04-30T09:59:59+00:00", "01:59:59", "PST", 480],
		["1961-04-30T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1961-09-24T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1961-09-24T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1962" : helpers.makeTestYear("America/Dawson_Creek", [
		["1962-04-29T09:59:59+00:00", "01:59:59", "PST", 480],
		["1962-04-29T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1962-10-28T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1962-10-28T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1963" : helpers.makeTestYear("America/Dawson_Creek", [
		["1963-04-28T09:59:59+00:00", "01:59:59", "PST", 480],
		["1963-04-28T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1963-10-27T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1963-10-27T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1964" : helpers.makeTestYear("America/Dawson_Creek", [
		["1964-04-26T09:59:59+00:00", "01:59:59", "PST", 480],
		["1964-04-26T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1964-10-25T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1964-10-25T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1965" : helpers.makeTestYear("America/Dawson_Creek", [
		["1965-04-25T09:59:59+00:00", "01:59:59", "PST", 480],
		["1965-04-25T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1965-10-31T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1965-10-31T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1966" : helpers.makeTestYear("America/Dawson_Creek", [
		["1966-04-24T09:59:59+00:00", "01:59:59", "PST", 480],
		["1966-04-24T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1966-10-30T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1966-10-30T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1967" : helpers.makeTestYear("America/Dawson_Creek", [
		["1967-04-30T09:59:59+00:00", "01:59:59", "PST", 480],
		["1967-04-30T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1967-10-29T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1967-10-29T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1968" : helpers.makeTestYear("America/Dawson_Creek", [
		["1968-04-28T09:59:59+00:00", "01:59:59", "PST", 480],
		["1968-04-28T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1968-10-27T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1968-10-27T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1969" : helpers.makeTestYear("America/Dawson_Creek", [
		["1969-04-27T09:59:59+00:00", "01:59:59", "PST", 480],
		["1969-04-27T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1969-10-26T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1969-10-26T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1970" : helpers.makeTestYear("America/Dawson_Creek", [
		["1970-04-26T09:59:59+00:00", "01:59:59", "PST", 480],
		["1970-04-26T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1970-10-25T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1970-10-25T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1971" : helpers.makeTestYear("America/Dawson_Creek", [
		["1971-04-25T09:59:59+00:00", "01:59:59", "PST", 480],
		["1971-04-25T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1971-10-31T08:59:59+00:00", "01:59:59", "PDT", 420],
		["1971-10-31T09:00:00+00:00", "01:00:00", "PST", 480]
	]),

	"1972" : helpers.makeTestYear("America/Dawson_Creek", [
		["1972-04-30T09:59:59+00:00", "01:59:59", "PST", 480],
		["1972-04-30T10:00:00+00:00", "03:00:00", "PDT", 420],
		["1972-08-30T08:59:59+00:00", "01:59:59", "PDT", 420]
	])
};