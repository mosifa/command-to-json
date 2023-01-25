import fs from 'fs/promises';
import { ifConfig } from '../src';

describe('if-config', () => {
  let input: string; 
  beforeAll(async () => {
    input = await fs.readFile(__dirname + '/inputs/if-config', 'utf-8');
  });

  it('should parse the given output of "if-config"', () => {
    const result = ifConfig.parse(input);
    expect(result).toHaveLength(1);
    expect(result[0].name).toBeDefined();
    expect(result[0].flags).toBeDefined();
  });
});
