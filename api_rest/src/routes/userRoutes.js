import { Router } from 'express';
import userController from '../controllers/UserController';

const router = new Router();

router.post('/', userController.store);
router.get('/', userController.index);
router.get('/:id', userController.show);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);


export default router;

/*
index -> lista usuarios -> GET
store/create -> cria um novo usuario ->POST
delete -> apaga usuario -> DELETE
show -> mostra um usuario -> SHOW
update -> atualiza um usuario -> PATCH ou PUT
 */
