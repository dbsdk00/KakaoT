import express from 'express';
import path from 'path';
import {create as createController} from './booking.controller.js';

var router = express.Router();

router.get('/', (req,  res) => {
    res.sendFile(path.resolve("./client/booking.html"));
})
router.post('/', createController);

export default router;