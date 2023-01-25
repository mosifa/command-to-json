import os from 'os';
import { Base } from '../../interfaces';
import { NetInterfaceBlock } from '../../types';

/**
 * Responsible for parsing result of "if-config" command.
 */
class IFConfigParser implements Base {
  /**
   * These are the almost all properties from "if-config" result,
   * anything other than these properties will not be parsed.
   */
  private readonly properties: string[] = [
    'allmulti',
    'auto',
    'broadcast',
    'dynamic',
    'ether',
    'fwddelay',
    'hellotime',
    'holdcnt',
    'inet',
    'inet6',
    'ifmaxaddr',
    'ipfilter',
    'keepalive',
    'maxaddr',
    'maxage',
    'media',
    'metric',
    'multicast',
    'nd6',
    'netmask',
    'options',
    'prefixlen',
    'priority',
    'proto',
    'port',
    'scopeid',
    'timeout',
    'trailers',
    'txqueuelen',
    'promisc',
  ];

  private readonly decimalFlagsRegex = /(\d+)(?=\<)/;
  private readonly statusFlagsRegex = /(?<=[<|,])([A-Z]+)/g;
  private readonly mtuRegex =  /(?<=\s+)\d+/g;

  /**
   * Parses given result of "if-config" command.
   */
  parse(input: string) {
    const blocks: Array<string[]> = this.extractBlocks(input).filter(block => block.length);
    const parsed: Array<any> = blocks.map((block: string[]) => {
      const netInterface = this.extractInterface(block[0]);
      block.shift();
      for (const row of block) {
        const netParameters = row.split(' ').filter(p => p);
        for (let i = 0; i < netParameters.length; i += 2) {
          if (this.properties.includes(netParameters[i])) {
            netInterface[netParameters[i]] = netParameters[i + 1];
          }
        }
      }
      return netInterface;
    })
    return parsed;
  }

  /**
   * Extracts interface of a single block from the given "if-config" result.
   */
  private extractInterface(row: string) {
    const [name, rest] = row.split(':');
    const [decimal] = rest.match(this.decimalFlagsRegex) as Array<string>;
    const statuses = rest.match(this.statusFlagsRegex) as Array<string>;
    const [mtu] = rest.match(this.mtuRegex) as Array<string>;

    const netInterface: NetInterfaceBlock = {
      name,
      flags: [decimal, ...statuses],
      mtu,
    };

    return netInterface;
  }

  /**
   * Extracts each block from the given "if-config" result.
   */
  private extractBlocks(raw: string): Array<string[]> {
    const rows: string[] = raw.split(os.EOL);
    const blocks: Array<string[]> = [[]];
    let blockIndex = 0;

    for (const row of rows) {
      if (!row) {
        ++blockIndex;
        blocks.push([]);
        continue;
      }
      blocks[blockIndex].push(row);
    }

    return blocks;
  }
}

export const ifConfig = new IFConfigParser();
