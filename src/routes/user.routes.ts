import { Router } from "express";
import { UserController } from "../controllers/users.controller";
import { check } from "express-validator";
import { validateFields } from "../helpers/validateFields";
import { DbValidator } from "../helpers/db-validators";
const router = Router();


router.get('/', UserController.instance.getUsers)
router.get('/:id',[
    check('id', 'the id is not valid').isInt(),
    validateFields
] ,UserController.instance.getUser)
router.post('/',[
    check('username','the user do not have empty').notEmpty().isString().escape(),
    check('email', 'not a valid email').isEmail().notEmpty(),
    check('password', 'the password must be longer of 5 letter').isLength({min: 5}).notEmpty(),
    check('age', 'the age not empty and not string').notEmpty().isInt().not().isString(),
    check('name','the name do not have empty').notEmpty().isString().escape(),
    check('lastname','the lastname do not have empty').notEmpty().isString().escape(),
    check('email', 'the email exist').custom(DbValidator.instance.emailExist),
    check('username', 'a user with this name exist').custom(DbValidator.instance.userExist),
    validateFields
], UserController.instance.create)
router.put('/:id', UserController.instance.edit)
router.delete('/:id', UserController.instance.delete)



export default router


