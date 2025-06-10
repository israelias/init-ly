export default function TeamPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-center bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Team Ritual Mode</h1>
      <p className="text-zinc-500 dark:text-zinc-400 max-w-xl mb-8">
        Bring daily story-point prophecy to your entire squad. Start every standup with a comic blessing, an SP Karma reading, and the shared wisdom of Lee.
      </p>

      <div className="bg-white dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 rounded-lg px-6 py-6 shadow-md max-w-md">
        <p className="text-lg font-semibold mb-2">Coming Soon:</p>
        <ul className="text-left text-sm list-disc list-inside space-y-1">
          <li>Slack integration for daily drops</li>
          <li>Team karma graphs + trendlines</li>
          <li>Retro comic bundles for Sprint Review</li>
          <li>Team blessing generator (select your archetypes)</li>
        </ul>
      </div>

      <a
        href="mailto:hello@initlee.app?subject=Team%20Blessing%20Beta%20Access"
        className="mt-8 inline-block bg-zinc-800 text-white px-5 py-2 rounded hover:bg-zinc-700 transition"
      >
        Request Early Access
      </a>
    </main>
  );
}