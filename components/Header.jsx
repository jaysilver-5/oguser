import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Detect Scroll and Adjust Logo Size
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 left-0 w-full bg-[#131313] py-3 px-4 md:px-10 z-50 transition-all">
      <div className="container mx-auto flex items-center justify-between">
        {/* Left Side: Browse & Extras (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center space-x-4">
          {/* Browse Button */}
          <button className="flex items-center px-4 py-2 bg-[#171717] text-white rounded-full font-semibold transition hover:bg-[#222]">
            <i className="fas fa-house mr-2"></i>
            Browse
          </button>

          {/* Extras */}
          <Link href="/extras">
            <div className="text-gray-400 hover:text-white cursor-pointer text-sm font-medium flex items-center">
              <i className="fa-solid fa-ellipsis mr-2"></i> Extras
            </div>
          </Link>
        </div>

        {/* Center: Logo (Shrinks on Scroll) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 transition-all duration-300">
          <Link href="/">
            <img
              src="/ogu-logo.webp"
              alt="OGU Logo"
              className={`transition-all duration-300 ${isScrolled ? 'h-8 md:h-10' : 'h-12 md:h-14'}`}
            />
          </Link>
        </div>

        {/* Right Side: Login & Sign Up */}
        <div className="flex items-center space-x-4">
          <Link href="/login">
            <span className="text-gray-400 hover:text-white cursor-pointer text-sm">Login</span>
          </Link>
          <Link href="/register">
            <button className="bg-blue-600 px-5 py-2 rounded-full text-white font-semibold text-sm transition hover:bg-blue-500">
              Sign Up
            </button>
          </Link>

          {/* Mobile Menu Icon */}
          <button 
            className="md:hidden text-white text-2xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Mobile Dropdown (Only Visible on Small Screens) */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-[#171717] p-4 md:hidden">
            <Link href="/">
              <div className="flex items-center px-4 py-2 hover:bg-[#222] rounded-lg">
                <i className="fas fa-house mr-2"></i>
                Browse
              </div>
            </Link>
            <Link href="/extras">
              <div className="flex items-center px-4 py-2 hover:bg-[#222] rounded-lg">
                <i className="fa-solid fa-ellipsis mr-2"></i> Extras
              </div>
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
