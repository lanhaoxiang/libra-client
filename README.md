# libra-client

[![npm version](https://badge.fury.io/js/libra-client.svg)](https://badge.fury.io/js/libra-client)

A (Under development) javascript client to interact with libra blockchain

## Install

```js
npm install libra-client --save
```

## Usage

```js
import Libra from 'libra-client'
let client = Libra.instance({
    keyProvider:'your key',// or signatureProvider: Libra.signatureProvider()
    entryPoint:'ac.testnet.libra.org'
})
```

## APIs

> All apis are on the way

-[] Account
-[] Query
-[] Transfer
