"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function HeroImage() {
  const initialWidgets = [
    { title: "transparent-clock", visible: true, locked: true },
    { title: "disk-monitor", visible: false, locked: false },
    { title: "hacker-news-reader", visible: true, locked: true },
    { title: "rss-feed-reader", visible: false, locked: false },
    { title: "to-do-list", visible: false, locked: false },
    { title: "daily-weather", visible: true, locked: true },
    { title: "and-create-your-own", visible: true, locked: true },
  ];

  const [widgets, setWidgets] = useState(initialWidgets);

  const toggleLocked = (widget: any) => {
    const updatedWidgets = widgets.map((w) => {
      if (w.title === widget.title) {
        return { ...w, locked: !w.locked };
      }
      return w;
    });
    setWidgets(updatedWidgets);
  };

  const toggleVisibility = (widget: any) => {
    const updatedWidgets = widgets.map((w) => {
      if (w.title === widget.title) {
        return { ...w, visible: !w.visible };
      }
      return w;
    });
    setWidgets(updatedWidgets);
  };

  return (
    <section className="h-[647px] w-[447px] select-none rounded-lg bg-zinc-950 text-slate-300 shadow-2xl shadow-green-950">
      <nav
        id="custom-title-bar"
        className="sticky top-0 z-50 flex h-fit w-full flex-row items-center justify-between bg-black px-2 font-bold"
      >
        <div className="draggable flex w-full flex-row items-center gap-2">
          <Image
            src="/electron.png"
            alt="logo"
            width={16}
            height={16}
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
          <span>Electron Widgets</span>
        </div>
        <div className="flex w-fit flex-row items-center gap-2">
          <button
            id="minimizeBtn"
            className="h-8 w-8 cursor-default rounded-md border-0 bg-transparent font-extrabold transition-colors duration-300 hover:bg-zinc-800"
          >
            —
          </button>
          <button
            id="closeBtn"
            className="h-8 w-8 cursor-default rounded-md border-0 bg-transparent font-extrabold transition-colors duration-300 hover:bg-red-900"
          >
            X
          </button>
        </div>
      </nav>
      <main className="flex h-full flex-col gap-2">
        {widgets.map((widget) => (
          <div
            key={widget.title}
            className="flex w-full flex-row flex-wrap items-center justify-between p-2 text-left font-bold hover:bg-zinc-900"
            id="widgetsData"
          >
            <div>
              <h1 className="text-xl">{widget.title}</h1>
            </div>
            <div className="flex flex-row gap-2">
              <div
                onClick={() => toggleLocked(widget)}
                className="rounded-full hover:bg-gray-700"
              >
                <Image
                  src={widget.locked ? "/lock.svg" : "/unlock.svg"}
                  alt={widget.locked ? "lock" : "unlock"}
                  width={24}
                  height={24}
                  onDragStart={(e) => {
                    e.preventDefault();
                  }}
                />
              </div>
              <div
                className={`flex h-6 w-12 items-center rounded-full bg-gray-800 duration-300 ease-in-out ${!widget.visible && "bg-gray-600"}`}
                onClick={() => toggleVisibility(widget)}
              >
                <div
                  className={`h-6 w-6 transform rounded-full bg-gray-500 shadow-md duration-300 ease-in-out ${widget.visible ? "translate-x-6 bg-green-700" : ""}`}
                />
              </div>
            </div>
          </div>
        ))}
        <footer className="flex h-6 w-full flex-row gap-2 py-2 pl-2">
          <Image
            className="h-8 w-8 rounded-full bg-slate-300 object-cover p-2 hover:cursor-pointer"
            src="/github-logo.svg"
            alt="github logo"
            width={32}
            height={32}
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
          <Image
            id="open-directory"
            className="h-8 w-8 rounded-full bg-slate-300 object-cover p-2 hover:cursor-pointer"
            src="/folder.svg"
            alt="folder logo"
            width={32}
            height={32}
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
          <Image
            id="add-widget"
            className="h-8 w-8 rounded-full bg-slate-300 object-cover p-2 hover:cursor-pointer"
            src="/folder-plus.svg"
            alt="folder plus"
            width={32}
            height={32}
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
          <Image
            id="show-all-widgets"
            className="h-8 w-8 rounded-full bg-slate-300 object-cover p-2 hover:cursor-pointer"
            src="/eye.svg"
            alt="eye logo"
            width={32}
            height={32}
            onDragStart={(e) => {
              e.preventDefault();
            }}
          />
        </footer>
      </main>
    </section>
  );
}
