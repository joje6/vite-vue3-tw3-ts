import { createApp } from 'vue';
import App from '@/App.vue';
import './registerServiceWorker';
import './css/index.css';
import stream from 'stream';
import os from 'os';
import url from 'url';
import process from 'process';
import buffer from 'buffer';
import querystring from 'querystring';

console.log('stream', stream);
console.log('os', os);
console.log('url', url);
console.log('process', process);
console.log('buffer', buffer);
console.log('querystring', querystring);

createApp(App).mount('#app');
