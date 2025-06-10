'use client';

import Image from 'next/image';

export default function ComicPanel() {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-full max-w-md mb-4">
        <Image
          src="/images/sample-comic.png"
          alt="Daily Comic Panel"
          width={800}
          height={600}
          className="rounded shadow-lg"
        />
      </div>
      <p className="italic text-sm text-gray-500">
        “Not every ticket wants closure. Some just want to be seen.”
      </p>
    </div>
  );
}