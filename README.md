# Parse package for Nuxt.js
[![CircleCI](https://circleci.com/gh/cierrateam/nuxt-parse/tree/master.svg?style=svg)](https://circleci.com/gh/cierrateam/nuxt-parse/tree/master)
![Cierra](https://img.shields.io/badge/Cierra-Open%20Source-orange.svg)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/GeneaLabs/nova-map-marker-field/master/LICENSE)
![npm](https://img.shields.io/npm/dw/nuxt-parse)
![GitHub last commit (branch)](https://img.shields.io/github/last-commit/cierrateam/nuxt-parse/master)

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
            appId: YOUR_APP_ID,
            javascriptKey: YOUR_JAVASCRIPT_KEY,
            serverUrl: OPTIONAL_SERVER_URL
        }
    ]
  ],
...
```

You don't have to provide the serverUrl if you're using the back4app service.

## Usage

To access the parse instance you can use `this.$parse` anywhere you want to. For example to login you can use:
```
this.$parse.User.logIn('username', 'password')
```

## Middleware

To add the middleware to the client you can create a file called `middleware/auth.js` with the following content:
```
import Parse from 'parse';
export default function ({redirect}) {
    // If the user is not authenticated
    let currentUser = Parse.User.current();
    if(!currentUser)
        return redirect('/register');
  }
```

Then you're able to use the `middleware: 'auth'` option in your pages.

## Make Parse Objects compatible/reactive with Nuxt (Nuxtify)
By default the objects returned by this package have to be used like this:
`user.get("username")`. Therefore they cannot be used in `v-model` Tags. 


The Solution to this is to add this call at the creation of the app (for example in `layouts/default.vue`):
 
```
export default {
  mounted() {
    this.$nuxt.$parseNuxtify(["User", "YourClass1"])
  }
}
```

In your Template you can now use:
```
<template>
    <div>
        <div v-if="user">
            <input type="text" v-model="user.username">
            <button @click="user.save()">Save!</button>
        </div>
    </div>
<template>
<script>
    data(){
        return {
            user: null;
        }
    },
    async mounted(){
        const query = new Parse.Query("User");
        this.user = await query.get("xWMyZ4YEGZ");
    }
</script>
```

## Contributing
Please observe and respect all aspects of the included Code of Conduct <https://github.com/cierrateam/nuxt-parse/blob/master/CODE_OF_CONDUCT.md>.

### Submitting Pull Requests
Please review the Contribution Guidelines <https://github.com/cierrateam/nuxt-parse/blob/master/CONTRIBUTING.md>. Only PRs that meet all criterium will be accepted.
