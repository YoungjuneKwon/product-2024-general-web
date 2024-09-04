import packageJson from '../package.json';
const version = packageJson.version;
export { version };

import TokenChecker from './components/TokenChecker.vue';
export { TokenChecker };
export * from './core/context';

import path from 'path-browserify';
export { path };