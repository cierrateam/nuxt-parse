import Vue from 'vue'

export default (context, inject) => {

    let Parse = require('parse');

    Parse.initialize('<%= options.appId %>', '<%= options.javascriptKey %>');

    Parse.serverURL = '<%= options.serverUrl %>'

    Vue.prototype.$parse = Parse;
    inject('parse', Parse);

    const nuxtify = function (classNames) {
        if (!Array.isArray(classNames))
            throw new Error("Please specify all the classes you wish to nuxtify!");

        for (const className of classNames) {
            Parse.Object.registerSubclass(className, createNuxtifiedClass(className));
        }
    };

    const createNuxtifiedClass = (className) => {
        // thanks to dblythy https://community.parseplatform.org/t/parsejs-and-vuejs/1411/10?u=max
        return class ParseNuxtObject extends Parse.Object {
            constructor() {
                // constructor className is only available on master
                super(className);
                this._className = className;
                this.loadData();
            }

            get className() {
                return this._className;
            }

            loadData() {
                const internal = ['id', 'className', 'createdAt', 'updatedAt', 'ACL'];
                const data = this.attributes;
                for (const key in data) {
                    if (internal.includes(key)) {
                        continue;
                    }
                    this[key] = data[key];
                }
            }

            async save() {
                const internal = ['id', 'className', 'createdAt', 'updatedAt', 'ACL'];
                for (const key in this) {
                    if (internal.includes(key)) {
                        continue;
                    }
                    if (JSON.stringify(this[key]) !== JSON.stringify(this.get(key))) {
                        this.set(key, this[key]);
                    }
                }
                await super.save();
            }

            _finishFetch(serverData) {
                super._finishFetch(serverData);
                this.loadData();
            }
        }
    }

    Vue.prototype.$parseNuxtify = nuxtify;
    inject('parseNuxtify', nuxtify);
}



