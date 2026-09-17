import { memo } from "react";
import { valueCards } from "../data";
import { constants } from "../constants";

export const ValueProps = memo(function ValueProps() {
  return (
    <section
      id="features"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-b border-slate-200"
    >
      <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 text-center mb-10 max-w-2xl mx-auto tracking-tight">
        Built for solo builders who'd rather{" "}
        <span className="text-blue-600">ship</span> than manage secrets
      </h2>

      {/* ASCII Art Wrapper */}
      <div
        className="kt-ascii-wrap will-change-transform scale-75 md:scale-100"
        aria-hidden="true"
      >
        <div className="kt-ascii-w2">
          <pre className="kt-ascii-text">
{`                    @@@@@@@@@
               @@@#=:......:=*%@@@
            @@+:.................=@@@
         @@*:.......................*@@
        @*............................*@
      @@:...............................@@     @@@@
     @#..................................#@ @@#...%%
    @%....................................#@*.....#@
   @@.............................................+@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
   @=.........:............................................................................:+@@
  @%......-@#-:-#%-............................................................................%@
  @*.....+%.......#+............................................................................=@
  @+.....%:.......=%.....................=+++++******###########%%%%#########******+++++++=====@@
  @+.....*+.......*#........................:*#=---=====+++++*****#####%%%%%%%%%%%%%#####****@@
  @*......#%:...:%*...............................................==...........:@+.........#@@
  @%........:***-.................................-@@@@@@@-.....=@@@@=.......:%@ @@#....:#@
   @-.............................................-@      @%-.-@@    @@=...:%@      @@@@@@
   @@......................................+:.....-@%       @@@        @@@@@
    @#....................................#@@@#:..-@%
     @#..................................#@    @@%@@
      @@:...............................@@
        @*............................*@
         @@*........................+@@
            @@+:.................=@@@
               @@@*=:......:-+%@@@
                    @@@@@@@@@`}
          </pre>
        </div>
      </div>

      {/* Value Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {valueCards.map((card, idx) => (
          <div
            key={idx}
            className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-md transition-shadow"
          >
            <div
              className={`inline-block text-xs font-bold tracking-wider px-2.5 py-1 rounded-md mb-4 ${card.tagBgClass}`}
            >
              {card.tag}
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2.5">
              {card.title}
            </h3>
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {card.copy}
            </p>
          </div>
        ))}
      </div>

      {/* CTA buttons */}
      <div className="flex mt-12 flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mx-auto w-fit px-12 py-3 shadow-2xl rounded-full border border-orange-100 bg-orange-50">
        <a
          href="#pricing"
          className="w-full sm:w-auto bg-orange-100 text-orange-600 hover:bg-orange-500 hover:text-white px-6 py-3.5 rounded-xl text-base font-bold flex items-center justify-center gap-2.5 transition-colors text-center cursor-pointer"
        >
          Switch to Pro
        </a>
        <a
          href={constants.getUrl()}
          className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white px-7 py-3.5 rounded-xl text-base font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/35 transition-all transform active:scale-95 text-center cursor-pointer"
        >
          Start Free
        </a>
      </div>
    </section>
  );
});
