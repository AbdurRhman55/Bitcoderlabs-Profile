import React from 'react';
import Hero from '../components/Products/Hero';
import Industries from '../components/Products/Industries';
import Portfolio from '../components/Products/Portfolio';

const Products = () => {
    return (
        <div className="bg-white">
            <Hero />
            <Industries />
            <Portfolio />
        </div>
    );
};

export default Products;
