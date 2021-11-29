const serverlessExpress = require('@vendia/serverless-express')
const app = require('./app')

// sync handler
exports.handler = serverlessExpress({ app })


// Old aws-serverless-express package

// const ase = require('aws-serverless-express')
// const binaryMimeTypes = [
//     'application/javascript',
//     'application/json',
//     'application/xml',
//     'text/html',
//     'text/javascript',
//     'text/plain',
//     'text/text',
// ]
// const server = ase.createServer(app, null, binaryMimeTypes)
// exports.handler = (event, context) => ase.proxy(server, event, context)