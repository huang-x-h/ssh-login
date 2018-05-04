#! /usr/bin/env node

const program = require('commander');
let cli = require('./index');
let pkg = require('./package.json');


program
  .version(pkg.version)
  .arguments('<name>')
  .action(name => {
    cli.configLogin(name);
  });

program.command('add <name> <hostname>')
  .description('add a ssh-login config')
  .action((name, hostname) => {
    cli.configAdd(name, hostname);
  });

program.command('rm <name>')
  .description('remove a ssh-login config')
  .action(name => {
    cli.configRemove(name);
  });

program.command('ls')
  .description('list all ssh-login config')
  .action(() => {
    const config = cli.configList();
    console.log(config);
  });

program.parse(process.argv);
