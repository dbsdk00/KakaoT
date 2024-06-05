import express from 'express';
import { create, login, available, getAll } from './user.controller.js';

const router = express.Router();

router.get('/', getAll);
router.post('/signup', create);
router.post('/login', login);
router.post('/available', available);

export default router;
