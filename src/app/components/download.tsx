// src/app/components/DownloadSection.tsx
"use client"


const DownloadSection = () => {
    return (
        <section className="flex flex-col items-center py-10">
            <h2 className="text-3xl font-bold text-[#002664] mb-4">Get DVInfo Now!</h2>
            <p className="text-gray-600 mb-6 max-w-md text-center">Start your journey toward the American Dream with DVInfo.</p>
            <a href="/download" className="bg-[#BB133E] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#990e30] transition-colors">
                Download Now
            </a>
        </section>
    );
};

export default DownloadSection;
