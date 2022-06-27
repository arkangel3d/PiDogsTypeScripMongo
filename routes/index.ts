import { Router } from 'express';
import getAlldogs from '../controllers/getAllDogs';
import createDog from '../controllers/createDogs';
import updateDog from '../controllers/updateDog';
import getDogById from '../controllers/getDogById';
import copyTemps from '../controllers/copyTemps';
import getMyDogs from '../controllers/getMyDogs';
import getAllTemperamts from '../controllers/getAllTemperamts';
import reFillterTemperaments from '../controllers/reFillterTemperaments';
const router = Router();

// all dogs
router.get('/dogs', getAlldogs );
router.get('/dogs/:id', getDogById );
router.post('/dog', createDog);
router.put('/edit', updateDog);
router.get('/mydogs', getMyDogs);
router.get('/temp',getAllTemperamts);
//refilterfront
router.get('/temperament', reFillterTemperaments);
//solo para copiar temperamentos, se ejecuta una vez.
router.get('/createtemps', copyTemps)
export default router;
