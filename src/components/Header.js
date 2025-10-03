import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useTheme } from "@/context/ThemeContext";

const Header = () => {
  const router = useRouter();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCompilerClick = () => {
    router.push("/compiler");
    setIsMenuOpen(false);
  };

  const handleThemeToggle = () => {
    toggleTheme();
    setIsMenuOpen(false);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="header">
      <div className="logo-container" onClick={() => router.push("/")} style={{ cursor: 'pointer' }}>
        <img src="/wowdsalogo.jpeg" alt="WOW DSA Logo" className="header-logo" />
      </div>
      <h1 className="header-title">WOW DSA</h1>
      
      {/* Desktop buttons */}
      <div className="header-actions desktop-only">
        <button 
          onClick={toggleTheme}
          className="theme-toggle-button"
          aria-label="Toggle theme"
        >
          <span className="theme-icon">{theme === "light" ? "🌙" : "☀️"}</span>
        </button>
        <button 
          onClick={() => router.push("/compiler")}
          className="compiler-button"
        >
          <span className="compiler-icon">⚡</span>
          Compiler
        </button>
      </div>

      {/* Hamburger menu for mobile */}
      <div className="mobile-menu-container mobile-only" ref={menuRef}>
        <button 
          className="hamburger-button"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className={`hamburger-icon ${isMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button>

        {/* Mobile menu dropdown */}
        {isMenuOpen && (
          <div className="mobile-menu">
            <button 
              onClick={handleThemeToggle}
              className="mobile-menu-item"
            >
              <span className="theme-icon">{theme === "light" ? "🌙" : "☀️"}</span>
              <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
            </button>
            <button 
              onClick={handleCompilerClick}
              className="mobile-menu-item"
            >
              <span className="compiler-icon">⚡</span>
              <span>Compiler</span>
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
