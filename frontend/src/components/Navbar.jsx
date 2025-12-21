import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Achievements", href: "#achievements" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      // If element not found, wait a bit and try again (for lazy-loaded sections)
      setTimeout(() => {
        const retryElement = document.querySelector(href);
        if (retryElement) {
          retryElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    }
  };

  return (
    <>
      <nav className="fixed w-full z-50 py-3 bg-background/80 backdrop-blur-md shadow-xs">
        <div className="container flex items-center justify-between gap-2 sm:gap-4">
          <a
            className="text-base sm:text-lg md:text-xl font-bold text-primary flex items-center flex-shrink-0 relative z-50"
            href="#hero"
            onClick={(e) => handleNavClick(e, "#hero")}
          >
            <span className="relative z-10">
              <span className="text-foreground">Bharanidharan</span>
              <span className="hidden sm:inline"> Portfolio</span>
            </span>
          </a>

          {/* desktop nav */}
          <div className="hidden md:flex gap-6 items-center">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-foreground/80 hover:text-primary"
              >
                {item.label}
              </a>
            ))}
            <ThemeToggle />
          </div>

          {/* mobile nav */}
          <div className="flex items-center gap-2 md:hidden relative z-50">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="p-2 text-foreground"
              aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/98 backdrop-blur-lg z-40 flex flex-col items-center justify-center md:hidden transition-opacity duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
