import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import StickyContact from '../components/StickyContact';
import FinalCTA from '../components/Home/FinalCTA';

const MainLayout = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col bg-white overflow-x-hidden">
            <Navbar />
            <main className="flex-grow">
                {children}
            </main>
            <FinalCTA />
            <StickyContact />
            <Footer />
        </div>
    );
};

export default MainLayout;
