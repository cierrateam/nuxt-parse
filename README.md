# nuxt-parse
[![CircleCI](https://circleci.com/gh/cierrateam/nuxt-parse/tree/master.svg?style=svg)](https://circleci.com/gh/cierrateam/nuxt-parse/tree/master)
[![Cierra](https://img.shields.io/badge/Cierra-Open%20Source-orange.svg)]
A parse module for Nuxt.js.

## Installation

```bash
$ yarn add nuxt-parse # or npm install
```

Implement the module in `nuxt.config.js`:
```
...
modules: [
    ['nuxt-parse', { 
            appID: YOUR_APP_ID, 
            javascriptKey: YOUR_JAVASCRIPT_KEY, 
            serverUrl: OPTIONAL_SERVER_URL
        }
    ]
  ],
...
```

You don't have to provide the server url if you're using the back4app service.

## Usage

To access the parse instance you can use anyware you want `this.$parse` for example to logIn you can use:
```
this.$parse.User.logIn('username', 'password')
```

## Middleware

To add the middleware to the client you can create a file `middleware/auth.js` with the following content:
```
import Parse from 'parse';
export default function ({redirect}) {
    // If the user is not authenticated
    let currentUser = Parse.User.current();
    if(!currentUser) 
        return redirect('/register');
  }
```

Than you're able to use the `middleware: 'auth'` option in your pages.

## Development

```bash
$ git clone https://github.com/Vittorio Emmermann/nuxt-parse.git
$ cd nuxt-parse
$ yarn
```

## License

MIT

