import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A professional, reusable Button component that encapsulates the project's design system.
 * Supports multiple variants, sizes, and icon positions.
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Button label/content
 * @param {string} [props.variant='primary'] - Style variant: 'primary', 'secondary', 'outline', 'ghost', 'dark', 'nav', 'navActive'
 * @param {string} [props.size='md'] - Button size: 'sm', 'md', 'lg'
 * @param {string} [props.to] - Internal Link path (react-router-dom)
 * @param {string} [props.href] - External link URL
 * @param {React.ElementType} [props.icon] - Icon component from react-icons
 * @param {'left'|'right'} [props.iconPosition='right'] - Where to place the icon
 * @param {string} [props.className] - Extra Tailwind classes
 * @param {string} [props.rounded='rounded-xl'] - Rounding style: 'rounded-md', 'rounded-xl', 'rounded-2xl', 'rounded-full'
 */
const Button = ({
    children,
    to,
    href,
    onClick,
    type = 'button',
    variant = 'primary',
    size = 'md',
    rounded = 'rounded-xl',
    className = '',
    icon: Icon,
    iconPosition = 'right',
    target,
    rel,
    ...props
}) => {
    // Base styles used across all buttons
    const baseStyles = `inline-flex items-center justify-center font-bold transition-all duration-300 transform active:scale-95 cursor-pointer ${rounded} group gap-2`;

    // Variant-specific styles
    const variants = {
        primary: "bg-[#2a9fd8] hover:bg-[#2389ba] text-white shadow-lg hover:shadow-[0_15px_40px_rgba(42,159,216,0.3)]",
        secondary: "bg-white/5 hover:bg-white/10 text-white border border-white/10 backdrop-blur-md",
        outline: "border-2 border-slate-100 text-slate-900 hover:border-primary hover:text-primary bg-white shadow-sm",
        dark: "bg-slate-900 text-white shadow-2xl hover:bg-[#2a9fd8]",
        ghost: "text-[#2a9fd8] hover:bg-gray-100",
        nav: "px-5 py-2 font-medium text-sm transition-all duration-300 text-[#2a9fd8] hover:bg-gray-100",
        navActive: "px-5 py-2 font-medium text-sm bg-[#2a9fd8] text-white shadow-md",
        "outline-light": "border-2 border-white text-white hover:bg-white hover:text-slate-900 bg-transparent shadow-sm",
    };

    // Size-specific styles
    const sizes = {
        sm: "px-5 py-2 text-sm",
        md: "md:px-8 px-7 py-3 text-sm md:text-base hover:scale-105",
        lg: "lg:px-12 px-8 py-5 lg:text-xl text-md hover:scale-110",
        hero: "px-10 py-5 text-md font-black hover:scale-105 shadow-xl",
    };

    const combinedStyles = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

    const content = (
        <>
            {Icon && iconPosition === 'left' && <Icon size={size === 'lg' ? 24 : 20} className="transition-transform group-hover:-translate-x-1" />}
            {children}
            {Icon && iconPosition === 'right' && <Icon size={size === 'lg' ? 24 : 20} className="transition-transform group-hover:translate-x-1" />}
        </>
    );

    if (to) {
        return (
            <Link to={to} className={combinedStyles} {...props}>
                {content}
            </Link>
        );
    }

    if (href) {
        return (
            <a href={href} className={combinedStyles} target={target} rel={rel} {...props}>
                {content}
            </a>
        );
    }

    return (
        <button type={type} onClick={onClick} className={combinedStyles} {...props}>
            {content}
        </button>
    );
};

export default Button;
