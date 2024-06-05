import express from 'express';
import { create, login, available, unavailable, getAll } from './user.controller.js';

const router = express.Router();

router.get('/', getAll);
router.post('/signup', create);
router.post('/login', login);
router.post('/available', available);
router.patch('/unavailable', unavailable);

export default router;
