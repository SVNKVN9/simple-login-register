import { Schema, model } from "mongoose";
import { IUser } from "../interfaces/User";

const UserSchema = new Schema<IUser>({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
}, { versionKey: false });

export default model("User", UserSchema)