import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import OpenWhen from '../components/OpenWhen';

const EmergencyKit = () => {
    return (
        <div className="min-h-screen bg-dreamy-100 py-10 px-4">
            <Link to="/" className="inline-flex items-center text-dreamy-600 hover:text-dreamy-800 transition-colors mb-8 font-surreal text-lg">
                <ArrowLeft className="mr-2" /> Back to Home
            </Link>

            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-handwriting text-dreamy-600 mb-4">
                    Emergency Kit
                </h1>
                <p className="text-slate-600 font-surreal text-xl">
                    For my favourite human ♥
                </p>
            </div>

            <OpenWhen />
        </div>
    );
};

export default EmergencyKit;
