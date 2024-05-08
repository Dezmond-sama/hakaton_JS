import {Response, Request, NextFunction} from 'express'
import authService from '../services/auth.service'


class AuthController{
    async register(req: Request, res: Response, next: NextFunction){
       const data = await authService.register(req.body)
       if(!data.success) return res.status(400).json({message: data.message})
        
       return res.status(201).json({message: data.message})
    }

    async login(req: Request, res: Response, next: NextFunction){
        const data = await authService.login(req.body)
        if(!data.success) return res.status(400).json({message: data.message})
        
        return res.status(200).json({message: data.message})
    }
}

export default new AuthController();