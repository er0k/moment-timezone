"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Chita"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Chita", { offset: true, expect: "Asia/Tokyo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Chita", { abbr: true, expect: "Asia/Tokyo" }),

	"1919" : helpers.makeTestYear("Asia/Chita", [
		["1919-12-14T16:26:08+00:00", "00:26:08", "+08", -480]
	]),

	"1930" : helpers.makeTestYear("Asia/Chita", [
		["1930-06-20T15:59:59+00:00", "23:59:59", "+08", -480],
		["1930-06-20T16:00:00+00:00", "01:00:00", "+09", -540]
	]),

	"1981" : helpers.makeTestYear("Asia/Chita", [
		["1981-03-31T14:59:59+00:00", "23:59:59", "+09", -540],
		["1981-03-31T15:00:00+00:00", "01:00:00", "+10", -600],
		["1981-09-30T13:59:59+00:00", "23:59:59", "+10", -600],
		["1981-09-30T14:00:00+00:00", "23:00:00", "+09", -540]
	]),

	"1982" : helpers.makeTestYear("Asia/Chita", [
		["1982-03-31T14:59:59+00:00", "23:59:59", "+09", -540],
		["1982-03-31T15:00:00+00:00", "01:00:00", "+10", -600],
		["1982-09-30T13:59:59+00:00", "23:59:59", "+10", -600],
		["1982-09-30T14:00:00+00:00", "23:00:00", "+09", -540]
	]),

	"1983" : helpers.makeTestYear("Asia/Chita", [
		["1983-03-31T14:59:59+00:00", "23:59:59", "+09", -540],
		["1983-03-31T15:00:00+00:00", "01:00:00", "+10", -600],
		["1983-09-30T13:59:59+00:00", "23:59:59", "+10", -600],
		["1983-09-30T14:00:00+00:00", "23:00:00", "+09", -540]
	]),

	"1984" : helpers.makeTestYear("Asia/Chita", [
		["1984-03-31T14:59:59+00:00", "23:59:59", "+09", -540],
		["1984-03-31T15:00:00+00:00", "01:00:00", "+10", -600],
		["1984-09-29T16:59:59+00:00", "02:59:59", "+10", -600],
		["1984-09-29T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1985" : helpers.makeTestYear("Asia/Chita", [
		["1985-03-30T16:59:59+00:00", "01:59:59", "+09", -540],
		["1985-03-30T17:00:00+00:00", "03:00:00", "+10", -600],
		["1985-09-28T16:59:59+00:00", "02:59:59", "+10", -600],
		["1985-09-28T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1986" : helpers.makeTestYear("Asia/Chita", [
		["1986-03-29T16:59:59+00:00", "01:59:59", "+09", -540],
		["1986-03-29T17:00:00+00:00", "03:00:00", "+10", -600],
		["1986-09-27T16:59:59+00:00", "02:59:59", "+10", -600],
		["1986-09-27T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1987" : helpers.makeTestYear("Asia/Chita", [
		["1987-03-28T16:59:59+00:00", "01:59:59", "+09", -540],
		["1987-03-28T17:00:00+00:00", "03:00:00", "+10", -600],
		["1987-09-26T16:59:59+00:00", "02:59:59", "+10", -600],
		["1987-09-26T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1988" : helpers.makeTestYear("Asia/Chita", [
		["1988-03-26T16:59:59+00:00", "01:59:59", "+09", -540],
		["1988-03-26T17:00:00+00:00", "03:00:00", "+10", -600],
		["1988-09-24T16:59:59+00:00", "02:59:59", "+10", -600],
		["1988-09-24T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1989" : helpers.makeTestYear("Asia/Chita", [
		["1989-03-25T16:59:59+00:00", "01:59:59", "+09", -540],
		["1989-03-25T17:00:00+00:00", "03:00:00", "+10", -600],
		["1989-09-23T16:59:59+00:00", "02:59:59", "+10", -600],
		["1989-09-23T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1990" : helpers.makeTestYear("Asia/Chita", [
		["1990-03-24T16:59:59+00:00", "01:59:59", "+09", -540],
		["1990-03-24T17:00:00+00:00", "03:00:00", "+10", -600],
		["1990-09-29T16:59:59+00:00", "02:59:59", "+10", -600],
		["1990-09-29T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1991" : helpers.makeTestYear("Asia/Chita", [
		["1991-03-30T16:59:59+00:00", "01:59:59", "+09", -540],
		["1991-03-30T17:00:00+00:00", "02:00:00", "+09", -540],
		["1991-09-28T17:59:59+00:00", "02:59:59", "+09", -540],
		["1991-09-28T18:00:00+00:00", "02:00:00", "+08", -480]
	]),

	"1992" : helpers.makeTestYear("Asia/Chita", [
		["1992-01-18T17:59:59+00:00", "01:59:59", "+08", -480],
		["1992-01-18T18:00:00+00:00", "03:00:00", "+09", -540],
		["1992-03-28T16:59:59+00:00", "01:59:59", "+09", -540],
		["1992-03-28T17:00:00+00:00", "03:00:00", "+10", -600],
		["1992-09-26T16:59:59+00:00", "02:59:59", "+10", -600],
		["1992-09-26T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1993" : helpers.makeTestYear("Asia/Chita", [
		["1993-03-27T16:59:59+00:00", "01:59:59", "+09", -540],
		["1993-03-27T17:00:00+00:00", "03:00:00", "+10", -600],
		["1993-09-25T16:59:59+00:00", "02:59:59", "+10", -600],
		["1993-09-25T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1994" : helpers.makeTestYear("Asia/Chita", [
		["1994-03-26T16:59:59+00:00", "01:59:59", "+09", -540],
		["1994-03-26T17:00:00+00:00", "03:00:00", "+10", -600],
		["1994-09-24T16:59:59+00:00", "02:59:59", "+10", -600],
		["1994-09-24T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1995" : helpers.makeTestYear("Asia/Chita", [
		["1995-03-25T16:59:59+00:00", "01:59:59", "+09", -540],
		["1995-03-25T17:00:00+00:00", "03:00:00", "+10", -600],
		["1995-09-23T16:59:59+00:00", "02:59:59", "+10", -600],
		["1995-09-23T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1996" : helpers.makeTestYear("Asia/Chita", [
		["1996-03-30T16:59:59+00:00", "01:59:59", "+09", -540],
		["1996-03-30T17:00:00+00:00", "03:00:00", "+10", -600],
		["1996-10-26T16:59:59+00:00", "02:59:59", "+10", -600],
		["1996-10-26T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1997" : helpers.makeTestYear("Asia/Chita", [
		["1997-03-29T16:59:59+00:00", "01:59:59", "+09", -540],
		["1997-03-29T17:00:00+00:00", "03:00:00", "+10", -600],
		["1997-10-25T16:59:59+00:00", "02:59:59", "+10", -600],
		["1997-10-25T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1998" : helpers.makeTestYear("Asia/Chita", [
		["1998-03-28T16:59:59+00:00", "01:59:59", "+09", -540],
		["1998-03-28T17:00:00+00:00", "03:00:00", "+10", -600],
		["1998-10-24T16:59:59+00:00", "02:59:59", "+10", -600],
		["1998-10-24T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"1999" : helpers.makeTestYear("Asia/Chita", [
		["1999-03-27T16:59:59+00:00", "01:59:59", "+09", -540],
		["1999-03-27T17:00:00+00:00", "03:00:00", "+10", -600],
		["1999-10-30T16:59:59+00:00", "02:59:59", "+10", -600],
		["1999-10-30T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"2000" : helpers.makeTestYear("Asia/Chita", [
		["2000-03-25T16:59:59+00:00", "01:59:59", "+09", -540],
		["2000-03-25T17:00:00+00:00", "03:00:00", "+10", -600],
		["2000-10-28T16:59:59+00:00", "02:59:59", "+10", -600],
		["2000-10-28T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"2001" : helpers.makeTestYear("Asia/Chita", [
		["2001-03-24T16:59:59+00:00", "01:59:59", "+09", -540],
		["2001-03-24T17:00:00+00:00", "03:00:00", "+10", -600],
		["2001-10-27T16:59:59+00:00", "02:59:59", "+10", -600],
		["2001-10-27T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"2002" : helpers.makeTestYear("Asia/Chita", [
		["2002-03-30T16:59:59+00:00", "01:59:59", "+09", -540],
		["2002-03-30T17:00:00+00:00", "03:00:00", "+10", -600],
		["2002-10-26T16:59:59+00:00", "02:59:59", "+10", -600],
		["2002-10-26T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"2003" : helpers.makeTestYear("Asia/Chita", [
		["2003-03-29T16:59:59+00:00", "01:59:59", "+09", -540],
		["2003-03-29T17:00:00+00:00", "03:00:00", "+10", -600],
		["2003-10-25T16:59:59+00:00", "02:59:59", "+10", -600],
		["2003-10-25T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"2004" : helpers.makeTestYear("Asia/Chita", [
		["2004-03-27T16:59:59+00:00", "01:59:59", "+09", -540],
		["2004-03-27T17:00:00+00:00", "03:00:00", "+10", -600],
		["2004-10-30T16:59:59+00:00", "02:59:59", "+10", -600],
		["2004-10-30T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"2005" : helpers.makeTestYear("Asia/Chita", [
		["2005-03-26T16:59:59+00:00", "01:59:59", "+09", -540],
		["2005-03-26T17:00:00+00:00", "03:00:00", "+10", -600],
		["2005-10-29T16:59:59+00:00", "02:59:59", "+10", -600],
		["2005-10-29T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"2006" : helpers.makeTestYear("Asia/Chita", [
		["2006-03-25T16:59:59+00:00", "01:59:59", "+09", -540],
		["2006-03-25T17:00:00+00:00", "03:00:00", "+10", -600],
		["2006-10-28T16:59:59+00:00", "02:59:59", "+10", -600],
		["2006-10-28T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"2007" : helpers.makeTestYear("Asia/Chita", [
		["2007-03-24T16:59:59+00:00", "01:59:59", "+09", -540],
		["2007-03-24T17:00:00+00:00", "03:00:00", "+10", -600],
		["2007-10-27T16:59:59+00:00", "02:59:59", "+10", -600],
		["2007-10-27T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"2008" : helpers.makeTestYear("Asia/Chita", [
		["2008-03-29T16:59:59+00:00", "01:59:59", "+09", -540],
		["2008-03-29T17:00:00+00:00", "03:00:00", "+10", -600],
		["2008-10-25T16:59:59+00:00", "02:59:59", "+10", -600],
		["2008-10-25T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"2009" : helpers.makeTestYear("Asia/Chita", [
		["2009-03-28T16:59:59+00:00", "01:59:59", "+09", -540],
		["2009-03-28T17:00:00+00:00", "03:00:00", "+10", -600],
		["2009-10-24T16:59:59+00:00", "02:59:59", "+10", -600],
		["2009-10-24T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"2010" : helpers.makeTestYear("Asia/Chita", [
		["2010-03-27T16:59:59+00:00", "01:59:59", "+09", -540],
		["2010-03-27T17:00:00+00:00", "03:00:00", "+10", -600],
		["2010-10-30T16:59:59+00:00", "02:59:59", "+10", -600],
		["2010-10-30T17:00:00+00:00", "02:00:00", "+09", -540]
	]),

	"2011" : helpers.makeTestYear("Asia/Chita", [
		["2011-03-26T16:59:59+00:00", "01:59:59", "+09", -540],
		["2011-03-26T17:00:00+00:00", "03:00:00", "+10", -600]
	]),

	"2014" : helpers.makeTestYear("Asia/Chita", [
		["2014-10-25T15:59:59+00:00", "01:59:59", "+10", -600],
		["2014-10-25T16:00:00+00:00", "00:00:00", "+08", -480]
	]),

	"2016" : helpers.makeTestYear("Asia/Chita", [
		["2016-03-26T17:59:59+00:00", "01:59:59", "+08", -480]
	])
};