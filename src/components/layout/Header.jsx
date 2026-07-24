import { useEffect, useState } from "react";
import Button from "../common/Button";

const navLinks = [
  { text: "Retreats", href: "/retreats" },
  { text: "Spiritual Direction", href: "/direction" },
  { text: "Sacred Spaces", href: "/spaces" },
  { text: "Resources", href: "/resources" },
  { text: "Connect", href: "/connect" },
];

function Header({ isDark, onToggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 border-b transition-all duration-500 ${
        isScrolled
          ? "border-stone-200/80 bg-white/95 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-coffee-950/95"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-8">
        <nav className="flex h-24 items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="flex size-12 items-center justify-center rounded-full bg-primary-600">
              <svg
                className="h-6 w-6 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v18m0-18c-4 3-6 6-6 9a6 6 0 0012 0c0-3-2-6-6-9z"
                />
              </svg>
            </div>

            <div className="flex flex-col">
              <span
                className={`font-serif text-xl font-semibold tracking-wide transition-colors ${
                  isScrolled
                    ? "text-header-title dark:text-white"
                    : "text-white"
                }`}
              >
                Stillwater Retreat
              </span>

              <span
                className={`text-xs tracking-widest transition-colors ${
                  isScrolled
                    ? "text-header-muted dark:text-stone-400"
                    : "text-stone-300"
                }`}
              >
                A Sanctuary for the Soul
              </span>
            </div>
          </a>

          <div className="flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.text}>
                  <a
                    href={link.href}
                    className={`text-sm font-medium tracking-wide transition-colors ${
                      isScrolled
                        ? "text-header-link hover:text-primary-600 dark:text-stone-300 dark:hover:text-primary-400"
                        : "text-white/90 hover:text-white"
                    }`}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>

            <button
              type="button"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
              onClick={onToggleTheme}
              className={`rounded-full p-2 transition-colors ${
                isScrolled
                  ? "text-header-muted hover:bg-header-icon-bg hover:text-header-link dark:text-stone-400 dark:hover:bg-header-icon-dark-bg dark:hover:text-header-icon-dark"
                  : "text-white/80 hover:bg-white/10 hover:text-white"
              }`}
            >
              {isDark ? (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m8.66-10h-1M4.34 12h-1m15.07 6.36-.7-.7M6.34 6.34l-.7-.7m12.02 0-.7.7M6.34 17.66l-.7.7M12 8a4 4 0 100 8 4 4 0 000-8z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
              )}
            </button>

            <Button href="/retreats" variant="primaryHeader">
              Book a Retreat
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
