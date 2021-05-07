---
layout: r-d_child
title: btclib
header: btclib
subdesc: Lorem ipsum dolores btclib Management Lorem ipsum dolor sit amet, consectetur adipiscing elit.  
subtitle: Lorem ipsum dolores btclib
description: Lorem ipsum dolores btclib Management Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mattis malesuada pellentesque. Phasellus turpis enim, dignissim non mollis vel, dictum ut augue. Phasellus commodo luctus elit non porta. Mauris eleifend libero sollicitudin velit lobortis, quis tristique nibh fringilla. Pellentesque eu metus euismod, hendrerit neque sed, pellentesque felis. Nam eget mi et neque congue porttitor. Nunc tincidunt metus nec tortor cursus, id faucibus nisi commodo. Integer condimentum diam odio, in fringilla risus dapibus vitae. Nulla nec odio sit amet risus ullamcorper lobortis. Suspendisse ut nisi a arcu ultrices efficitur. Integer odio eros, consectetur sit amet dui ut, pulvinar tristique velit.
sub-image: /assets/img/r-d/img_crypto.jpg
img: /assets/img/r-d/ico_off.svg
slider: /assets/img/r-d/header_child.jpg
uid: btclib
permalink: /r-d/btclib/
locale: en
page-category: r-d
sort_ranking: 1000
---

[Btclib](https://btclib.org/) is an open-source Python3 library intended for empowering the usage and distribution of bitcoin, its blockchain, and the associated elliptic curve cryptography.

Rigorously and extensively tested, btclib is often refactored for improved clarity. Therefore, it is not intended for production environments but for learning purposes only.

Included features are:

* modulo algebra functions (gcd, inverse, legendre symbol, square root)
* octets / integer / point / var_int / var_bytes helper functions
* elliptic curve class
* fast algebra implemented using Jacobian coordinates
* double scalar multiplication (Straus’s algorithm, also known as Shamir’s trick)
* multi scalar multiplication (Bos-coster’s algorithm)
* point simmetry solution: odd/even, low/high, and quadratic residue
* elliptic curves: SEC 1 v1 and v2, NIST, Brainpool, and low cardinality test curves
* ECDSA signature with (transaction) DER encoding
* ECDSA signature with (message) compact encoding: standard p2pkh and BIP137/Electrum extensions to p2wpkh and p2wpkh-p2sh
* EC Schnorr signature (according to BIP340 bitcoin standardization)
* batch validation
* threshold signature (see test-suite)
* MuSig multi-signature (see test-suite)
* Borromean ring signature
* RFC 6979 to make signature schemes deterministic
* Sign-to-contract commitment
* Diffie-Hellman
* Pedersen committment
* Base58 encoding/decoding
* p2pkh/p2sh addresses and WIFs
* Bech32 encoding/decoding
* p2wpkh/p2wsh native SegWit addresses and their legacy p2sh-wrapped versions
* BIP32 hierarchical deterministic key chains
* SLIP132 key versions (xprv, yprv, zprv, Yprv, Zprv, tprv, uprv, vprv, and Uprv) with corresponding mapping to p2pkh/p2sh, p2wpkh-p2sh, p2wpkh p2wsh-p2sh, and p2wsh addresses
* BIP39 wordlists and mnemonic for generating deterministic keys
* Electrum standard for mnemonic
* Script encoding/decoding
* nulldata, p2pk, p2ms, p2pkh, p2sh, p2wpkh, and p2wsh ScriptPubKeys
* BlockHeader and Block data classes
* OutPoint, TxIn, TxOut, and TX data classes
* legacy and segwit_v0 transaction hash signatures
* BIP174 partially signed bitcoin transactions (PSBT): PsbtIn, PbstOut, and Psbt data classes
