import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";



export class UserController {

    private static _instance: UserController;

    constructor(){}

    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    public async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const users = await UserService.instance.getAllUsers()
            res.status(200).json(users)
        } catch (error) {
            next(error)
        }
    }

    public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        const {id} = req.params

        try {
            const user = await UserService.instance.getUser(+id)
            res.status(200).json(user)
        } catch (error) {
            next(error)
        }

    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        const userData = req.body

        try {
            const user = await UserService.instance.createUser(userData)

            res.status(201).json({
                msg: 'user created',
                user
            })    
        } catch (error) {
            next(error)   
        }

    }

    public async edit(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({msg: 'edit user'})
    }

    public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({msg: 'delete user'})
    }

}