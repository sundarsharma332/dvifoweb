import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline';

const features = [
    {
        name: 'Real-Time Updates',
        description:
            'Receive instant notifications on key DV Lottery dates, from application openings to result announcements, so you never miss a critical update.',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'Data Privacy',
        description:
            'Our platform ensures that all user data is securely encrypted and protected with SSL certificates to guarantee your privacy.',
        icon: LockClosedIcon,
    },
    {
        name: 'AI-Powered Assistance',
        description:
            'Get step-by-step help through the application process with our AI-powered chatbot, providing guidance and answering questions in real-time.',
        icon: ArrowPathIcon,
    },
    {
        name: 'Secure Application Process',
        description:
            'Advanced security protocols protect your information, ensuring safe handling of your DV Lottery data across the app.',
        icon: FingerPrintIcon,
    },
];

export default function ApplicationServices() {
    return (
        <div className="bg-white py-18 sm:py-8">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
                    <h2 className="text-center text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        Key Features for Your DV Lottery Journey
                    </h2>
                    <dl className="mt-12 grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="relative flex flex-col items-center bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                            >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-indigo-600 mb-4">
                                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                                </div>
                                <dt className="text-lg font-semibold text-gray-900 text-center">
                                    {feature.name}
                                </dt>
                                <dd className="mt-2 text-base text-gray-600 text-center">
                                    {feature.description}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
