'use strict'

const jsforce = require('jsforce'),
         cred = require('./cred.js').cred,
            c = new jsforce.Connection({loginUrl : 'https://test.salesforce.com'})

console.log(cred)

c.login(cred.username, cred.password + cred.token, function(err, userInfo) {

    if (err)
        throw err

    console.log('Access Token:' + c.accessToken)
    console.log('Instance URL:' + c.instanceUrl)
    console.log("User ID: " + userInfo.id)
    console.log("Org ID: " + userInfo.organizationId)

})
