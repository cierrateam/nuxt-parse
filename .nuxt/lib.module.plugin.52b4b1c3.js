import Vue from 'vue'

export default context => {
    let Parse = require('parse');

    Parse.initialize('', '');

    Parse.serverURL = 'https://parseapi.back4app.com/'

    Vue.prototype.$parse = Parse;
}
