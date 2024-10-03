"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Mazatlan"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Mazatlan", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Mazatlan", { abbr: true }),

	"1922" : helpers.makeTestYear("America/Mazatlan", [
		["1922-01-01T06:59:59+00:00", "23:54:19", "LMT", 25540 / 60],
		["1922-01-01T07:00:00+00:00", "00:00:00", "MST", 420]
	]),

	"1927" : helpers.makeTestYear("America/Mazatlan", [
		["1927-06-10T06:59:59+00:00", "23:59:59", "MST", 420],
		["1927-06-10T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1930" : helpers.makeTestYear("America/Mazatlan", [
		["1930-11-15T05:59:59+00:00", "23:59:59", "CST", 360],
		["1930-11-15T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1931" : helpers.makeTestYear("America/Mazatlan", [
		["1931-04-30T06:59:59+00:00", "23:59:59", "MST", 420],
		["1931-04-30T07:00:00+00:00", "01:00:00", "MDT", 360],
		["1931-10-01T05:59:59+00:00", "23:59:59", "MDT", 360],
		["1931-10-01T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1932" : helpers.makeTestYear("America/Mazatlan", [
		["1932-04-01T06:59:59+00:00", "23:59:59", "MST", 420],
		["1932-04-01T07:00:00+00:00", "01:00:00", "CST", 360]
	]),

	"1942" : helpers.makeTestYear("America/Mazatlan", [
		["1942-04-24T05:59:59+00:00", "23:59:59", "CST", 360],
		["1942-04-24T06:00:00+00:00", "23:00:00", "MST", 420]
	]),

	"1996" : helpers.makeTestYear("America/Mazatlan", [
		["1996-04-07T08:59:59+00:00", "01:59:59", "MST", 420],
		["1996-04-07T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1996-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1996-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1997" : helpers.makeTestYear("America/Mazatlan", [
		["1997-04-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["1997-04-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1997-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1997-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1998" : helpers.makeTestYear("America/Mazatlan", [
		["1998-04-05T08:59:59+00:00", "01:59:59", "MST", 420],
		["1998-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1998-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1998-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"1999" : helpers.makeTestYear("America/Mazatlan", [
		["1999-04-04T08:59:59+00:00", "01:59:59", "MST", 420],
		["1999-04-04T09:00:00+00:00", "03:00:00", "MDT", 360],
		["1999-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["1999-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2000" : helpers.makeTestYear("America/Mazatlan", [
		["2000-04-02T08:59:59+00:00", "01:59:59", "MST", 420],
		["2000-04-02T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2000-10-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2000-10-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2001" : helpers.makeTestYear("America/Mazatlan", [
		["2001-05-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["2001-05-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2001-09-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2001-09-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2002" : helpers.makeTestYear("America/Mazatlan", [
		["2002-04-07T08:59:59+00:00", "01:59:59", "MST", 420],
		["2002-04-07T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2002-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2002-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2003" : helpers.makeTestYear("America/Mazatlan", [
		["2003-04-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["2003-04-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2003-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2003-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2004" : helpers.makeTestYear("America/Mazatlan", [
		["2004-04-04T08:59:59+00:00", "01:59:59", "MST", 420],
		["2004-04-04T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2004-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2004-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2005" : helpers.makeTestYear("America/Mazatlan", [
		["2005-04-03T08:59:59+00:00", "01:59:59", "MST", 420],
		["2005-04-03T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2005-10-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2005-10-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2006" : helpers.makeTestYear("America/Mazatlan", [
		["2006-04-02T08:59:59+00:00", "01:59:59", "MST", 420],
		["2006-04-02T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2006-10-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2006-10-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2007" : helpers.makeTestYear("America/Mazatlan", [
		["2007-04-01T08:59:59+00:00", "01:59:59", "MST", 420],
		["2007-04-01T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2007-10-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2007-10-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2008" : helpers.makeTestYear("America/Mazatlan", [
		["2008-04-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["2008-04-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2008-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2008-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2009" : helpers.makeTestYear("America/Mazatlan", [
		["2009-04-05T08:59:59+00:00", "01:59:59", "MST", 420],
		["2009-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2009-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2009-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2010" : helpers.makeTestYear("America/Mazatlan", [
		["2010-04-04T08:59:59+00:00", "01:59:59", "MST", 420],
		["2010-04-04T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2010-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2010-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2011" : helpers.makeTestYear("America/Mazatlan", [
		["2011-04-03T08:59:59+00:00", "01:59:59", "MST", 420],
		["2011-04-03T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2011-10-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2011-10-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2012" : helpers.makeTestYear("America/Mazatlan", [
		["2012-04-01T08:59:59+00:00", "01:59:59", "MST", 420],
		["2012-04-01T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2012-10-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2012-10-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2013" : helpers.makeTestYear("America/Mazatlan", [
		["2013-04-07T08:59:59+00:00", "01:59:59", "MST", 420],
		["2013-04-07T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2013-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2013-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2014" : helpers.makeTestYear("America/Mazatlan", [
		["2014-04-06T08:59:59+00:00", "01:59:59", "MST", 420],
		["2014-04-06T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2014-10-26T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2014-10-26T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2015" : helpers.makeTestYear("America/Mazatlan", [
		["2015-04-05T08:59:59+00:00", "01:59:59", "MST", 420],
		["2015-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2015-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2015-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2016" : helpers.makeTestYear("America/Mazatlan", [
		["2016-04-03T08:59:59+00:00", "01:59:59", "MST", 420],
		["2016-04-03T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2016-10-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2016-10-30T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2017" : helpers.makeTestYear("America/Mazatlan", [
		["2017-04-02T08:59:59+00:00", "01:59:59", "MST", 420],
		["2017-04-02T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2017-10-29T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2017-10-29T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2018" : helpers.makeTestYear("America/Mazatlan", [
		["2018-04-01T08:59:59+00:00", "01:59:59", "MST", 420],
		["2018-04-01T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2018-10-28T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2018-10-28T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2019" : helpers.makeTestYear("America/Mazatlan", [
		["2019-04-07T08:59:59+00:00", "01:59:59", "MST", 420],
		["2019-04-07T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2019-10-27T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2019-10-27T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2020" : helpers.makeTestYear("America/Mazatlan", [
		["2020-04-05T08:59:59+00:00", "01:59:59", "MST", 420],
		["2020-04-05T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2020-10-25T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2020-10-25T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2021" : helpers.makeTestYear("America/Mazatlan", [
		["2021-04-04T08:59:59+00:00", "01:59:59", "MST", 420],
		["2021-04-04T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2021-10-31T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2021-10-31T08:00:00+00:00", "01:00:00", "MST", 420]
	]),

	"2022" : helpers.makeTestYear("America/Mazatlan", [
		["2022-04-03T08:59:59+00:00", "01:59:59", "MST", 420],
		["2022-04-03T09:00:00+00:00", "03:00:00", "MDT", 360],
		["2022-10-30T07:59:59+00:00", "01:59:59", "MDT", 360],
		["2022-10-30T08:00:00+00:00", "01:00:00", "MST", 420]
	])
};