const https = require('https');
const fs = require('fs');
const workingDir = "/Users/comsoft/Documents/2023-1 IT기술실무/GitHub/Lecture_2023-1/ch4/";

https.createServer({
  cert: fs.readFileSync(`${workingDir}/cert/server.crt`),
  key: fs.readFileSync(`${workingDir}/cert/server.key`),
  ca: [
    fs.readFileSync(`${workingDir}/cert/rootCA.crt`),
    fs.readFileSync(`${workingDir}/cert/rootCA.key`),
  ],
}, (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.write('<h1>Hello Node!</h1>');
  res.end('<p>Hello Server!</p>');
})
  .listen(443, () => {
    console.log('443번 포트에서 서버 대기 중입니다!');
  });
