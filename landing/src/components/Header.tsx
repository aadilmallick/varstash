import { memo } from "react";
import { constants } from "../constants";
import { navLinks } from "../data";

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean | ((prev: boolean) => boolean)) => void;
}

export const Header = memo(function Header({
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-slate-50/90 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-slate-900 text-white font-extrabold flex items-center justify-center text-base shadow-sm">
            {constants.appName.charAt(0)}
          </div>
          <span className="font-extrabold text-xl text-slate-900 tracking-tight">
            {constants.appName}
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center gap-8"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={constants.getUrl()}
            className="border border-slate-200 bg-white text-slate-900 hover:bg-slate-50 px-4 py-2 rounded-lg text-sm font-semibold transition-colors shadow-xs"
          >
            Launch App
          </a>
          <a
            href="#pricing"
            className="bg-orange-500 hover:bg-orange-600 text-white px-4.5 py-2 rounded-lg text-sm font-bold shadow-sm transition-colors"
          >
            Get Started Free
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
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
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-5 space-y-3 shadow-lg">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-700 hover:text-slate-900 py-1.5 px-2 rounded-md hover:bg-slate-50"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href={constants.getUrl()}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center border border-slate-200 bg-white text-slate-900 py-2.5 rounded-lg text-sm font-semibold"
            >
              Launch App
            </a>
            <a
              href={constants.getUrl()}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-orange-500 text-white py-2.5 rounded-lg text-sm font-bold shadow-sm"
            >
              Get Started Free
            </a>
          </div>
        </div>
      )}
    </header>
  );
});
