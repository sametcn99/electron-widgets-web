import React from "react";
import FeatureBox from "./FeatureBox";

export default function FeaturesSection() {
  return (
    <section className="mt-52 flex flex-col items-center justify-center pb-20">
      <h2 className="mb-5 border-b-8 border-green-900 text-center text-4xl font-bold">
        Features
      </h2>
      <div className="flex flex-row flex-wrap items-center justify-center gap-5 lg:max-w-[60%]">
        <FeatureBox
          title="Publish Your Widgets"
          description="Create your own widgets and share them with the community."
        />
        <FeatureBox
          title="Built In Tools"
          description="The application provides a simple and easy-to-use interface for creating widgets with HTML, CSS, and JavaScript."
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
  );
}
