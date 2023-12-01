import React from "react";
import { useState } from "react";

interface TabItemProps {
  tabNumber: number;
  svg: React.ReactNode;
  title: string;
  description: string;
}

export default function TabItem({
  tabNumber,
  svg,
  title,
  description,
}: TabItemProps) {
  const [tab, setTab] = useState<number>(1);

  return (
    <>
      <a
        className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
          tab !== tabNumber
            ? "bg-white shadow-md border-gray-200 hover:shadow-lg"
            : "bg-gray-200 border-transparent"
        }`}
        href="#0"
        onClick={(e) => {
          e.preventDefault();
          setTab(tabNumber);
        }}
      >
        <div>
          <div className="font-bold leading-snug tracking-tight mb-1">
            {title}
          </div>
          <div className="text-gray-600">{description}</div>
        </div>
        <div className="flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3">
          {svg}
        </div>
      </a>
    </>
  );
}
