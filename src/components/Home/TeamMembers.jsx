import React, { useState, useEffect, useRef, useCallback } from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const TeamMembers = () => {
    const developers = [
        {
            id: 1,
            image: '/Abdur Rahman.jpeg',
            name: 'Abdur Rahman',
            role: 'React Developer',
            linkedin: 'https://www.linkedin.com/in/abdur-rahman-web/',
            github: 'https://github.com/AbdurRhman55'
        },
        {
            id: 2,
            image: '/Ahmad.jpeg',
            name: 'Ahmad Khan',
            role: 'App Developer',
            linkedin: 'https://www.linkedin.com/in/m-ahmad311/',
            github: 'https://github.com/M-Ahmad-ma'
        },
        {
            id: 3,
            image: '/Mahnoor Azeem.jpg',
            name: 'Mahnoor Azeem',
            role: 'UI/UX Designer',
            linkedin: 'https://www.linkedin.com/in/azeem-mahnoor/',
            github: '#'
        },
        {
            id: 4,
            image: '/Shah Fahad.jpeg',
            name: 'Shah Fahad',
            role: 'PHP & Laravel Developer',
            linkedin: 'https://www.linkedin.com/in/shah-fahad-957703262/',
            github: 'https://github.com/Shah-Fahad124'
        },
        {
            id: 5,
            image: '/Irfan.jpeg',
            name: 'Irfan',
            role: 'Back End Developer',
            linkedin: '',
            github: 'https://github.com/laradev220'
        },
    ];

    const PIXELS_PER_CARD = window.innerWidth < 768 ? 200 : 350;
    const AUTO_SLIDE_INTERVAL = 4000;
    const MAX_VELOCITY = 3;
    const MOMENTUM_FRICTION = 0.88;

    // Refs for drag state (avoids stale closures)
    const floatIndexRef = useRef(0);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const lastX = useRef(0);
    const velocity = useRef(0);
    const lastTime = useRef(0);
    const baseIndex = useRef(0);
    const autoSlideRef = useRef(null);
    const carouselRef = useRef(null);
    const momentumRef = useRef(null);
    const dragRafRef = useRef(null);
    const isAutoSliding = useRef(false);
    const [, forceRender] = useState(0);

    const triggerRender = useCallback(() => forceRender((t) => t + 1), []);

    const updateIndex = useCallback((val) => {
        floatIndexRef.current = typeof val === 'function' ? val(floatIndexRef.current) : val;
        triggerRender();
    }, [triggerRender]);

    const wrapIndex = useCallback((idx) => {
        const t = developers.length;
        return ((idx % t) + t) % t;
    }, [developers.length]);

    // Auto-slide controls
    const startAutoSlide = useCallback(() => {
        if (autoSlideRef.current) clearInterval(autoSlideRef.current);
        autoSlideRef.current = setInterval(() => {
            isAutoSliding.current = true;
            updateIndex((p) => p + 1);
            setTimeout(() => { isAutoSliding.current = false; }, 1000);
        }, AUTO_SLIDE_INTERVAL);
    }, [updateIndex]);

    const stopAutoSlide = useCallback(() => {
        if (autoSlideRef.current) { clearInterval(autoSlideRef.current); autoSlideRef.current = null; }
    }, []);

    const stopMomentum = useCallback(() => {
        if (momentumRef.current) { cancelAnimationFrame(momentumRef.current); momentumRef.current = null; }
    }, []);

    useEffect(() => {
        startAutoSlide();
        const handleResize = () => triggerRender();
        window.addEventListener('resize', handleResize);
        return () => {
            stopAutoSlide();
            stopMomentum();
            window.removeEventListener('resize', handleResize);
        };
    }, [startAutoSlide, stopAutoSlide, stopMomentum, triggerRender]);

    // Drag handlers
    const onDown = useCallback((e) => {
        isDragging.current = true;
        stopMomentum();
        stopAutoSlide();
        if (dragRafRef.current) cancelAnimationFrame(dragRafRef.current);
        const x = e.clientX ?? 0;
        startX.current = x;
        lastX.current = x;
        lastTime.current = Date.now();
        velocity.current = 0;
        baseIndex.current = floatIndexRef.current;
    }, [stopAutoSlide, stopMomentum]);

    const onMove = useCallback((e) => {
        if (!isDragging.current) return;
        const x = e.clientX ?? 0;
        const now = Date.now();
        const dt = now - lastTime.current;

        if (dt > 0) {
            const instant = (-(x - lastX.current) / PIXELS_PER_CARD) / dt * 1000;
            velocity.current = Math.max(-MAX_VELOCITY, Math.min(MAX_VELOCITY, velocity.current * 0.8 + instant * 0.2));
        }
        lastX.current = x;
        lastTime.current = now;

        if (dragRafRef.current) cancelAnimationFrame(dragRafRef.current);
        dragRafRef.current = requestAnimationFrame(() => {
            updateIndex(baseIndex.current + (-(x - startX.current) / PIXELS_PER_CARD));
        });
    }, [updateIndex]);

    const onUp = useCallback(() => {
        if (!isDragging.current) return;
        isDragging.current = false;
        if (dragRafRef.current) cancelAnimationFrame(dragRafRef.current);

        const vel = velocity.current;
        if (Math.abs(vel) > 0.5) {
            let v = vel;
            let last = performance.now();
            const animate = (now) => {
                v *= MOMENTUM_FRICTION;
                updateIndex((p) => p + v * ((now - last) / 1000));
                last = now;
                if (Math.abs(v) > 0.2) {
                    momentumRef.current = requestAnimationFrame(animate);
                } else {
                    updateIndex((p) => Math.round(p));
                    setTimeout(startAutoSlide, 2500);
                }
            };
            momentumRef.current = requestAnimationFrame(animate);
        } else {
            updateIndex((p) => Math.round(p));
            setTimeout(startAutoSlide, 2500);
        }
    }, [startAutoSlide, updateIndex]);

    // Event listeners
    useEffect(() => {
        const el = carouselRef.current;
        if (!el) return;
        const md = (e) => { e.preventDefault(); onDown(e); };
        const mm = (e) => onMove(e);
        const mu = () => onUp();
        const ts = (e) => onDown(e.touches[0]);
        const tm = (e) => onMove(e.touches[0]);
        const te = () => onUp();

        el.addEventListener('mousedown', md);
        window.addEventListener('mousemove', mm);
        window.addEventListener('mouseup', mu);
        el.addEventListener('touchstart', ts, { passive: true });
        window.addEventListener('touchmove', tm, { passive: true });
        window.addEventListener('touchend', te);

        return () => {
            el.removeEventListener('mousedown', md);
            window.removeEventListener('mousemove', mm);
            window.removeEventListener('mouseup', mu);
            el.removeEventListener('touchstart', ts);
            window.removeEventListener('touchmove', tm);
            window.removeEventListener('touchend', te);
        };
    }, [onDown, onMove, onUp]);

    const activeIndex = Math.round(wrapIndex(floatIndexRef.current));

    const getCardStyle = (index) => {
        const total = developers.length;
        const cur = floatIndexRef.current;
        const frac = cur - Math.floor(cur);
        const floor = wrapIndex(Math.floor(cur));
        let diff = index - floor;
        if (diff > total / 2) diff -= total;
        if (diff < -total / 2) diff += total;
        const d = diff - frac;
        const abs = Math.abs(d);
        const isMobile = window.innerWidth < 768;
        const spacing = isMobile ? window.innerWidth : 300;
        const depth = isMobile ? 0 : 120;
        const rotation = isMobile ? 0 : 25;
        // Snap faster (0.4s) than auto-slide (0.8s) for better tactile feedback
        const transition = isDragging.current ? '0.12s' : (momentumRef.current ? '0.06s' : isAutoSliding.current ? '0.8s' : '0.4s');

        // On mobile, only show the active card (and the one transitioning)
        const opacity = isMobile
            ? (abs > 0.95 ? 0 : 1)
            : Math.max(0, 1 - abs * 0.25);

        const scale = isMobile
            ? (abs > 0.95 ? 0.9 : 1)
            : Math.max(0.5, 1 - abs * 0.08);

        return {
            transform: `translateX(${d * spacing}px) translateZ(${-abs * depth}px) rotateY(${-d * rotation}deg) scale(${scale})`,
            opacity: opacity,
            zIndex: 10 - Math.round(abs),
            transition: `all ${transition} cubic-bezier(0.23, 1, 0.32, 1)`,
            willChange: 'transform, opacity',
        };
    };

    return (
        <section className="w-full bg-[#fdfcf6]  py-6 md:py-12 overflow-hidden font-sans">
            <div className="max-w-7xl mx-auto lg:px-12 px-3">
                {/* Header Section */}
                <div className="space-y-6 text-center">
                    <div className="inline-block">
                        <div className="flex items-center justify-center gap-2 mb-3">
                            <span className="text-xs font-bold text-[#2a9fd8] uppercase tracking-[0.2em]">Our Team</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-[#1e293b] tracking-tighter uppercase leading-none">
                            Meet The <br />
                            <span className="text-gray-300 italic">Experts</span>
                        </h2>
                    </div>
                    <p className="text-sm md:text-base text-gray-400 font-medium uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                        The brilliant minds behind our innovative solutions, dedicated to delivering excellence in every project.
                    </p>
                </div>

                {/* Team Carousel */}
                <div
                    ref={carouselRef}
                    className="w-full relative flex justify-center items-center [perspective:2000px] h-[450px] md:h-[550px] overflow-visible select-none"
                    style={{ cursor: isDragging.current ? 'grabbing' : 'grab' }}
                >
                    <div className="relative w-full h-full [transform-style:preserve-3d] flex justify-center items-center">
                        {developers.map((dev, index) => {
                            const isActive = index === activeIndex && !isDragging.current;
                            return (
                                <div
                                    key={dev.id}
                                    className="absolute [transform-style:preserve-3d]"
                                    style={getCardStyle(index)}
                                >
                                    <div className="relative w-[80px] h-[440px] md:w-[280px] md:h-[460px] rounded-[40px] p-[2px] bg-gradient-to-br from-[#2a9fd8]/40 to-transparent shadow-2xl overflow-hidden backdrop-blur-sm">
                                        <div className="w-full h-full rounded-[38px] overflow-hidden bg-white relative group">
                                            <img
                                                src={dev.image}
                                                alt={dev.name}
                                                className="w-full h-full object-cover transition-transform duration-1000"
                                                draggable={false}
                                            />

                                            <div className={`absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                                                <div className={`absolute inset-0 p-4 md:p-8 flex flex-col justify-end transform transition-all duration-1000 ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                                                    <h4 className="text-lg md:text-2xl font-black text-white mb-1 leading-tight">{dev.name}</h4>
                                                    <p className="text-[#2a9fd8] font-bold text-[10px] md:text-sm uppercase tracking-widest mb-3">{dev.role}</p>

                                                    <div className="flex items-center gap-2 md:gap-4">
                                                        <div className="flex items-center gap-1 md:gap-2">
                                                            <a href={dev.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-[#2a9fd8] transition-colors border border-white/10">
                                                                <FaLinkedin size={16} className="text-white" />
                                                            </a>
                                                            <a href={dev.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-gray-700 transition-colors border border-white/10">
                                                                <FaGithub size={16} className="text-white" />
                                                            </a>
                                                        </div>
                                                        <div className="ml-auto">
                                                            <div className="px-2 md:px-3 py-1 bg-[#2a9fd8]/20 border border-[#2a9fd8]/30 rounded-full text-[7px] md:text-[9px] font-black text-[#2a9fd8] uppercase tracking-tighter">Verified Expert</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {!isActive && (
                                                <div className="absolute inset-0 bg-[#2a9fd8]/5 opacity-30 pointer-events-none"></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamMembers;
