/**
 * Import store modules dynamically.
 */
const files = require.context(".", false, /\.js$/);
const store = {};

files.keys().forEach(key => {
  if (!["./index.js", "./store.js"].includes(key)) {
    store[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
  }
});

export default store;
