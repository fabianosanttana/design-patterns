/**
 * It takes a request and a chain of functions, and it calls each function in the
 * chain with the request until one of them returns null
 * @param {unknown} r - the request
 * @param {any[]} chain - an array of functions that take a request and return a
 * response or null
 */
export function processRequest(r: unknown, chain: any[]) {
  let lastResult = null;
  let i = 0;
  do {
    lastResult = chain[i](r);
    i++;
  } while (lastResult != null && i < chain.length);

  if (lastResult != null) {
    throw new Error("Error: request could not be fulfilled");
  }
}
