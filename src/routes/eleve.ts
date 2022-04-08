import express from "express";
import eleveCtrl from '../controllers/eleve'

const router = express.Router();

router.get('/', eleveCtrl.list);
router.get('/:id', eleveCtrl.get);
router.post('/', eleveCtrl.create);
router.put('/', eleveCtrl.update);

export default router;