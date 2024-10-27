"use client"

import React, { useState, useEffect } from 'react';
import { Sparkles, Globe, Download } from 'lucide-react';

const HeroSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        setIsVisible(true);
        const handleMouseMove = (e: { clientX: number; clientY: number; }) => {
            setMousePosition({
                x: (e.clientX - window.innerWidth / 2) / 50,
                y: (e.clientY - window.innerHeight / 2) / 50,
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const stats = [
        { label: 'Success Rate', value: '94%', icon: <Globe className="w-6 h-6 mb-2 text-[#002664]" /> },
        { label: 'Countries', value: '200+', icon: <Globe className="w-6 h-6 mb-2 text-[#002664]" /> },
        { label: 'Happy Users', value: '50k+', icon: <Sparkles className="w-6 h-6 mb-2 text-[#002664]" /> }
    ];

    return (
        <div className="relative min-h-[90vh] flex items-end bg-gradient-to-b from-white to-gray-50 overflow-hidden pb-8 sm:pb-12">
            {/* Animated Background Shapes */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(3)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute opacity-20"
                        style={{
                            transform: `translate(${mousePosition.x * (i + 1)}px, ${mousePosition.y * (i + 1)}px)`,
                            transition: 'transform 0.3s ease-out',
                        }}
                    >
                        <div
                            className="w-[40rem] h-[40rem] bg-gradient-to-tr from-[#002664] to-[#BB133E]"
                            style={{
                                borderRadius: '43% 57% 63% 37% / 48% 52% 48% 52%',
                                transform: `rotate(${i * 45}deg)`,
                                opacity: 0.2 - i * 0.05,
                                filter: 'blur(40px)',
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="relative w-full px-4 sm:px-6 lg:px-8">
                <div className={`max-w-7xl mx-auto transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                    {/* Top Badge */}
                    <div className="flex justify-center mb-6">
                        <div className="inline-flex items-center rounded-full px-4 py-1.5 bg-blue-50 border border-blue-100">
                            <Sparkles className="h-4 w-4 text-blue-600 mr-2" />
                            <span className="text-sm font-medium text-blue-600">New Features Available</span>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-gray-900 mb-4">
                            Your Ultimate Guide to the{' '}
                            <span className="text-[#BB133E] relative inline-block">
                                DV Lottery
                                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                                    <path d="M0,5 Q50,9 100,5" stroke="#BB133E" strokeWidth="2" fill="none" />
                                </svg>
                            </span>
                        </h1>

                        <p className="mt-4 text-lg sm:text-xl font-medium text-gray-600 max-w-2xl mx-auto leading-relaxed px-4">
                            Get authentic, real-time information for a successful application journey.
                        </p>

                        {/* Action Buttons */}
                        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
                            <button className="w-full sm:w-auto group relative inline-flex items-center justify-center px-6 py-2.5 bg-[#002664] text-white rounded-lg overflow-hidden transition-all duration-300 hover:bg-[#BB133E]">
                                <span className="absolute inset-0 w-0 group-hover:w-full transition-all duration-500 ease-out bg-[#BB133E] opacity-50"></span>
                                <Download className="w-5 h-5 mr-2" />
                                <span className="relative font-semibold">Download App</span>
                            </button>

                            <button className="w-full sm:w-auto group inline-flex items-center justify-center px-6 py-2.5 text-[#BB133E] hover:text-[#002664] transition-colors duration-200">
                                <Globe className="w-5 h-5 mr-2" />
                                <span className="font-semibold">Read Documentation</span>
                                <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-200">→</span>
                            </button>
                        </div>

                        {/* Stats Section */}
                        <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto px-4">
                            {stats.map((stat, index) => (
                                <div
                                    key={index}
                                    className="p-4 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                                >
                                    <div className="flex flex-col items-center">
                                        {stat.icon}
                                        <div className="font-bold text-2xl sm:text-3xl text-[#002664]">{stat.value}</div>
                                        <div className="text-gray-600 text-sm sm:text-base mt-1">{stat.label}</div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* USA Flag */}
                        <div className="mt-6 relative">
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/80"></div>
                            <img
                                src="/api/placeholder/400/320"
                                alt="USA Flag"
                                className="h-12 sm:h-16 w-auto mx-auto transform hover:scale-110 transition-transform duration-300"
                                style={{
                                    animation: 'float 3s ease-in-out infinite',
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
      `}</style>
        </div>
    );
};

export default HeroSection;