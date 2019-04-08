const path = require('path') 

module.exports = { 

entry: './src/js/index.js', 

output: { 

filename: 'bundle.js', 

path: path.resolve(__dirname, 'dist') 

}, 

devServer: { 

contentBase: path.join(__dirname, './'), 

publicPath: '/dist/', 

watchContentBase: true, 

compress: true, 

port: 9000 

} 

}