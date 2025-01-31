import React from 'react';
import Nav from '../components/Nav';
import Heroo from '../components/Heroo';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="w-full">
            <div className="bg-gray-50 relative h-[800px]">
                {/* Glowing Gradient Border with Teal and Cyan */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-100 via-cyan-200 to-cyan-100 opacity-60 rounded-lg blur-md"></div>
                <div className="relative z-10">
                    <Nav />
                    <Heroo />
                </div>
            </div>
            <div className='bg-black w-full'>
                <Features />
                <Footer />
            </div>
        </div>
    );
};

export default Home;
