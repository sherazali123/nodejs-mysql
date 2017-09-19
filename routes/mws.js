var

// module mws, to manage all the APIs related to amazon
mws                     = require('../modules/mws'),


// get urls, the dependencey on module auth.js
urls   			            = require('../routes/urls'),

// helper functions
helper_functions        = require('../helpers/functions');

module.exports = function(app){

  // Signing in the user with the required credentials
  app.get(urls._TEST, function(req, res){

    var errors = req.validationErrors();
    if (errors) {
      // return errors if found any error in the request
      res.send({status: 'error', errors: errors});
      return;
    } else {
      var
      data      = {
      };
      // test API
      mws.test(data, function(found){
        console.log(found);
        res.json(found);
      });
    }

  });

  // get MWS service status
    app.get(urls._GetServiceStatus, function(req, res){

      var errors = req.validationErrors();
      if (errors) {
        // return errors if found any error in the request
        res.send({status: 'error', errors: errors});
        return;
      } else {
        var
        data      = {
        };
        // test API
        mws.GetServiceStatus(data, function(found){
          console.log(found);
          res.json(found);
        });
      }

    });
};
