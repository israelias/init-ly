'use client';

import { useState } from 'react';
import { oracles } from '../../lib/oracle';

export default function BlessPage() {
  const [role, setRole] = useState('');
  const [mood, setMood] = useState('');
  const [ticket, setTicket] = useState('');
  const [blessing, setBlessing] = useState('');

  const generateBlessing = () => {
    const base = oracles[Math.floor(Math.random() * oracles.length)];
    const flavor = ticket ? ` (re: ${ticket})` : '';
    setBlessing(`${base}${flavor}`);
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Bless This Ticket</h1>
      <p className="text-zinc-500 dark:text-zinc-400 mb-8">
        Personalize your sprint ritual.
      </p>

      <div className="w-full max-w-md space-y-4 text-left">
        <label className="block">
          <span className="text-sm">Your Role</span>
          <input
            type="text"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full mt-1 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded"
            placeholder="e.g. Sprint Whisperer"
          />
        </label>

        <label className="block">
          <span className="text-sm">Your Mood</span>
          <input
            type="text"
            value={mood}
            onChange={(e) => setMood(e.target.value)}
            className="w-full mt-1 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded"
            placeholder="e.g. aggressively calm"
          />
        </label>

        <label className="block">
          <span className="text-sm">Ticket Title (optional)</span>
          <input
            type="text"
            value={ticket}
            onChange={(e) => setTicket(e.target.value)}
            className="w-full mt-1 px-3 py-2 bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-600 rounded"
            placeholder="e.g. SP-68"
          />
        </label>

        <button
          onClick={generateBlessing}
          className="w-full mt-4 py-2 bg-zinc-800 text-white rounded hover:bg-zinc-700 transition"
        >
          Generate My Blessing
        </button>
      </div>

      {blessing && (
        <div className="mt-8 max-w-md text-lg font-medium bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 px-4 py-6 rounded shadow">
          <p>{blessing}</p>
        </div>
      )}
    </main>
  );
}