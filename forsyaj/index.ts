const express = require('express');
import router from '../src/router.index';
const app = express();
app.use(express.json());

app.listen(8000,() =>console.log('server 8000 port'));