"use client"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./components/heroSection";
import FeatureCard from "./components/FeatureCard";
import DownloadSection from "./components/download";
import AppPlansSection from "./components/plans";
import ApplicationServices from "./components/Services";


export default function Home() {
    return (
        <div className="bg-white text-black min-h-screen">
            <HeroSection />
            <FeatureCard />
            <ApplicationServices />
            <AppPlansSection />
            <DownloadSection />
        </div>
    );
}
