import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.resolve('./client/index.html'));
});
router.get('/signup', (req, res) => {
  res.sendFile(path.resolve('./client/signup.html'));
});
router.get('/login', (req, res) => {
  res.sendFile(path.resolve('./client/login.html'));
});
router.get('/available', (req, res) => {
  res.sendFile(path.resolve('./client/available.html'));
});

export default router;
