import ComicPanel from '../components/ComicPanel';
import OracleMessage from '../components/OracleMessage';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gradient-to-b from-white to-zinc-100 dark:from-zinc-900 dark:to-zinc-800 text-zinc-900 dark:text-white">
      <h1 className="text-4xl font-bold mb-2 text-center">In It, Lee.</h1>
      <p className="text-md text-zinc-500 dark:text-zinc-400 mb-10 text-center italic">
        The daily comic oracle for the spiritually sprint-fatigued.
      </p>

      <ComicPanel />

      <div className="mt-10 w-full max-w-xl">
        <OracleMessage />

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-500 dark:text-zinc-400">
            SP Karma: <span className="font-semibold">🧼 +3</span>
          </p>
        </div>
      </div>

      <footer className="mt-16 text-xs text-zinc-400 text-center">
        <p>&copy; {new Date().getFullYear()} In It, Lee. All stories pointed by destiny.</p>
      </footer>
    </main>
  );
}