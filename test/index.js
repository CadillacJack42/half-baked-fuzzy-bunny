/* eslint-disable */

// include jsdom for DOM use in tests on travis
const jsdom = require('jsdom');
// import { SUPABASE_KEY, SUPABASE_URL } from '../fetch-utils.js'
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

export const SUPABASE_URL = 'https://gxwgjhfyrlwiqakdeamc.supabase.co';
export const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYzNjQxMTMxMiwiZXhwIjoxOTUxOTg3MzEyfQ.PHekiwfLxT73qQsLklp0QFEfNx9NlmkssJFDnlvNIcA';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);