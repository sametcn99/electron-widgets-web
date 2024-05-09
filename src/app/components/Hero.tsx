import React from "react";
import Link from "next/link";
import HeroImage from "./HeroImage";

export default function Hero() {
  return (
    <main className="flex flex-row flex-wrap items-center justify-center gap-10 p-6 pt-28">
      <div>
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-5xl font-bold md:text-7xl">Electron Widgets!</h1>
          <p className="font-sans text-xl text-gray-300">
            The application allows users to{" "}
            <span className="font-bold text-green-700">
              create and manage widgets
            </span>{" "}
            on their <span className="font-bold text-green-700">desktops</span>.{" "}
            <br />
            Powered by{" "}
            <span className="text-blue-90 font-semibold">Electron.JS</span>
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Link
            href={"https://sametcc.me/electron-widgets"}
            target="_blank"
            className="mt-4 w-[8rem] rounded-lg  bg-green-950 p-4 font-bold text-white hover:bg-green-900"
          >
            Get Started
          </Link>
          <div className="flex select-none flex-row flex-wrap items-center justify-center gap-8">
            <Link
              href="https://github.com/sametcn99/electron-widgets/discussions"
              target="_blank"
              className="mt-4 w-[8rem] rounded-lg bg-zinc-800 p-4 text-white hover:bg-zinc-900"
            >
              Community
            </Link>
            <Link
              href="https://github.com/sametcn99/electron-widgets/wiki"
              target="_blank"
              className="mt-4 w-[8rem] rounded-lg bg-zinc-800 p-4 text-white hover:bg-zinc-900"
            >
              Docs
            </Link>
          </div>
        </div>
      </div>
      <HeroImage />
    </main>
  );
}
