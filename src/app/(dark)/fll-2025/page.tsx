"use client";

import React from "react";
import Link from "next/link";

export default function FLL2025() {
  return (
    <div className="relative min-h-screen w-full bg-[#030014] overflow-x-hidden selection:bg-indigo-500/30 text-slate-200 flex flex-col items-center py-10 px-4">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] -translate-x-1/2 rounded-full bg-blue-600/5 blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-4xl flex flex-col items-center gap-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
            FLL @ YMCI - 2025
          </h1>
          <p className="text-slate-400 text-lg md:text-xl">
            Welcome to the event! Watch the stream or check the scores below.
          </p>
        </div>

        {/* YouTube Embed */}
        <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-slate-800/50 bg-slate-900/50 backdrop-blur-sm">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Eg71rYgFBog"
            title="FLL 2025 Tournament Stream"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 w-full justify-center items-center">
          <Link
            href="https://docs.google.com/spreadsheets/d/14fvbrSZWaQ6t4_F8OA1AgUAmEhYkBFaH8FYLuhhEgok/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold text-lg hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 w-full sm:w-auto text-center"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              View Score Sheet
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </Link>
          
          <Link
            href="https://www.youtube.com/watch?v=Eg71rYgFBog"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-4 rounded-xl bg-slate-800/50 border border-slate-700 text-slate-200 font-semibold text-lg hover:bg-slate-800 hover:text-white transition-all duration-300 w-full sm:w-auto text-center backdrop-blur-sm"
          >
            <span className="flex items-center justify-center gap-2">
              Open in YouTube
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </span>
          </Link>
        </div>
      </main>
    </div>
  );
}