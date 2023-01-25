# command-to-json

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