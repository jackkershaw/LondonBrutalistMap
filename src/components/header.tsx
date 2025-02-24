import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";

function Header() {
  const headerRef = useRef<HTMLElement>(null);

  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isOpen && !headerRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 640 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed left-0 right-0 top-0 z-50 bg-white sm:relative sm:bg-transparent"
    >
      <div className="flex items-center justify-center space-x-5 py-10 sm:justify-between">
        <Link to="/">
          <h1 className="text-3xl font-bold">London Brutalist Map</h1>
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex space-x-4 text-xl">
            <li>
              <Link to="/" className="rounded-md px-3 py-2">
                Map
              </Link>
            </li>
            <li>
              <Link to="/building-index" className="rounded-md px-3 py-2">
                Buildings
              </Link>
            </li>
            <li>
              <Link to="/about" className="rounded-md px-3 py-2">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="focus:outline-none sm:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="menu button"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <Link to="/" className="block rounded-md px-3 py-2">
              Map
            </Link>
            <Link to="/building-index" className="block rounded-md px-3 py-2">
              Buildings
            </Link>{" "}
            <Link to="/about" className="block rounded-md px-3 py-2">
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
