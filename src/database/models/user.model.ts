import { model, Schema } from "mongoose";

export interface userInterface {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const userSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
})

const userModel = model<userInterface & Document>('User', userSchema)
export default userModel