'use client';

import Image from 'next/image';
import { getComicForToday } from "@/lib/comics";


const ComicPanel = () => {
  // const comic = getComicForToday();
  const { filename, caption } = getComicForToday();

  return (
    <div className="flex flex-col items-center mt-8">
      <Image
        src={`/images/${filename}`}
        alt="Daily Comic"
        width={500}
        height={500}
        className="rounded shadow-lg"
      />
      <p className="mt-4 text-center text-gray-600 dark:text-gray-300 italic">
        🗯️ {caption}
      </p>
    </div>
  );
};

export default ComicPanel;