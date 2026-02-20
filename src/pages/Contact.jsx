import React from 'react';
import ContactSection from '../components/Contact/ContactSection';
import MapSection from '../components/Contact/MapSection';

const Contact = () => {
    return (
        <div className="pt-24 pb-12 bg-white">
            <div className="container mx-auto px-4">
                <ContactSection />
                <MapSection />
            </div>
        </div>
    );
};

export default Contact;
