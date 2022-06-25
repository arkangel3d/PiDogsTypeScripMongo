import { Router, Request, Response } from 'express';
import getAlldogs from '../controllers/getAllDogs';
 const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});
// all dogs
router.get('/dogs', getAlldogs );

export default router;
