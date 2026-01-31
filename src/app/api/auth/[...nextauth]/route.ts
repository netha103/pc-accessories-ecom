import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import crypto from "crypto";

export const authOptions: AuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: {
                    label: "Email",
                    type: "text",
                    placeholder: "admin@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) return null;

                const storedEmail = process.env.ADMIN_EMAIL;
                const storedSalt = process.env.ADMIN_PASSWORD_SALT;
                const storedHash = process.env.ADMIN_PASSWORD_HASH;

                if (!storedEmail || !storedSalt || !storedHash) {
                    console.error("Admin credentials not set in environment variables");
                    return null;
                }

                if (credentials.email !== storedEmail) {
                    return null;
                }

                const inputHash = crypto
                    .pbkdf2Sync(credentials.password, storedSalt, 1000, 64, "sha512")
                    .toString("hex");

                if (inputHash === storedHash) {
                    return {
                        id: "1",
                        name: "Admin User",
                        email: storedEmail,
                        role: "admin",
                    };
                }

                return null;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role;
            }
            return token;
        },
        async session({ session, token }) {
            if (session?.user) {
                session.user.role = token.role;
            }
            return session;
        },
    },
    pages: {
        signIn: "/auth/signin",
    },
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    // Enable debug messages in development
    debug: process.env.NODE_ENV === "development",
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
