import React from "react";

export default function FeatureBox({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex w-full flex-col rounded-2xl bg-green-950 bg-opacity-30 p-6 text-white shadow-2xl sm:h-64 sm:w-64">
      <h1 className="text-xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
