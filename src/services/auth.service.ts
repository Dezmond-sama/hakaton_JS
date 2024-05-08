import {RegisterRequest} from "../dtos/auth.dto"
import User from '../models/user.model';

class AuthService{
    async register(userDTO:RegisterRequest){
        let status = {
            success: true,
            message: 'user registered',
          };
      
          try {
            await User.create({...userDTO});
          } catch (error: any) {
            status = {
              success: false,
              message: error.message,
            }
          }      

          return  status;
    }
    async login(userDTO:RegisterRequest){
        let status = {
            success: true,
            message: 'user logged in',
        };
        await User.findOne({where: {email: userDTO.email}}).then((user) => {
            if (!user) {
              status = {
                success: false,
                message: 'user not found',
              }
            }
            else if (user.password !== userDTO.password) {
                status = {
                    success: false,
                    message: 'password incorrect',
                }
            }
        })

        return status
    }
}

export default new AuthService()