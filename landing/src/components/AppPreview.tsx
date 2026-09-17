import { memo } from "react";

export const AppPreview = memo(function AppPreview() {
  return (
    <section
      id="live-spend"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center"
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mb-10 tracking-tight">
        Excalidraw <span className="text-orange-500">Simplicity</span>.
        Enterprise <span className="text-emerald-600">Encryption</span>.
      </h2>

      <div className="max-w-6xl mx-auto bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-left">
        {/* Top Window Chrome */}
        <div className="h-11 bg-slate-50 border-b border-slate-200 flex items-center gap-2 px-4.5">
          <div className="w-3 h-3 rounded-full bg-red-400 opacity-60" />
          <div className="w-3 h-3 rounded-full bg-amber-400 opacity-60" />
          <div className="w-3 h-3 rounded-full bg-emerald-400 opacity-60" />
        </div>

        {/* Window Body */}
        <div className="flex flex-col md:flex-row min-h-[520px]">
          {/* Sidebar */}
          <div className="w-full md:w-64 bg-slate-50 border-b md:border-b-0 md:border-r border-slate-200 p-5 md:p-6 flex flex-col">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-slate-400 tracking-wider">
                PROFILE
              </span>
              <div className="w-4 h-4 rounded border border-slate-300" />
            </div>
            <div className="flex justify-between items-baseline mb-1">
              <span className="text-lg font-extrabold text-slate-900">
                projects
              </span>
              <span className="bg-emerald-50 text-emerald-700 text-[11px] font-bold px-2 py-0.5 rounded-full border border-emerald-200">
                Active
              </span>
            </div>
            <p className="text-xs text-slate-400 mb-5">2 folders • 7 secrets</p>

            <div className="h-px bg-slate-200 mb-5" />

            <div className="flex justify-between items-center mb-3">
              <span className="text-xs font-bold text-slate-500 tracking-wider">
                FOLDERS
              </span>
              <button
                type="button"
                aria-label="Add folder"
                className="w-5 h-5 rounded border border-slate-300 text-slate-500 text-xs flex items-center justify-center hover:bg-slate-100"
              >
                +
              </button>
            </div>

            <div className="flex items-center gap-2 text-slate-600 text-sm p-2 rounded-lg mb-1">
              <span className="w-2 h-2 rounded-xs bg-slate-300" />
              <span>default</span>
              <span className="text-slate-400 ml-auto">0</span>
            </div>
            <div className="flex items-center gap-2 bg-blue-50 text-blue-600 font-semibold text-sm p-2 rounded-lg">
              <span className="w-2 h-2 rounded-xs bg-blue-500" />
              <span>link-shortener</span>
              <span className="text-blue-400 ml-auto">7</span>
            </div>

            <div className="mt-auto pt-6">
              <div className="bg-slate-900 text-slate-200 rounded-xl p-3 flex items-center gap-2.5">
                <span className="text-sm">🔒</span>
                <span className="text-xs font-semibold">
                  Encrypted at rest, client-side
                </span>
              </div>
            </div>
          </div>

          {/* Main Content Pane */}
          <div className="flex-1 p-5 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                <div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    link-shortener
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Profile: projects
                  </p>
                </div>
                <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-lg border border-emerald-200/70 self-start sm:self-auto">
                  🔒 E2E Encrypted
                </span>
              </div>

              {/* Toolbar Buttons */}
              <div className="flex flex-wrap gap-2.5 mb-6">
                <span className="bg-orange-500 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-xs cursor-pointer">
                  ↓ Import Secrets
                </span>
                <span className="bg-emerald-600 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-xs cursor-pointer">
                  ↓ Import Env File
                </span>
                <span className="bg-blue-600 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-xs cursor-pointer">
                  ↑ Export All Profiles
                </span>
                <span className="bg-white text-slate-700 border border-slate-200 text-xs font-semibold px-3.5 py-2 rounded-lg shadow-xs cursor-pointer">
                  Export Folder
                </span>
                <span className="bg-slate-900 text-white text-xs font-semibold px-3.5 py-2 rounded-lg shadow-xs cursor-pointer">
                  + Add Secret
                </span>
              </div>

              <div className="w-full border border-slate-200 rounded-lg px-4 py-2.5 text-slate-400 text-xs sm:text-sm mb-6 bg-slate-50/50">
                Search secrets...
              </div>

              {/* Spend Bars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex justify-between text-xs text-slate-600 mb-2">
                    <span>OpenAI API Spend</span>
                    <span className="font-bold text-slate-900">
                      $142.50 / $200 cap
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-[71%] h-full bg-orange-500" />
                  </div>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
                  <div className="flex justify-between text-xs text-slate-600 mb-2">
                    <span>Anthropic API Spend</span>
                    <span className="font-bold text-slate-900">
                      $58.00 / $150 cap
                    </span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="w-[39%] h-full bg-emerald-500" />
                  </div>
                </div>
              </div>

              {/* Secret Card Items */}
              <div className="space-y-3">
                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-slate-900 text-sm">
                      GOOGLE_CLIENT_SECRET
                    </span>
                    <div className="flex gap-1.5">
                      <span className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                        ✎
                      </span>
                      <span className="w-7 h-7 rounded-md border border-red-200 flex items-center justify-center text-red-500 text-xs">
                        🗑
                      </span>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-slate-400 bg-slate-50 rounded-md px-3 py-1.5 my-2 tracking-widest">
                    ••••••••••••••••
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Created 6/1/2026 • Updated 6/1/2026
                  </div>
                </div>

                <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-xs">
                  <div className="flex justify-between items-start">
                    <span className="font-bold text-slate-900 text-sm">
                      GOOGLE_CLIENT_ID
                    </span>
                    <div className="flex gap-1.5">
                      <span className="w-7 h-7 rounded-md border border-slate-200 flex items-center justify-center text-slate-400 text-xs">
                        ✎
                      </span>
                      <span className="w-7 h-7 rounded-md border border-red-200 flex items-center justify-center text-red-500 text-xs">
                        🗑
                      </span>
                    </div>
                  </div>
                  <div className="font-mono text-xs text-slate-400 bg-slate-50 rounded-md px-3 py-1.5 my-2 tracking-widest">
                    ••••••••••••••••
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Created 6/1/2026 • Updated 6/1/2026
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});
