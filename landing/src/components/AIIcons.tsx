import React from "react";
import { cn } from "../lib/utils";
import { Anthropic, Fal, OpenAI, OpenRouter } from "@lobehub/icons";

const IconsCycle = [
    {
        name: "Anthropic",
        Icon: Anthropic,
        colorClass: "text-amber-600 group-hover:text-amber-700",
        bgGlow: "group-hover:shadow-amber-500/20",
        angle: 0,
    },
    {
        name: "OpenAI",
        Icon: OpenAI,
        colorClass: "text-emerald-600 group-hover:text-emerald-700",
        bgGlow: "group-hover:shadow-emerald-500/20",
        angle: 90,
    },
    {
        name: "OpenRouter",
        Icon: OpenRouter,
        colorClass: "text-indigo-600 group-hover:text-indigo-700",
        bgGlow: "group-hover:shadow-indigo-500/20",
        angle: 180,
    },
    {
        name: "Fal.AI",
        Icon: Fal,
        colorClass: "text-purple-600 group-hover:text-purple-700",
        bgGlow: "group-hover:shadow-purple-500/20",
        angle: 270,
    },
];

interface AISpendCycleAnimationProps {
    className?: string;
    size?: number;
}

export function AISpendCycleAnimation({
    className = "",
}: AISpendCycleAnimationProps) {
    return (
        <div
            className={cn(
                "relative w-72 h-72 sm:w-80 sm:h-80 flex items-center justify-center select-none",
                className,
            )}
        >
            <style>
                {`
                @keyframes ai-slow-orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes ai-slow-counter-orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                @keyframes ai-text-orbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
            `}
            </style>

            {/* Background Glow */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-500/5 via-emerald-500/5 to-orange-500/5 blur-2xl pointer-events-none" />

            {/* Outer Dashed Orbit Guideline */}
            <div className="absolute w-52 h-52 sm:w-60 sm:h-60 rounded-full border border-dashed border-slate-200/90 pointer-events-none" />

            {/* Passing Circular Light Text Orbit */}
            <svg
                viewBox="0 0 240 240"
                className="absolute inset-0 w-full h-full pointer-events-none"
                style={{
                    animation: "ai-text-orbit 38s linear infinite",
                }}
            >
                <defs>
                    <path
                        id="ai-spend-circle-path"
                        d="M 120, 120 m -70, 0 a 70,70 0 1,1 140,0 a 70,70 0 1,1 -140,0"
                    />
                </defs>
                <text className="text-[9px] font-mono tracking-[0.24em] uppercase fill-gray-300/75">
                    <textPath href="#ai-spend-circle-path" startOffset="0%">
                        • LIVE API SPEND • REALTIME TRACKING • BUDGET LIMITS
                    </textPath>
                </text>
            </svg>

            {/* Rotating Orbit with AI Icons */}
            <div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{
                    animation: "ai-slow-orbit 26s linear infinite",
                }}
            >
                {IconsCycle.map((item) => (
                    <div
                        key={item.name}
                        className="absolute pointer-events-auto"
                        style={{
                            transform:
                                `rotate(${item.angle}deg) translateY(-6.5rem)`,
                        }}
                    >
                        <div
                            style={{
                                transform: `rotate(-${item.angle}deg)`,
                            }}
                        >
                            <div
                                style={{
                                    animation:
                                        "ai-slow-counter-orbit 26s linear infinite",
                                }}
                            >
                                <div
                                    title={item.name}
                                    className={cn(
                                        "group w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white shadow-lg shadow-slate-900/8 border border-slate-200/90 flex items-center justify-center p-2.5 sm:p-3 hover:scale-115 transition-all duration-300 cursor-pointer",
                                        item.bgGlow,
                                    )}
                                >
                                    <item.Icon
                                        size={24}
                                        className={cn(
                                            "transition-colors duration-300",
                                            item.colorClass,
                                        )}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Center Dollar Sign Symbol Circle with Padding and Shadow */}
            <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white shadow-xl shadow-slate-900/10 border border-slate-200/90 flex flex-col items-center justify-center p-3 text-center group">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200/80 flex items-center justify-center font-extrabold text-xl sm:text-2xl shadow-xs ring-4 ring-emerald-500/10 group-hover:scale-105 transition-transform">
                    $
                </div>
                <div className="text-[9.5px] font-mono font-semibold tracking-widest text-gray-300/75 uppercase mt-1">
                    API SPEND
                </div>
            </div>
        </div>
    );
}
