---
layout: post-institute
title: "Btclib"
subtitle: "New Release"
date: 2020-04-06 17:30:42 +0100
author: "Ferdinando M. Ametrano"
img-list: /assets/img/institute_insights/2019-06-12-btclib-tentative-logo-thumb.jpg
img-detail: /assets/img/institute_insights/2019-06-12-btclib-tentative-logo.jpg
parent-category: institute-insights
categories: news
locale: it
uid: 20200406-institute-news
published: true
comments: false
---
[btclib](https://github.com/dginst/btclib)
is a python3 type annotated library intended for teaching and
demonstration of the elliptic curve cryptography used in Bitcoin,
originally developed for the
[_Bitcoin and Blockchain Technology_](https://www.ametrano.net/bbt/) course
at University of Milano-Bicocca.

The major focus of this new
[v2020.4.7 release](https://github.com/btclib-org/btclib/releases/tag/v2020.4.7)
is the Schnorr implementation to BIP340 proposed standard.

Most notably, the library is now able to accept any representation of private keys as input,
with all the WIF/BIP32/bytes/integer conversion auto-magically being taken care of.
The same apply to public key BIP32/SEC-bytes/tuple conversion.
As usual, whenever bytes are accepted, hex-string or text string are accepted too, as appropriate.

Hopefully this will help introducing new users and devs to the library and existing users/devs to deal with any refactoring.

The library adopts the
[MIT licence](https://github.com/dginst/btclib/blob/master/LICENSE):
as such it can be used with no real constraints.
We encourage students, researchers, and devs
to test it and contribute to its development.
