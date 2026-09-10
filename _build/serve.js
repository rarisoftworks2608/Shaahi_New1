const http = require('http'), fs = require('fs'), path = require('path'), url = require('url');
const ROOT = path.resolve(__dirname, '..');
const MIME = { '.html':'text/html;charset=utf-8', '.css':'text/css;charset=utf-8', '.js':'text/javascript;charset=utf-8', '.webp':'image/webp', '.png':'image/png', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.svg':'image/svg+xml', '.mp4':'video/mp4', '.xml':'application/xml', '.txt':'text/plain;charset=utf-8', '.json':'application/json', '.webmanifest':'application/manifest+json' };
http.createServer((req,res)=>{
  let p = decodeURIComponent(url.parse(req.url).pathname);
  if (p === '/' ) p = '/index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { res.writeHead(404,{'Content-Type':'text/plain'}); return res.end('404'); }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(f).toLowerCase()] || 'application/octet-stream' });
  fs.createReadStream(f).pipe(res);
}).listen(4173, () => console.log('serving http://localhost:4173'));
