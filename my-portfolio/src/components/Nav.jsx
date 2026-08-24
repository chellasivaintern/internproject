import React from "react";
 function Nav() {
    const navItems = [
    { label: "About", href: "#about" },
     { label: "Technologies", href: "#tech" },
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
  ];
    return (
    <div className="bg-gray-50 text-gray-800">
      
      {/* 1. FIXED HEADER */}
      <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50 transition-all">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="font-bold text-xl text-[#005f73]">My Portfolio</span>
          
          <nav>
            <ul className="flex gap-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <a 
                    href={item.href} 
                    className="font-medium hover:text-[#005f73] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header> 
       </div>   
      );
 }

 export default Nav