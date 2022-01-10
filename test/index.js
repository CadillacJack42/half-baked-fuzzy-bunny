/* eslint-disable */

// include jsdom for DOM use in tests on travis
const jsdom = require('jsdom');
import { SUPABASE_KEY, SUPABASE_URL } from '../fetch-utils.js'
// const  = require('../fetch-utils.js');
const { JSDOM } = jsdom;
const { window } = new JSDOM(``, {
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

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);