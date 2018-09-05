import * as functions from 'firebase-functions';
import * as express from 'express';
const app = express();

app.get('/', (req, res)=>{
	res.send('Express hello!');
});

app.get('/hello', (req, res)=>{
	res.send('Techtrain hello from custom express app!');
});

 export const helloTechTrain = functions.https.onRequest(app);
