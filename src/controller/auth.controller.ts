import {Response, Request, NextFunction} from 'express'
import authService from '../services/auth.service'


class AuthController{
    async register(req: Request, res: Response, next: NextFunction){
       const user = await authService.register(req.body)
    }
}

export default new AuthController();