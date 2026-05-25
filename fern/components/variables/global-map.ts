import * as globals from './global';

const globalMap: Record<string, string> = {};

for (const [key, value] of Object.entries(globals)) {
  if (typeof value === 'string') {
    globalMap[key] = value;
  }
  // Skip functions like CLIENT
}

export default globalMap;