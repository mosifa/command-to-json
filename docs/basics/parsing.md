# Parsing commands

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
