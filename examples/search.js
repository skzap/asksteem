var AskSteem = require('../index.js')

AskSteem.search({q: 'amy winehouse', include: 'meta'}, function(error, response, request) {
    console.log(request.request.uri)
    console.log(response.results.length + ' results found')
})