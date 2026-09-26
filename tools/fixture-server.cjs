// Localhost-only fixture server for portfolio screenshots.
// Serves synthetic DOM matching each userscript's mount contract.
// Never touches instagram.com / threads.net / web.telegram.org.
'use strict';
const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const WS = 'C:/Users/BlankScreen/Workspace';
const root = path.join(__dirname, 'fixtures');

const MIME = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8' };

// Port is a constant because the screenshot workflow hard-codes the URL in its runbook.
// ponytail: if a stale listener holds the port after a crash, bump this number.
const PORT = 8801;

http.createServer((req, res) => {
  const url = new URL(req.url, 'http://127.0.0.1');
  // Userscripts are served from the real project dirs so we screenshot the shipped file.
  const USERSCRIPTS = {
    '/js/ig-maxpland.user.js': 'C:/Users/BlankScreen/Workspace/ig-maxpland/dist/ig_maxpland_en.user.js',
    '/js/telefilter.user.js': 'C:/Users/BlankScreen/Workspace/telefilter-desktop/telefilter_desktop.user.js',
    '/js/threadmax.user.js': 'C:/Users/BlankScreen/Workspace/threadmax/threadmax.user.js',
  };
  if (USERSCRIPTS[url.pathname]) {
    res.writeHead(200, { 'content-type': 'text/javascript; charset=utf-8', 'cache-control': 'no-store' });
    return fs.createReadStream(USERSCRIPTS[url.pathname]).pipe(res);
  }
  // /k/ is required by telefilter's location.pathname guard.
  let file = path.join(root, url.pathname.replace(/^\/+/, ''));
  if (url.pathname === '/' || url.pathname === '/k/' || url.pathname === '/k/index.html') file = path.join(root, 'telegram.html');
  if (url.pathname === '/maxpland') file = path.join(root, 'maxpland.html');
  if (!fs.existsSync(file) && fs.existsSync(file + '.html')) file += '.html';
  if (!file.startsWith(root) || !fs.existsSync(file) || !fs.statSync(file).isFile()) {
    res.writeHead(404, { 'content-type': 'text/plain' });
    return res.end('no fixture at ' + url.pathname);
  }
  res.writeHead(200, { 'content-type': MIME[path.extname(file)] || 'application/octet-stream', 'cache-control': 'no-store' });
  fs.createReadStream(file).pipe(res);
}).listen(PORT, '127.0.0.1', () => console.log('fixtures on http://127.0.0.1:' + PORT));
