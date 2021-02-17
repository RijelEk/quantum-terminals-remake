import { User } from "../../entity/User";
import bcrypt from "bcryptjs";
import { Request } from "express";

export default {
    login: async (
        _:void, {email,password}:{email:string,password:string}, 
        {req}:{req:Request}
    )=>{

      const user:User|undefined = await User.findOne({ where: { email } });
      console.log("logni")
        if (!user) {
          return{
              error:{
                field:["username"],
                message:"User not found"
              }
          };
        }

        const valid:boolean = await bcrypt.compare(password, user.password);

        if (!valid) {
          return{
            error:{
              field:["password"],
              message:"Password is not valid"
            },
            user: null
          };
        }

        if (!user.confirmed) {
          return{
            error:{
              field:["username"],
              message:"User is not confirmed"
            },
            user: null
          };
        }

    console.log(user.id)
    console.log(req.session)
        req.session!.userId = user.id;

        return{
              user:user,
              error: null
        } 
    }
}