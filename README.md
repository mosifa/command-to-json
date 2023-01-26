# command-to-json

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/ca8c18cbe64e4811b602754cc0b44edd)](https://www.codacy.com/gh/mosifa/command-to-json/dashboard?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mosifa/command-to-json&amp;utm_campaign=Badge_Grade)
[![npm version](https://badge.fury.io/js/command-to-json.svg)](https://badge.fury.io/js/command-to-json)

Parses any commands and converts them to JSON.

## Table of Contents

- [command-to-json](#command-to-json)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Supported commands](#supported-commands)
  - [Release notes](#release-notes)

## Installation

```sh
npm install command-to-json --save
```

## Usage

```ts
import { ifConfig } from 'command-to-json';

const output = `
docker0: flags=4099<UP,BROADCAST,MULTICAST>  mtu 1500
    inet 172.0.0.1  netmask 255.255.0.0  broadcast 172.0.0.255
    ether 01:01:01:01:01:01  txqueuelen 0  (Ethernet)
`;

const result = ifConfig.parse(output);
/**
 * result:
 [
    {
      name: 'docker0',
      flags: [ '4099', 'UP', 'BROADCAST', 'MULTICAST' ],
      mtu: '1500',
      inet: '172.0.0.1',
      netmask: '255.255.0.0',
      broadcast: '172.0.0.255',
      ether: '01:01:01:01:01:01',
      txqueuelen: '0'
    }
  ]
 */

```

## Supported commands
[if-config](https://en.wikipedia.org/wiki/Ifconfig)

## Release notes

See information about breaking changes and release notes [here][1].

[1]: CHANGELOG.md