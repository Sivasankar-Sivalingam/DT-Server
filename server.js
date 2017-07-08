/*"C:\Program Files\MongoDB\Server\3.4\bin\mongod.exe" --dbpath "C:\Users\853364\Desktop\Angular Training\codeOne sample 1\data"*/
var express = require('express'),
    app = express(),
    port = 3000,
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    Deployment = require('./models/deployment'),
    mongoDB = 'mongodb://localhost:27017/deployment';

mongoose.connect(mongoDB, {
    useMongoClient: true
});
mongoose.Promise = require('bluebird');

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', false);
    next();
});


app.get('/', (req, res) => {
    res.json({ message: 'You are now into the deployment tracker' });
});


// Create endpoint /api/deployment for POSTS
app.post('/deployment', (req, res) => {
    // Create a new instance of the deployment model

    var deployment = new Deployment();
    // Set the deployment properties that came from the POST data
    console.log(req.body)
    deployment.devName = req.body.devName;
    deployment.defectNo = req.body.defectNo;
    deployment.files = req.body.files;
    deployment.tower = req.body.tower;
    deployment.propFile = req.body.propFile;
    deployment.dvl = req.body.dvl;
    deployment.qat = req.body.qat;
    console.log('inside post')

    // Save the deployment entry and check for errors
    deployment.save((err) => {
        console.log('inside save')
        if (err)
            res.send(err);

        res.json({ message: 'Your deployment data has been added to the tracker!', data: deployment });
    });
});

app.get('/deploymenttracks', (req, res) => {
    Deployment.find((err, deployment) => {
        if (err)
            res.send(err);

        res.json(deployment);
    });
});

app.get('/deploymenttracks/:deployment_id', (req, res) => {
    // Use the deployment model to find a specific deployment entry
    Deployment.findById(req.params.deployment_id, (err, deployment) => {
        if (err)
            res.send(err);

        res.json(deployment);
    });
});
app.delete('/deploymenttracks/:deployment_id', (req, res) => {
    // Use the Beer model to find a specific beer and remove it
    Deployment.findByIdAndRemove(req.params.deployment_id, (err) => {
        if (err)
            res.send(err);

        res.json({ message: 'Deployment entry removed from the Tracker!' + req.params.deployment_id });
    });
});

app.put('/deploymenttracks/:deployment_id', (req, res) => {
    // Use the deployment model to find a specific deployment entry
    Deployment.findById(req.params.deployment_id, (err, deployment) => {
        if (err)
            res.send(err);

        // Update the existing deployment entry
        deployment.devName = req.body.devName;
        deployment.defectNo = req.body.defectNo;
        deployment.files = req.body.files;
        deployment.tower = req.body.tower;
        deployment.propFile = req.body.propFile;
        deployment.dvl = req.body.dvl;
        deployment.qat = req.body.qat;

        // Save the deployment entry and check for errors
        deployment.save((err) => {
            if (err)
                res.send(err);

            res.json(deployment);
        });
    });
});

app.listen(port, () => {
    console.log('listening on 3000')
});