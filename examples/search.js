var AskSteem = require('../index.js')

var query = 'amy winehouse'

AskSteem.search({q: query, include: 'meta'}, function(error, response, request) {
    if (error) console.log(error, request)
    else console.log(response.results.length+' results for '+query)
})