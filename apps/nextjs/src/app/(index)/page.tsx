"use client"; // This is a client component 👈🏽
import { BackgroundBeams } from "@saasfly/ui/background-beams";
import { useState } from "react";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../Firebase';
import SignUpSuccessModal from '../../components/SignUpSuccessModal';

export default function IndexPage() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [showModal, setShowModal] = useState(false);

    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        setEmailError(validateEmail(value) ? "" : "Invalid email");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Validate email before proceeding
            if (!validateEmail(email)) {
                setEmailError("Invalid email");
                return;
            }

            // Add email to Firestore collection
            await addDoc(collection(db, "users"), { email });
            
            // Clear the email field
            setEmail("");

            // Show the success modal
            setShowModal(true);

            console.log("Email added to waitlist successfully!");
        } catch (error) {
            console.error("Firestore error:", error); // Print entire error object
            alert("An error occurred while adding email to users collection. Please try again later.");
        }
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleCloseModal = () => {
      setShowModal(false);
    };

    const shareWaitlist = () => {
        const waitlistLink = "https://waitlist.laani.io/"; // Replace with your actual waitlist link
        const text = "Hey, I just joined the Laani waitlist. Join also: " + waitlistLink;
    
        if (navigator.share) {
            navigator.share({ title: "Laani Waitlist", text: text, url: waitlistLink })
                .then(() => console.log("Shared successfully"))
                .catch((error) => console.error("Share failed:", error));
        } else {
            // Fallback for browsers/devices that don't support navigator.share
            // You can provide alternative behavior here, such as copying the link to clipboard
            console.log("Sharing not supported");
        }
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
                    <form onSubmit={handleSubmit}>
                        <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
                            <div className="relative z-10">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full rounded-md border bg-white px-4 py-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:w-80"
                                    value={email}
                                    onChange={handleEmailChange}
                                    name="email"
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
                    <div>
                        Explore our Link Tree for additional info.

                    </div>
                    <div className="relative z-10">
                        <a
                            href="https://waitlist.laani.io/"
                            className="text-sm font-semibold text-blue-500 hover:text-blue-600"
                        >
                            More Details →
                        </a>
                    </div>
                    
                    <div>
                     Spread the word! Share the waitlist with friends.

                    </div> 
                    <div className="relative z-10">
                        <a
                            href="https://waitlist.laani.io/"
                            className="text-sm font-semibold text-blue-500 hover:text-blue-600"
                            onClick={shareWaitlist}
                        >
                            Share Waitlist →
                        </a>
                    </div>
                </div>
                <div className="mt-auto"></div>

                
            </div>
            <BackgroundBeams className="absolute inset-0" />
            {/* Render modal if showModal is true */}
            {showModal && <SignUpSuccessModal onClose={handleCloseModal} />}
        </section>
    );
}