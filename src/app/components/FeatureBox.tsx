import React from "react";

export default function FeatureBox({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="w-full sm:w-64 sm:h-64 p-3  flex flex-col border rounded-2xl bg-gray-300 text-black">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
