'use client';

// import { getOracleForToday } from "@/lib/oracle";
import { getComicForToday } from "@/lib/comics";

/**
 *  •	Function: Symbolic prophecy or emotional truth.
 *  •	Tone: Poetic, often timeless, like a fortune or koan.
 *  •	Example:
 * “Not every ticket needs a solution. Some need a eulogy.”
 *
 * @constructor
 */
export default function OracleMessage() {
  // const message = getOracleForToday();
  const { oracle } = getComicForToday();


  return (
    <div className="mt-6 px-6 py-4 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-md text-center">
      <p className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
        {oracle}
      </p>
    </div>
  );
}