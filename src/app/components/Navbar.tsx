"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-white/30 backdrop-blur-lg text-black p-8 rounded-full shadow-lg flex gap-6 items-center px-12 z-50 transition-all duration-300 ease-in-out">
            <NavLink href="/" active={pathname === "/"}>Home</NavLink>
            <NavLink href="/about" active={pathname === "/about"}>About App</NavLink>
            <NavLink href="/downloads" active={pathname === "/downloads"}>Download App</NavLink>
            <NavLink href="/terms-of-use" active={pathname === "/terms"}>Terms of Use</NavLink>
            <NavLink href="/privacy-policyy" active={pathname === "/policy"}>Privacy Policy</NavLink>
            <NavLink href="/frequently-asked-questions" active={pathname === "/faq"}>FAQ's</NavLink>
        </nav>
    );
};

const NavLink = ({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) => {
    return (
        <Link
            href={href}
            className={`px-3 py-2 rounded-full transition-all duration-200 whitespace-nowrap ${active
                ? "bg-[#BB133E] text-white font-semibold" // Solid red for active links
                : "text-gray-700 hover:text-black"
                }`}
        >
            {children}
        </Link>
    );
};

export default Navbar;
