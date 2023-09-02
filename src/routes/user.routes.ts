import { Router } from "express";
import { UserController } from "../controllers/users.controller";
const router = Router();


router.get('/', UserController.instance.getUsers)
router.get('/:id', UserController.instance.getUser)
router.post('/', UserController.instance.create)
router.put('/:id', UserController.instance.edit)
router.delete('/:id', UserController.instance.delete)



export default router



