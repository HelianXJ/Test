import express from 'express';
import user from './controllers/user-controller';

const router = express.Router();

router.get('/user', user.show);
router.post('/login', user.login);
router.post('/logout', user.logout);
router.all('*', (req, res) => {
    res.status(404).json({ result: 'not found' });
});

export default router;
