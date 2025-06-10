'use client';

import { useState, useEffect } from 'react';
import { oracles } from '../lib/oracle';

export default function OracleMessage() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const random = Math.floor(Math.random() * oracles.length);
    setMessage(oracles[random]);
  }, []);

  return (
    <div className="mt-6 px-6 py-4 bg-white dark:bg-zinc-800 border border-gray-200 dark:border-zinc-700 rounded-lg shadow-md text-center">
      <p className="text-lg font-medium text-zinc-800 dark:text-zinc-100">
        {message}
      </p>
    </div>
  );
}