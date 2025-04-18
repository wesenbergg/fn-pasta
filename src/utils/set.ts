/**
 * Sets the value at path of object. If a portion of path doesn't exist, it's created.
 * 
 * @param object The object to modify
 * @param path The path of the property to set
 * @param value The value to set
 * @returns The modified object
 */
export function set<T extends object, V>(
  object: T,
  path: string | string[],
  value: V
): T {
  if (!object || typeof object !== 'object') {
    return object;
  }

  const keys = Array.isArray(path) ? path : path.toString().match(/[^.[\]]+/g) || [];
  const result = { ...object };
  let nested: any = result;

  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    
    // If the next value doesn't exist or isn't an object, create it
    if (nested[key] === undefined || typeof nested[key] !== 'object') {
      // Check if the next key is numeric to determine if we should create an array or object
      const nextKey = keys[i + 1];
      nested[key] = /^\d+$/.test(nextKey) ? [] : {};
    }
    
    nested = nested[key];
  }

  const lastKey = keys[keys.length - 1];
  if (lastKey !== undefined) {
    nested[lastKey] = value;
  }

  return result;
} 