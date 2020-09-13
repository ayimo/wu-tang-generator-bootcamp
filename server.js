
        const http = require('http');
        const fs = require('fs')
        const url = require('url');
        const querystring = require('querystring');
        const figlet = require('figlet')

        const server = http.createServer(function(req, res) {
          const page = url.parse(req.url).pathname;
          const params = querystring.parse(url.parse(req.url).query);
          console.log(page);
          if (page == '/') {
            fs.readFile('index.html', function(err, data) {
              res.writeHead(200, {'Content-Type': 'text/html'});
              res.write(data);
              res.end();
            });
          }
          else if (page == '/api') {
            if('answer' in params){
                res.writeHead(200, {'Content-Type': 'application/json'});
                const wuNames = [
                    "Ol' Dirty Chinese Food Restaurant",
                    "Ghostface Warrior",
                    "Inspectah Stack",
                    "Dumpster Fire",
                    "Warlock the Chef",
                    "Queen Gertrude",
                    "Violent Commander",
                    "Annoyin' Madman",
                    "Lazy-assed Genius",
                    "Crazy Mastermind",
                    "Foolish Watcher",
                    "Supreme Taco",
                    "Zexy Desperado",
                    "Unlucky Lover",
                    "Complex Kitty",
                    "Midnight Ninja",
                    "Donut Hole",
                    "Trash Juice",
                    "Juice Warrior",
                    "Sunflower Passion",
                    "Puppet Queen Jeff"
                ]
                function objToJson(array) {
                    return array[params.answer - 5];
                }
                res.end(JSON.stringify(objToJson(wuNames)));
              }
            }
          else if (page == '/css/style.css'){
            fs.readFile('css/style.css', function(err, data) {
              res.write(data);
              res.end();
            });
          }else if (page == '/js/main.js'){
            fs.readFile('js/main.js', function(err, data) {
              res.writeHead(200, {'Content-Type': 'text/javascript'});
              res.write(data);
              res.end();
            });
          }else{
            figlet('404!!', function(err, data) {
              if (err) {
                  console.log('Something went wrong...');
                  console.dir(err);
                  return;
              }
              res.write(data);
              res.end();
            });
          }
        });
        server.listen(8000);
