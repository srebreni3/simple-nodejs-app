const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Friend!\n');
});

const port = process.env.PORT || 80;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

