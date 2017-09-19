

exports.decodeBase64Image = function(dataString){
  var
  matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
  response = {};
  
  if(!matches){
    return false;
  }
  if (matches.length !== 3) {
    return false;
  }

  response.type = matches[1];
  response.data = new Buffer(matches[2], 'base64');

  return response;
};

exports.getClientIpAddress = function(request) {
  var ip = '';
  if(request.connection.remoteAddress){
    ip = request.connection.remoteAddress;
  } else if (request.headers['x-forwarded-for']) {
    ip = request.headers['x-forwarded-for'];
  }
  return ip;
};

exports.randomFilename = function(name){
  name = name || Math.floor(Math.random() * (10000000 - 20000) + 20000);
  return name + '_' + Math.round(new Date().getTime()/1000);
};
