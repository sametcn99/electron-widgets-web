import FeatureBox from "./components/FeatureBox";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center p-6 pt-28 gap-10 antialiased heropattern ">
        <div className="flex flex-col gap-4 text-center  ">
          <h1 className="text-5xl md:text-7xl font-bold">Electron Widgets!</h1>
          <p className="text-xl font-sans text-gray-300">
            The application allows users to <b>create and manage widgets</b> on
            their <b>desktops</b>. <br />
            Powered by Electron.JS
          </p>
        </div>
        <div className="flex flex-row gap-8 flex-wrap items-center justify-center">
          <Link
            href={"https://sametcc.me/electron-widgets"}
            target="_blank"
            className="p-4 border rounded-lg mt-4 bg-slate-300 text-black font-bold w-54"
          >
            Get Started
          </Link>
          <Link
            href="/community"
            target="_blank"
            className="p-4 border rounded-lg mt-4 bg-zinc-900 text-white pointer-events-none w-54"
          >
            Community (testing)
          </Link>
        </div>
        <Link
          href={
            "https://github.com/sametcn99/electron-widgets/releases/download/2.0.0/electron-widgets-2.0.0.Setup.exe"
          }
          className="p-2  rounded-lg  text-white font-bold hover:underline text-center gap-2"
        >
          🎉 Download 2.0.0 Release{" "}
          <p className="font-thin">(Windows for now)</p>
        </Link>
        <section className="flex flex-col mt-52">
          <h2 className="text-3xl font-bold text-center">Features</h2>
          <div className="flex flex-row flex-wrap gap-4 items-center justify-center">
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
