import Image from "next/image";
import FeatureBox from "./components/FeatureBox";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex flex-row flex-wrap items-center justify-center gap-10 p-6 pt-28">
        <div>
          <div className="flex flex-col gap-4 text-center">
            <h1 className="text-5xl font-bold md:text-7xl">
              Electron Widgets!
            </h1>
            <p className="font-sans text-xl text-gray-300">
              The application allows users to{" "}
              <span className="font-bold text-green-700">
                create and manage widgets
              </span>{" "}
              on their{" "}
              <span className="font-bold text-green-700">desktops</span>. <br />
              Powered by{" "}
              <span className="text-blue-90 font-semibold">Electron.JS</span>
            </p>
          </div>
          <div className="flex flex-row flex-wrap items-center justify-center gap-8">
            <Link
              href={"https://sametcc.me/electron-widgets"}
              target="_blank"
              className="w-54 mt-4 rounded-lg  bg-green-950 p-4 font-bold text-white hover:bg-green-900"
            >
              Get Started
            </Link>
            <Link
              href="https://github.com/sametcn99/electron-widgets/discussions"
              target="_blank"
              className="w-54 mt-4 rounded-lg bg-zinc-800 p-4 text-white hover:bg-zinc-900"
            >
              Community
            </Link>
          </div>
          <Link
            href={"https://github.com/sametcn99/electron-widgets/releases/"}
            className="gap-2  rounded-lg p-2 text-center  font-bold text-white hover:underline"
            target="_blank"
          >
            <p>🎉 Download now!</p>
            <p className="font-thin">(Windows for now)</p>
          </Link>
        </div>
        <Image
          src={"/screenshot.png"}
          width={450}
          height={450}
          alt="screenshot"
          className="rounded-lg shadow-2xl shadow-green-950"
        />
      </main>
      <section className="mt-52 flex flex-col items-center justify-center pb-20">
        <h2 className="mb-5 border-b-8 border-green-900 text-center text-4xl font-bold">
          Features
        </h2>
        <div className="flex  flex-row flex-wrap items-center justify-center gap-5">
          <FeatureBox
            title="Publish Your Widgets"
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
          <FeatureBox
            title="Easily install new widgets"
            description="Just create a new folder with the widget files and the application will automatically detect and install it."
          />
        </div>
      </section>
    </>
  );
}
