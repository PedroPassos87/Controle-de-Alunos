import { Router } from 'express';
import userController from '../controllers/UserController';

import loginRequired from '../middlewares/loginRequired';

const router = new Router();

//nao deveria existir
//router.get('/',userController.index);
//router.get('/:id', userController.show);


router.post('/',loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/',loginRequired, userController.delete);


export default router;

/*
index -> lista usuarios -> GET
store/create -> cria um novo usuario ->POST
delete -> apaga usuario -> DELETE
show -> mostra um usuario -> SHOW
update -> atualiza um usuario -> PATCH ou PUT
 */
