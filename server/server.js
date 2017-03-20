var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var myFormModel = require('./myFormModel');
var bodyParser = require('body-parser');

var app = express();

var compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.use('/home', function(req, res) {
    res.sendFile(path.resolve('client/index.html'));
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/startInterview', function(req, res) {
    return res.send(myFormModel.getinitdata())
})
app.post('/saveUserInputs', function(req, res) {
    myFormModel.saveUserInputs(req.body, function(result) {
        console.log(req.body);
        return res.send(result);
    })
})
var port = 3000;

app.listen(port, function(error) {
    if (error)
        throw error;
    console.log("Express server listening on port", port);
});
