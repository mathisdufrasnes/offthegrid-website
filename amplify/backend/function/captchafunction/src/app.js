/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/


var express = require('express')
var bodyParser = require('body-parser')
var awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
var axios = require('axios')
var {stringify} = require('querystring');
// declare a new express app
var app = express()
app.use(bodyParser.json())
app.use(awsServerlessExpressMiddleware.eventContext())

// Enable CORS for all methods
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "*")
    next()
});


/**********************
 * Example get method *
 **********************/

app.get('/captcha', async (req, res) => {
    axios.get('https://swapi.dev/api/people/9')
        .then(response => {
            const people = response.data.results
            res.json({
                url: 'https://swapi.dev/api/people/9',
                error: null,
                people,
            })
        })
        .catch(err => {
            res.json({
                url: 'https://swapi.dev/api/people/9',
                error: err,
                people: null,
            })
        })
});

app.get('/captcha/*', function (req, res) {
    // Add your code here
    res.json({success: 'get call succeed!', url: req.url});
});

/****************************
 * Example post method *
 ****************************/

app.post('/captcha', async function (req, res) {
    if (req.body.captcha === undefined || req.body.captcha === '' || req.body.captcha === null) {
        return res.json({
            success: false,
            error: "Please select captcha"
        })
    }

    const secretKey = process.env.SECRET_KEY_CAPTCHA
    const query = stringify({
        secret: secretKey,
        response: req.body.captcha,
    });
    const verifyURL = `https://google.com/recaptcha/api/siteverify?${query}`;


    try {
        let result = await axios.post(verifyURL,
            {},
            {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
                },
            },
        )
        let data = result.data || {};
        if(!data.success){
            throw({
                success: false,
                error: 'response not valid'
            })
        }
        return res.json({
            success:data.success,
            challenge_ts: data.challenge_ts,
            hostname: data.hostname,
        });
    }catch(err){
        console.log(err);
        throw err.response ? err.response.data : {success: false, error: 'verifyCatpcha Error'}
    }
});

app.post('/captcha/*', function (req, res) {
    // Add your code here
    res.json({success: 'post call succeed!', url: req.url, body: req.body})
});

/****************************
 * Example put method *
 ****************************/

app.put('/captcha', function (req, res) {
    // Add your code here
    res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

app.put('/captcha/*', function (req, res) {
    // Add your code here
    res.json({success: 'put call succeed!', url: req.url, body: req.body})
});

/****************************
 * Example delete method *
 ****************************/

app.delete('/captcha', function (req, res) {
    // Add your code here
    res.json({success: 'delete call succeed!', url: req.url});
});

app.delete('/captcha/*', function (req, res) {
    // Add your code here
    res.json({success: 'delete call succeed!', url: req.url});
});

app.listen(3000, function () {
    console.log("App started")
});

// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = app
