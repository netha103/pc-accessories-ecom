import mongoose, { Schema, model, models } from "mongoose";

const UserSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required"],
        },
        email: {
            type: String,
            unique: true,
            required: [true, "Email is required"],
            match: [
                /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                "Email is invalid",
            ],
        },
        password: {
            type: String,
            select: false,
        },
        salt: {
            type: String,
            select: false,
        },
        role: {
            type: String,
            default: "user",
        },
        image: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

const User = models.User || model("User", UserSchema) as any;

export default User;
