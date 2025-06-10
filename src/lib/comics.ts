/**
 * 🖼️ Comic Caption / Punchline
 *  •	Function: Directly tied to the comic panel’s scene or moment.
 *  •	Tone: Satirical, narrative-driven, ironic or deadpan.
 *  •	Example (for same day):
 * “Scrum Master: ‘Who re-opened this?’ Lee, quietly: ‘It reopened itself.’”
 */
export const comics = [
  {
    filename: "comic-01.png",
    caption: "It reopened itself.",
    oracle: "Not every ticket needs a solution. Some need a eulogy."
  },
  {
    filename: "comic-02.png",
    caption: "Scrum guide said heartbeat, not heartburn.",
    oracle: "The sprint ends. The sprint begins."
  },
  {
    filename: "comic-03.png",
    caption: "We added a field to track suffering.",
    oracle: "The backlog remembers."
  },
  {
    filename: "comic-04.png",
    caption: "Retro was a vibe. A chilling one.",
    oracle: "Not every commit is a confession."
  },
  {
    filename: "comic-05.png",
    caption: "Lee: 'I am the acceptance criteria.'",
    oracle: "Definition of done: Begin again."
  },
  {
    filename: "comic-06.png",
    caption: "It’s not tech debt. It’s legacy trauma.",
    oracle: "You cannot refactor what you refuse to name."
  },
  {
    filename: "comic-07.png",
    caption: "Ticket was closed. Soul was not.",
    oracle: "SP-89 is still open. And it knows."
  }
];

export function getComicForToday() {
  const today = new Date().toDateString();
  const hash = Array.from(today).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return comics[hash % comics.length];
}