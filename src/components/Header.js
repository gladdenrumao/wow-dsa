import React from "react";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();

  return (
    <header className="header">
      <h1>DSA Prime</h1>
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
