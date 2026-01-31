import { NextResponse } from "next/server";
import connectToDatabase from "@/lib/mongodb";
import User from "@/models/User";
import crypto from "crypto";

export async function GET() {
    try {
        await connectToDatabase();

        const adminEmail = "admin@gmail.com";
        const password = "admin123";

        const existingUser = await User.findOne({ email: adminEmail });
        if (existingUser) {
            if (!existingUser.salt) {
                // If user exists but has no salt (from old migration), update it.
                const salt = crypto.randomBytes(16).toString("hex");
                const hashedPassword = crypto
                    .pbkdf2Sync(password, salt, 1000, 64, "sha512")
                    .toString("hex");

                existingUser.salt = salt;
                existingUser.password = hashedPassword;
                await existingUser.save();
                return NextResponse.json({ message: "Admin user updated with new hashing schema" });
            }
            return NextResponse.json({ message: "Admin user already exists" });
        }

        const salt = crypto.randomBytes(16).toString("hex");
        const hashedPassword = crypto
            .pbkdf2Sync(password, salt, 1000, 64, "sha512")
            .toString("hex");

        const newUser = new User({
            name: "Admin User",
            email: adminEmail,
            salt: salt,
            password: hashedPassword, // Store hash only, logic verifies using stored salt
            role: "admin",
        });

        await newUser.save();

        return NextResponse.json({ message: "Admin user created successfully" });
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
