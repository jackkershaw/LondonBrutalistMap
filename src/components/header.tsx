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
      className="fixed top-0 left-0 right-0 z-50 bg-white sm:bg-transparent sm:relative"
    >
      <div className="flex justify-center sm:justify-between items-center space-x-5 py-10">
        <Link to="/">
          <h1 className="text-3xl font-bold">London Brutalist Map</h1>
        </Link>
        <nav className="hidden sm:block">
          <ul className="flex space-x-4 text-xl">
            <li>
              <Link to="/" className=" px-3 py-2 rounded-md">
                Map
              </Link>
            </li>
            <li>
              <Link to="/building-index" className="px-3 py-2 rounded-md">
                Buildings
              </Link>
            </li>
            <li>
              <Link to="/about" className="  px-3 py-2 rounded-md">
                About
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="sm:hidden  focus:outline-none"
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
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block   px-3 py-2 rounded-md">
              Map
            </Link>
            <Link to="/building-index" className="block   px-3 py-2 rounded-md">
              Buildings
            </Link>{" "}
            <Link to="/about" className="block   px-3 py-2 rounded-md">
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
