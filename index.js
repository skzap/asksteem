ApiWrapper = require('./lib/api-wrapper');

AskSteem = ApiWrapper.create({
   root: 'https://api.asksteem.com/',
   get: {
       suggestions: '/suggestions?${term}',
       search: '/search?q=${q}&pg=${pg}&include=${include}&sort_by=${sort_by}&order=${order}&types=${types}',
       related: '/related?author=${author}&permlink=${permlink}&username=${username}&include=${include}&sort_by=${sort_by}&order=${order}'
   }
});

module.exports = AskSteem