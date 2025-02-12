import fs from 'fs';
import path from 'path';

export const readFile = (filePath) => {
  const file = fs.readFileSync(path.join(__dirname, filePath), 'utf-8');
}