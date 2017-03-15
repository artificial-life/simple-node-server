const http = require('http');
const fs = require('fs')

// Create an HTTP server
const srv = http.createServer((req, res) => {
  // set Headers
  res.writeHead(200, {
    'Content-Type': 'text/html',
    'Cache-Control': 'no-cache'
  });

  // read file
  fs.readFile('index.html', 'utf8', function(err, data) {
    // handle error
    if (err) {
      return res.end(err.toString());
    }
    // write to response
    res.write(data);
    // close response
    res.end();
  });

}).listen(8080, () => console.log('Please, open your browser and navigate to http://localhost:8080')); //server started on localhost:8080
