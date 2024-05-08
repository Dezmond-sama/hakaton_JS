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
      
          return status;
    }
}

export default new AuthService()