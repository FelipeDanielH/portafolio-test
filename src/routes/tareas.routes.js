import {Router} from 'express'
const router = Router()

import * as tareaCtrl from '../controllers/tareas.controller'

router.post('/', tareaCtrl.createTarea)

router.get('/', tareaCtrl.getTareas)

router.get('/:TareaId', tareaCtrl.getTareaById)

router.put('/:TareaId', tareaCtrl.updateTareaById)

router.delete('/:TareaId', tareaCtrl.deleteTareaById)




export default router;