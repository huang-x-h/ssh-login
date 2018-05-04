const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs-extra');
const debug = require('debug')('ssh-login');
const configPath = path.join(__dirname, './config.json');

fs.ensureFileSync(configPath);
const config = fs.readJsonSync(configPath);

function configLogin(name) {
  const hostname = config[name];
  debug(`configLogin ${name} ${hostname}`);

  if (hostname) {
    try {
      execSync(`ssh ${hostname}`, { stdio: 'inherit' });
    } catch (error) {
    }
  } else {
    console.log(`${name} isn't exists, please add config first.`);
  }
}

function configAdd(name, hostname) {
  debug(`configAdd ${name} ${hostname}`);
  if (name in config) {
    console.log(`${name} is exists, please use another name.`)
  } else {
    debug(`ssh-copy-id ${hostname}`);
    execSync(`ssh-copy-id ${hostname}`, { stdio: 'inherit' });
    debug(`ssh-copy-id ${hostname} success`);
    config[name] = hostname;
    fs.writeJsonSync(configPath, config);
  }
}

function configRemove(name) {
  debug(`configRemove ${name}`);
  delete config[name];
  fs.writeJsonSync(configPath, config);
  debug('configRemove success');
}

function configList() {
  return config;
}

module.exports = {
  configAdd,
  configRemove,
  configLogin,
  configList
}
