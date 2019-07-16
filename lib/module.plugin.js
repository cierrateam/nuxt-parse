export default context => {
    window.Parse = require('parse');

    window.Parse.initialize('<%= options.appId %>', '<%= options.javascriptKey %>');

    window.Parse.serverURL = '<%= options.serverUrl %>'
}
