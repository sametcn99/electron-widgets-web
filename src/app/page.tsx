import FeatureBox from "./components/FeatureBox";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="heropattern flex min-h-screen flex-col items-center gap-10 p-6 pt-28 antialiased ">
        <div className="flex flex-col gap-4 text-center  ">
          <h1 className="text-5xl font-bold md:text-7xl">Electron Widgets!</h1>
          <p className="font-sans text-xl text-gray-300">
            The application allows users to <b>create and manage widgets</b> on
            their <b>desktops</b>. <br />
            Powered by Electron.JS
          </p>
        </div>
        <div className="flex flex-row flex-wrap items-center justify-center gap-8">
          <Link
            href={"https://sametcc.me/electron-widgets"}
            target="_blank"
            className="w-54 mt-4 rounded-lg border bg-slate-300 p-4 font-bold text-black"
          >
            Get Started
          </Link>
          <Link
            href="/community"
            target="_blank"
            className="w-54 pointer-events-none mt-4 rounded-lg border bg-zinc-900 p-4 text-white"
          >
            Community (testing)
          </Link>
        </div>
        <Link
          href={
            "https://github.com/sametcn99/electron-widgets/releases/download/2.0.0/electron-widgets-2.0.0.Setup.exe"
          }
          className="gap-2  rounded-lg  p-2 text-center font-bold text-white hover:underline"
        >
          🎉 Download 2.0.0 Release{" "}
          <p className="font-thin">(Windows for now)</p>
        </Link>
        <section className="mt-52 flex flex-col">
          <h2 className="text-center text-3xl font-bold">Features</h2>
          <div className="flex flex-row flex-wrap items-center justify-center gap-4">
            <FeatureBox
              title="Publish Your Widgets (Testing)"
              description="Create your own widgets and share them with the community. For now, you can contribute your widgets to the github repository."
            />
            <FeatureBox
              title="Customizable Widget Options"
              description="Customize your widgets with just changing the html, css and js files"
            />
            <FeatureBox
              title="Cross-Platform Compatibility"
              description="Leveraging Electron.js technology, the application is compatible with multiple operating systems, including Windows, macOS, and Linux."
            />
          </div>
        </section>
      </main>
    </>
  );
}
