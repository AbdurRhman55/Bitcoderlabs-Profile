import React from 'react';
import Slide from './Slide';
import NavigationDots from './NavigationDots';

const LeadershipSlider = ({ messages, activeSlide, onSlideChange }) => {
    return (
        <div className="relative bg-white rounded-3xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden ">
            {/* Slider Container */}
            <div className="relative h-[700px] md:h-[600px] max-w-7xl mx-auto lg:h-[500px] overflow-hidden">
                {messages.map((message, index) => (
                    <div
                        key={message.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <Slide
                            message={message}
                            isActive={index === activeSlide}
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Dots */}
            <NavigationDots
                count={messages.length}
                activeIndex={activeSlide}
                onChange={onSlideChange}
                messages={messages}
            />
        </div>
    );
};

export default LeadershipSlider;
