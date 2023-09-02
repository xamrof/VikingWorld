import { NextFunction, Request, Response } from "express";



export class UserController {

    private static _instance: UserController;

    constructor(){}

    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    public async getUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({msg: 'users'})
    }

    public async getUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({msg: 'user'})
    }

    public async create(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({msg: 'create user'})
    }

    public async edit(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({msg: 'edit user'})
    }

    public async delete(req: Request, res: Response, next: NextFunction): Promise<void> {
        res.json({msg: 'delete user'})
    }

}