const
// the prefix to expose API
_prefix         = '/api',
// the module for mws routes
_module         = '/mws';

// URLs to expose for the client [saved as const]
var simple = {
    _TEST:                         _prefix + _module + '/test',

};

var auth_based = {
};

var methods = {
    is_auth_required: function(url){
        for(var key in auth_based){
            if(auth_based.hasOwnProperty(key)){
                if(auth_based[key] === url) return true;
            }
        }
        return false;
    }
}

module.exports = Object.assign(simple, auth_based, methods);