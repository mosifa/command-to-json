/**
 * Every parser class should be implemented from the base interface.
 */
export interface Base {
  parse: (input: string) => Array<Record<string, any>> | Record<string, any>;
}
