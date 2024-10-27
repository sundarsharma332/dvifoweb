import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white p-6 mt-10">
            <div className="container mx-auto text-center space-y-4">
                <p>© 2024 DVInfo. All rights reserved.</p>
                <div className="space-x-4">
                    <Link href="/about">About</Link>
                    <Link href="/download">Download</Link>
                    <Link href="/terms">Terms of Use</Link>
                    <Link href="/privacy">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
