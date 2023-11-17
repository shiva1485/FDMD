// rootDir.js
const path = require('path');

const __filename = require('url').fileURLToPath(import.meta.url);
const rootDir = path.resolve(path.dirname(__filename), '..');

module.exports = { rootDir };
