import mongoose from 'mongoose'

interface IUser {
     username: string;
     regdno: string;
     type: string;
     score: number;
     code: string;
     branch: String;
     username2: string;
     regdno2: string;
     type2: string;
     code2: string;
     branch2: String;
   }

const userSchema = new mongoose.Schema<IUser>({
    username : {type :String ,
         required: true},
    regdno: {type: String},
     type:{type: String},
     score:{type:Number},
     code: {type:String},
     branch: {type:String},
     username2 : {type :String ,
        required: true},
   regdno2: {type: String},
   branch2: {type:String},
      
});

const user2 = mongoose.model('User2',userSchema);

export default user2;
