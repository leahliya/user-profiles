const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const session = require('express-session');
const config = require('./config.js');
const app = express();
const port = 3000;
var corsOptions = {
	origin: 'http://localhost:3000'
};
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(__dirname + '/public'));

var userCtrl = require('./controllers/userCtrl.js'); 
var profileCtrl = require('./controllers/profileCtrl.js'); 

app.get('/api/profile', profileCtrl.getFriendsProfiles);
app.post('/api/login', userCtrl.login);

app.use(session({ secret: config.sessionSecret })); 


// listen function
app.listen(port, () => {
    console.log(`Listening on Port: ${port}`);
});
