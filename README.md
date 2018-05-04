# ssh-login
> A tool for ssh login

Q: How to automate ssh with password

A: SSH key ([Detail](https://serverfault.com/questions/241588/how-to-automate-ssh-login-with-password))

## Install

```
$ npm i -g ssh-login
$ ssh-login -h
```

## Usage

- `ssh-login add <name> <hostname>`

  Add a ssh-login config line

  eg: `ssh-login add myserver root@myserver.ip`

- `ssh-login ls`

  List all ssl-login config lines

  eg: `ssh-login ls`

- `ssh-login <name>`

  Login the key `name`

  eg: `ssh-login myserver`

- `ssh-login rm <name>`

  Remove the ssh-login config line matching the key `name`

  eg: `ssh-login rm myserver`

## License

[MIT](LICENSE) © [huang.xinghui](http://huang-x-h.github.io)
