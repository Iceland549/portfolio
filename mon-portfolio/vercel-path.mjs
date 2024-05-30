import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const mainFolderPath = path.resolve(__dirname);

console.log(mainFolderPath);