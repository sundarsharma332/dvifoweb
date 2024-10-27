"use client"

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const About = () => (
    <div>
        <Navbar />
        <main className="container mx-auto p-6">
            <h1 className="text-2xl font-bold">About DVInfo</h1>
            <p className="mt-4">DVInfo is your go-to app for DV Lottery information...</p>
        </main>
        <Footer />
    </div>
);

export default About;
