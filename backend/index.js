import express, { response } from 'express';
import {PORT} from './config.js';

const app = express();

app.get('/', (request, response) => {
    console.log(request)
    return response.status(234).send('Hello World!')
}) 
app.listen(PORT,() => {
    console.log(`Server is running on port ${PORT}`);
})