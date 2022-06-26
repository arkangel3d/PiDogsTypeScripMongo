import { Router, Request, Response } from 'express';
import getAlldogs from '../controllers/getAllDogs';
import createDog from '../controllers/createDogs';
 const router = Router();

router.get('/', (req, res) => {
    res.send('Hello World!');
});
// all dogs
router.get('/dogs', getAlldogs );
router.post('/create', createDog);

export default router;
