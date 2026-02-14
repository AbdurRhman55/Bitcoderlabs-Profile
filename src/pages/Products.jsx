import React from 'react';

const Products = () => {
    return (
        <div className="bg-white min-h-screen py-24 px-6">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-5xl font-extrabold text-[#2a9fd8] text-center mb-16">Our Products</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="p-10 rounded-3xl bg-[#eef2f4ff] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="w-20 h-20 bg-white rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl shadow-sm">
                                🚀
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Product v{i}.0</h3>
                            <p className="text-gray-600 mb-6">Innovative software solution designed for enterprise-level efficiency.</p>
                            <button className="text-[#2a9fd8] font-bold hover:underline">View Features</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
