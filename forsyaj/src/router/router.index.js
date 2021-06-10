const express = require('express');
const PersonController = require ('../controller/person.controller');

const router = express.Router();
router.post('/person.controller',PersonController.createPerson);
module.exports=router;