import Link from "next/link";
import React from "react";
import { VscGithub } from "react-icons/vsc";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";
import { siteUrl } from "../utils/utils";

async function getData() {
  const res = await fetch(`${siteUrl}/api`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function page() {
  const data: Data = await getData();
  // get folder count in users folders array
  const folderCount = data.users.reduce(
    (acc, user) => acc + (user.folders?.length ?? 0),
    0,
  );
  return (
    <main>
      <nav className="flex w-full flex-row items-center justify-center border-b-2 border-black bg-neutral-900">
        <div className="container flex h-16 flex-row items-center gap-6 font-bold text-gray-400">
          <VscGithub size={35} />
          <Link href="/">Home</Link>
          <Link href="/docs" className="pointer-events-none">
            Docs
          </Link>
          <div className="relative flex w-full items-center">
            <input placeholder="Search" className="w-full rounded-lg p-2" />
            <FaSearch className="absolute right-5" />
          </div>
          <Image
            src={
              "https://avatars.githubusercontent.com/u/57061347?s=400&u=f0ace34ebf304482bce4b46a8b0cbfb19ac4941c&v=4"
            }
            alt="logo"
            width={45}
            height={45}
            className="rounded-full"
          />
        </div>
      </nav>
      <div className="flex w-full flex-row items-center justify-center bg-neutral-950 px-4 font-bold">
        <div className="container flex h-16 flex-row items-center">
          {folderCount} Widgets Found
        </div>
      </div>
      <div className="heropattern flex min-h-screen w-full flex-row justify-center px-4 pt-4 font-bold">
        <div className="container flex flex-col gap-4">
          {data.users.map((user) => (
            <div key={user.UserName} className="flex flex-col gap-4">
              {user?.folders?.map((folder) => (
                <div
                  key={folder.folderName}
                  className="flex flex-col rounded-lg bg-neutral-600 p-2 text-gray-300"
                >
                  <p> {folder.folderName}</p>
                  <p>{folder.owner}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
