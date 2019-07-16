import Middleware from '../middleware'
import Vue from 'vue';

Middleware.auth = function ({ req, app, redirect }) {
  if (!process.server) {
    return
  }

  let currentUser = app.$parse.User.current();

  if(!currentUser) {
    let url = '<%= options.redirectUrl %>';
    return redirect(url);
  }

}