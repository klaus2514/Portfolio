import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Skills", href: "#skills" },
  { title: "Projects", href: "#projects" },
  { title: "Experience", href: "#experience" },
  { title: "Education", href: "#education" },
  { title: "Contact", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header id="header" className="glassmorphism fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl mx-auto rounded-xl z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold tracking-wider gradient-text">MS</a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-sm font-medium text-zinc-300 hover:text-white transition-colors">{link.title}</a>
            ))}
          </nav>

          <a href="mailto:sharanmanjeet16@gmail.com" className="hidden md:inline-block px-4 py-2 text-sm font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors">
            Hire Me
          </a>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 rounded-md text-zinc-300 hover:text-white hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={handleLinkClick} className="block px-3 py-2 rounded-md text-base font-medium text-zinc-300 hover:text-white hover:bg-zinc-700">{link.title}</a>
          ))}
          <a href="mailto:sharanmanjeet16@gmail.com" className="block px-3 py-3 text-base font-medium text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-colors text-center">
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;