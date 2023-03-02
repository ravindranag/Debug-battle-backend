import mongoose from 'mongoose'

interface IUser {
     username: string;
     regdno: string;
     type: string;
     score: number;
   }

const userSchema = new mongoose.Schema<IUser>({
    username : {type :String ,
         required: true},
    regdno: {type: String},
     type:{type: String},
     score:{type:Number}
      
});

const user = mongoose.model('User',userSchema);

export default user;
