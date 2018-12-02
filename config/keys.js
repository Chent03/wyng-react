if (process.env.NODE_ENV === 'production') {
    console.log('PRODDDDD')
    module.exports = require('./prod');
} else {
    console.log('ASDASDADSADS')
    module.exports = require('./dev');
}
