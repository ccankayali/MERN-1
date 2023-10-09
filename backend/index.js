import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.get('/', (req, res) => {
    res.json({
        author: 'Can',
        message: 'Welcome to the backend!',
    });
});

const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://root:root@cluster0.ytmhacy.mongodb.net/?retryWrites=true&w=majority"
mongoose
.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((error) => console.log(error.message));