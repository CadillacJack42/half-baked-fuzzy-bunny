/* eslint-disable */

// include jsdom for DOM use in tests on travis
const jsdom = require('jsdom');

const { JSDOM } = jsdom;
const { window } = new JSDOM('<!DOCTYPE html><html><head>    <script defer src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js"></script><title>Foo</title></head><body><div></div></body></html>', {
    url: 'http://localhost:5500'
});
global.window = window;
global.document = window.document;
global.FormData = window.FormData;
global.localStorage = window.localStorage;
global.sessionStorage = window.sessionStorage;
global.URLSearchParams = window.URLSearchParams;
global.URL = window.URL;

require = require('esm')(module);
module.exports = require('./tests.js');
