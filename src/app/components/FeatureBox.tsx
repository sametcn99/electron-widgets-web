import React from "react";

export default function FeatureBox({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="flex w-full flex-col rounded-2xl  border bg-gray-300 p-3 text-black sm:h-64 sm:w-64">
      <h1 className="text-2xl font-bold">{title}</h1>
      <p>{description}</p>
    </div>
  );
}
