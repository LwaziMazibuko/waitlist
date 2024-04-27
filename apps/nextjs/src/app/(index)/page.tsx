"use client";
import { BackgroundBeams } from "@saasfly/ui/background-beams";
import { useState, useEffect } from "react";

export default function IndexPage() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const handleEmailChange = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        setEmailError(validateEmail(newEmail) ? "" : "Invalid email");
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    return (
        <section className="relative min-h-screen">
            <div className="container mx-auto flex min-h-screen flex-col justify-center text-center">
                <div className="mb-auto"></div>
                <div className="py-12 lg:py-16">
                    <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-blue-500">
                        🔥 The dawn of a new era in finance is here, 
                        <br />
                        and we're leading the charge to ensure it is accessible to all.!
                    </p>
                    <h1 className="mb-6 text-4xl font-bold lg:text-5xl">
                        Join The Waitlist for{" "}
                        <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                            Laani
                        </span>{" "}
                        Today!
                    </h1>
                    <p className="mx-auto mb-8 max-w-3xl text-lg text-gray-600">
                        Sign up and embark on a journey towards seamless crypto transactions. Join the revolution.
                    </p>
                    <form
                        method="POST"
                        target="_blank"
                    >
                        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
                            <div className="relative z-10">
                                <input
                                    type="email"
                                    placeholder="Your Email Address"
                                    className="w-full rounded-md border bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-80"
                                    value={email}
                                    onChange={handleEmailChange}
                                    onBlur={validateEmail}
                                    name="EMAIL"
                                    required
                                />
                                {emailError && (
                                    <p className="mt-1 text-sm text-red-500">{emailError}</p>
                                )}
                            </div>
                            <button
                                type="submit"
                                className="z-10 rounded-md bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
                            >
                                Join Waitlist
                            </button>
                        </div>
                    </form>
                    <div id="getWaitlistContainer" data-waitlist_id="16240" data-widget_type="WIDGET_1"></div>
                </div>
                <div className="mt-auto"></div>
            </div>
            <BackgroundBeams className="absolute inset-0" />
        </section>
    );
}

