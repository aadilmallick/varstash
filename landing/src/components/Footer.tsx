import { memo } from "react";
import { Link } from "react-router-dom";
import { constants } from "../constants";
import { cn } from "../lib/utils";

interface FooterProps {
  isDark?: boolean;
}

export const Footer = memo(function Footer({ isDark = false }: FooterProps) {
  return (
    <footer
      className={cn(
        "border-t py-12 px-4 sm:px-8 lg:px-12 transition-colors duration-200",
        isDark
          ? "bg-slate-950/90 border-slate-800 text-slate-400"
          : "bg-white/70 border-slate-200 text-slate-600"
      )}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand and Copyright */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link to="/" className="flex items-center gap-2 group">
            <div
              className={cn(
                "w-7 h-7 rounded-md font-extrabold text-xs flex items-center justify-center transition-all group-hover:scale-105",
                isDark
                  ? "bg-orange-500 text-white shadow-xs"
                  : "bg-slate-900 text-white"
              )}
            >
              {constants.appName.charAt(0)}
            </div>
            <span
              className={cn(
                "font-bold text-sm transition-colors",
                isDark ? "text-white" : "text-slate-900"
              )}
            >
              {constants.appName}
            </span>
          </Link>
          <span
            className={cn(
              "text-xs transition-colors",
              isDark ? "text-slate-500" : "text-slate-500"
            )}
          >
            © 2026 {constants.appName}. Local-first, zero-knowledge secret management.
          </span>
        </div>

        {/* Links Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm font-medium">
          <Link
            to="/#features"
            className={cn(
              "transition-colors",
              isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            )}
          >
            Features
          </Link>
          <Link
            to="/#how-it-works"
            className={cn(
              "transition-colors",
              isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            )}
          >
            How It Works
          </Link>
          <Link
            to="/#pricing"
            className={cn(
              "transition-colors",
              isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            )}
          >
            Pricing
          </Link>
          <Link
            to="/roadmap"
            className={cn(
              "transition-colors",
              isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            )}
          >
            Roadmap
          </Link>
          <Link
            to="/about"
            className={cn(
              "transition-colors",
              isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            )}
          >
            About
          </Link>
          <Link
            to="/privacy-policy"
            className={cn(
              "transition-colors",
              isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            )}
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms-of-service"
            className={cn(
              "transition-colors",
              isDark ? "text-slate-400 hover:text-white" : "text-slate-600 hover:text-slate-900"
            )}
          >
            Terms of Service
          </Link>
          <a
            href={constants.getGithubUrl()}
            target="_blank"
            rel="noreferrer"
            className={cn(
              "font-semibold transition-colors inline-flex items-center gap-1",
              isDark ? "text-slate-200 hover:text-orange-400" : "text-slate-800 hover:text-orange-600"
            )}
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
