import fs from 'fs';

export default (file1, file2) => {
  console.log(JSON.parse(fs.readFileSync(file1)))
  console.log(JSON.parse(fs.readFileSync(file2)))
};
