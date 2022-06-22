import { program } from 'commander';
import genDiff from './genDiff.js';

export default () => {
  program
    .description('Compares two configuration files and shows a difference.')
    .version('1.0.0')
    .option('-f, --format <type>', 'output format')
    .argument('<filepath1>', 'File 1')
    .argument('<filepath2>', 'File 2')
    .action(genDiff)
    .parse();
};
