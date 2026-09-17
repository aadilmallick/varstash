import { memo } from "react";
import { Link } from "react-router-dom";
import { constants } from "../constants";
import { navLinks } from "../data";
import { cn } from "../lib/utils";

interface HeaderProps {
  isDark?: boolean;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
}

export const Header = memo(function Header({
  isDark = false,
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps) {
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full backdrop-blur-md transition-colors duration-200 border-b",
        isDark
          ? "bg-slate-900/90 border-slate-800 text-slate-100"
          : "bg-slate-50/90 border-slate-200 text-slate-900"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div
            className={cn(
              "w-8 h-8 rounded-lg font-extrabold flex items-center justify-center text-base shadow-sm group-hover:scale-105 transition-all",
              isDark
                ? "bg-orange-500 text-white shadow-orange-500/20"
                : "bg-slate-900 text-white"
            )}
          >
            {constants.appName.charAt(0)}
          </div>
          <span
            className={cn(
              "font-extrabold text-xl tracking-tight transition-colors",
              isDark ? "text-white" : "text-slate-900"
            )}
          >
            {constants.appName}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors",
                isDark
                  ? "text-slate-300 hover:text-white"
                  : "text-slate-600 hover:text-slate-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={constants.getUrl()}
            className={cn(
              "px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-xs border",
              isDark
                ? "border-slate-700 bg-slate-800/90 text-slate-200 hover:bg-slate-700 hover:text-white"
                : "border-slate-200 bg-white text-slate-900 hover:bg-slate-50"
            )}
          >
            Launch App
          </a>
          <Link
            to="/#pricing"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4.5 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors"
          >
            Get Started Free
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className={cn(
            "md:hidden p-2 focus:outline-none transition-colors",
            isDark
              ? "text-slate-300 hover:text-white"
              : "text-slate-600 hover:text-slate-900"
          )}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileMenuOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div
          className={cn(
            "md:hidden border-b px-4 pt-3 pb-5 space-y-3 shadow-xl transition-colors",
            isDark
              ? "bg-slate-900 border-slate-800"
              : "bg-white border-slate-200"
          )}
        >
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "text-base font-medium py-1.5 px-2 rounded-md transition-colors",
                  isDark
                    ? "text-slate-200 hover:text-white hover:bg-slate-800"
                    : "text-slate-700 hover:text-slate-900 hover:bg-slate-50"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={constants.getUrl()}
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "w-full text-center py-2.5 rounded-lg text-sm font-semibold border transition-colors",
                isDark
                  ? "border-slate-700 bg-slate-800 text-white hover:bg-slate-700"
                  : "border-slate-200 bg-white text-slate-900"
              )}
            >
              Launch App
            </a>
            <Link
              to="/#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-orange-500 text-white py-2.5 rounded-lg text-sm font-bold shadow-sm"
            >
              Get Started Free
            </Link>
          </div>
        </div>
      )}
    </header>
  );
});

export default Header;
