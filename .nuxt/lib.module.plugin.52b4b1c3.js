export default context => {
    window.Parse = require('parse');

    window.Parse.initialize('', '');

    window.Parse.serverURL = 'https://parseapi.back4app.com/'
}
