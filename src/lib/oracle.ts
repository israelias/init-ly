/**
 *  •	Function: Symbolic prophecy or emotional truth.
 *  •	Tone: Poetic, often timeless, like a fortune or koan.
 *  •	Example:
 * “Not every ticket needs a solution. Some need a eulogy.”
 */

export const oracles: string[] = [
  "You thought you were assigning the ticket, but it was assigning you.",
  "Not every commit is a confession. But some should be.",
  "The backlog remembers what the roadmap forgets.",
  "SP-89 is still open. And it knows.",
  "Definition of done: Begin again.",
  "Every estimate is a prophecy. Not all come true.",
  "The retro is not for solving. It’s for reckoning.",
  "You cannot refactor what you refuse to name.",
  "This sprint ends in the same place it began: you.",
  "The Jira emoji is [🧼]. That wasn’t a mistake.",
  "The burndown is a lie. The story lives on.",
  "You cannot estimate what you refuse to feel."
];

export function getOracleForToday(): string {
  const today = new Date().toDateString(); // e.g. "Tue Jun 10 2025"
  const hash = Array.from(today)
    .reduce(
      (acc, char) => acc + char.charCodeAt(0), 0
    );
  return oracles[hash % oracles.length];
}