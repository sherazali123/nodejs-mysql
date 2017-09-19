var
// module to manage all mws actions
mws                     = require('../modules/mws'),

// get urls, the dependencey on module mws.js
urls   			            = require('../routes/urls'),


// module to manipulate dates
fs                      = require('fs');


// exporting all the end points into the application
module.exports      = function(app, express){

  // fake the url by /static which is pointing to the directory public
  app.use('/static', express.static('public'));

  // use logger at application level
  app.use(function(req, use, next){
    console.log("*****LOGGER******");
    next();
  });

  // middleware - authenticate user if needed and set user to access in next callback
  app.use(function(req, res, next){

    if(urls.is_auth_required(req.url)){
      var token = req.body.token || req.headers.token;

      // write your code here to authenticate token before processing the request

    } else {
      next();
    }
    
  });
  

  // the root of the application
  app.get('/', function(req,res){
    // returning a simple text as response
    res.end("NodeJS-WebApis-Started");
  });    
    
  fs.readdirSync(__dirname).forEach(function(file) {
        if (file == "routes.js" || file == "urls.js") return;
        var name = file.substr(0, file.indexOf('.'));
        require('./' + name)(app);
  });    
    
  
};
