import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <div className="logo-container" onClick={() => router.push("/")} style={{ cursor: 'pointer' }}>
        <img src="/wowdsalogo.jpeg" alt="WOW DSA Logo" className="header-logo" />
      </div>
      <h1 className="header-title">WOW DSA</h1>
      <button 
        onClick={() => router.push("/compiler")}
        className="compiler-button"
      >
        <span className="compiler-icon">⚡</span>
        Compiler
      </button>
    </header>
  );
};

export default Header;
