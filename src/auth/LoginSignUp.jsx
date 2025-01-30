

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import AuthTab from './AuthTab';
import Breadcrumb from '../components/Breadcrumb';

function LoginSignUp() {
    const [activeTab, setActiveTab] = useState("Sign Up");

    return (
        <>
            <section>
                <div className="relative w-full h-full course-bg">
                    <div className="relative bg-layer">
                        <Navbar />
                        <div className="text-white flex items-center justify-center container mx-auto px-4 pt-16">
                            <h1 className="text-5xl uppercase font-bold">The Sales Enablement Account</h1>
                        </div>
                        <div className="text-white flex items-center justify-center container mx-auto px-4 pt-10 pb-20">
                            <Breadcrumb breadcrumbs={[{ label: 'Home', to: '/' }, { label: activeTab }]} />
                        </div>
                    </div>
                </div>
            </section>

            <div className='container mx-auto px-4 '>

                <AuthTab activeTab={activeTab} setActiveTab={setActiveTab} />
            </div>
        </>
    );
}

export default LoginSignUp;
