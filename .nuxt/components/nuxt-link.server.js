import Vue from 'vue'

// @vue/component
export default {
  name: 'NuxtLink',
  extends: Vue.component('RouterLink'),
  props: {
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
}
