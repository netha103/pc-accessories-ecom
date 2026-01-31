"use client";
import Breadcrumb from "@/components/Common/Breadcrumb";
import Link from "next/link";
import React, { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignIn = () => {
    const router = useRouter();
    const [data, setData] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setError("");
        const res = await signIn("credentials", {
            ...data,
            redirect: false,
        });

        if (res?.error) {
            setError("Invalid email or password");
        } else {
            router.push("/admin");
        }
    };

    return (
        <>

            <section className="overflow-hidden py-20 mt-35 bg-gray-2">
                <div className="max-w-[1170px] w-full mx-auto px-4 sm:px-8 xl:px-0">
                    <div className="max-w-[570px] w-full mx-auto rounded-xl bg-white shadow-1 p-4 sm:p-7.5 xl:p-11">
                        <div className="text-center mb-11">
                            <h2 className="font-semibold text-xl sm:text-2xl xl:text-heading-5 text-dark mb-1.5">
                                Sign In to Admin Panel
                            </h2>
                            <p>Enter your detail below</p>
                        </div>

                        <div>
                            <form onSubmit={handleSubmit}>
                                {error && (
                                    <div className="mb-4 text-sm font-medium text-red-500 bg-red-50 p-3 rounded">{error}</div>
                                )}
                                <div className="mb-5">
                                    <label htmlFor="email" className="block mb-2.5">
                                        Email
                                    </label>

                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Enter your email"
                                        value={data.email}
                                        onChange={(e) => setData({ ...data, email: e.target.value })}
                                        className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                                    />
                                </div>

                                <div className="mb-5">
                                    <label htmlFor="password" className="block mb-2.5">
                                        Password
                                    </label>

                                    <input
                                        type="password"
                                        name="password"
                                        id="password"
                                        placeholder="Enter your password"
                                        autoComplete="on"
                                        value={data.password}
                                        onChange={(e) => setData({ ...data, password: e.target.value })}
                                        className="rounded-lg border border-gray-3 bg-gray-1 placeholder:text-dark-5 w-full py-3 px-5 outline-none duration-200 focus:border-transparent focus:shadow-input focus:ring-2 focus:ring-blue/20"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full flex justify-center font-medium text-dark bg-dark py-3 px-6 rounded-lg ease-out duration-200 hover:bg-blue mt-7.5 text-white"
                                >
                                    Sign in to Admin Dashboard
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignIn;
