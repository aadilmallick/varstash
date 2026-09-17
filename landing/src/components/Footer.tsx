import { memo } from "react";
import { constants } from "../constants";

export const Footer = memo(function Footer() {
  return (
    <footer className="py-8 px-4 sm:px-8 lg:px-12 border-t border-slate-200 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-md bg-slate-900 text-white font-extrabold text-xs flex items-center justify-center">
          {constants.appName.charAt(0)}
        </div>
        <span className="text-xs sm:text-sm text-slate-500">
          © 2026 {constants.appName}. All rights reserved.
        </span>
      </div>
      <a
        href={constants.getGithubUrl()}
        target="_blank"
        rel="noreferrer"
        className="text-xs sm:text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
      >
        GitHub
      </a>
    </footer>
  );
});
