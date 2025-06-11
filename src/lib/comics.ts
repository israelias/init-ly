/**
 * 🖼️ Comic Caption / Punchline
 *  •	Function: Directly tied to the comic panel’s scene or moment.
 *  •	Tone: Satirical, narrative-driven, ironic or deadpan.
 *  •	Example (for same day):
 * “Scrum Master: ‘Who re-opened this?’ Lee, quietly: ‘It reopened itself.’”
 */
export const comics = [
  /**
   * Show a tombstone labeled “SP-24 — Closed” with the lid creaking open from within. A ghostly cursor hovers above, clicking “Reopen.” Nearby, a dev mourns beside a kanban board with lit candles. Sprint metrics flutter like funeral programs. Tone: eerie reverence. Palette: grayscale with solemn blue and flickers of red merge icons.
   */
  {
    filename: "comic-01.png",
    caption: "It reopened itself.",
    oracle: "Not every ticket needs a solution. Some need a eulogy."
  },
  /**
   * Visualize a stethoscope pressed against a kanban board—its heartbeats are audible, but irregular. Devs crowd around like doctors in a code ward. One clutches antacids. Burndown chart on life support. Tone: medical Agile absurdity. Palette: sterile hospital whites, pulse-line green, Jira blue.
   */
  {
    filename: "comic-02.png",
    caption: "Scrum guide said heartbeat, not heartburn.",
    oracle: "The sprint ends. The sprint begins."
  },
  /**
   * A ticket form expanded with a new field labeled “Pain Index (0–∞).” The field auto-fills as a dev types. Backlog items behind it visibly weep or glare. A PM applauds the new metric. The suffering graph spikes. Tone: dark workplace comedy. Colors: grayscale UI with sharp red datapoints.
   */
  {
    filename: "comic-03.png",
    caption: "We added a field to track suffering.",
    oracle: "The backlog remembers."
  },
  /**
   * A dimly lit retro circle, chairs half-empty. One dev clutches a cup labeled “blame.” On the wall, post-its form a silent scream. In the center: a whiteboard reading “What went well?” that’s blank except for a frozen tear. Tone: surreal therapy session. Color palette: cold tones, muted retrospection, flickers of post-it yellow.
   */
  {
    filename: "comic-04.png",
    caption: "Retro was a vibe. A chilling one.",
    oracle: "Not every commit is a confession."
  },
  /**
   * A team stares at Lee standing arms outstretched, glowing faintly, while a checklist hovers around him like a halo. Each item auto-checks as he speaks. One dev whispers “He’s the spec now.” A banner above: “Demo Day.” Tone: messianic satire. Colors: holy golds, soft UI neutrals, radiant stickies.
   */
  {
    filename: "comic-05.png",
    caption: "Lee: 'I am the acceptance criteria.'",
    oracle: "Definition of done: Begin again."
  },
  /**
   * Show a codebase as a tangled forest. A dev with a machete steps into the underbrush labeled “core-v2-final-FINAL.js.” Ghosts of past devs look on from tree trunks. One sticky reads: “DO NOT TOUCH.” Tone: poetic technical horror. Color: earthy decay, vines of deprecated syntax, splashes of emotional red.
   */
  {
    filename: "comic-06.png",
    caption: "It’s not tech debt. It’s legacy trauma.",
    oracle: "You cannot refactor what you refuse to name."
  },
  /**
   * A ticket marked “Closed” appears in the UI, but its shadow remains in “To Do.” A developer stares, wide-eyed, as the shadow pulses. Notifications stack like whispers: “SP-89 mentioned you.” Tone: supernatural systems glitch. Palette: dark mode noir, eerie cyan, haunted notification red.
   */
  {
    filename: "comic-07.png",
    caption: "Ticket was closed. Soul was not.",
    oracle: "SP-89 is still open. And it knows."
  },
  /**
   * Render a surreal Agile scrum board where swimlanes extend like infinite rivers. Each lane has tiny boats with team members frantically paddling. Some lanes flood, others vanish into fog. One lane ends in a whirlpool. A ticket floats past, unbothered, glowing. Tone: absurd, tragicomic, SP Karma. Color: muted ocean blues with sticky note yellow.
   */
  {
    filename: "comic-08.png",
    caption: "Too many swimlanes. Not enough lifeboats.",
    oracle: "You don’t move the ticket. The ticket moves you."
  },
  /**
   * Show a developer staring at a terminal where the build status reads “✅ Passed” but behind them, the office is on fire. One monitor says “Deploying…” while another says “Abandon all hope.” The dev smiles with tears in their eyes. Subtle glitch effects. Tone: SP Karma ironic zen. Palette: lime green, firelight orange, grayscale smoke.
   */
  {
    filename: "comic-09.png",
    caption: "Green means go. Unless it doesn’t.",
    oracle: "CI is a state of mind."
  },
  /**
   * Visualize a post-it labeled “2 SP” sitting atop a tower of cascading subtasks, like a house of cards. A Miro board floats above like a stormcloud, spilling icons. One dev stands below, squinting upward as stickies rain down. Everything looks unstable. Color: pastel overload. Tone: comedy of collapse. SP Karma chaos.
   */
  {
    filename: "comic-10.png",
    caption: "How did this 2-pointer spawn five subtasks and a Miro board?",
    oracle: "Velocity is not the same as gravity. But both make you fall."
  },
  /**
   * Depict a hamster wheel labeled “Sprint Cycle,” with the same ticket inside spinning in circles. Around it are past sprints’ burndown charts, all eerily identical. A product owner prays beside the wheel. The hamster (Lee?) wears a headband. Tone: spiritual burnout. Colors: greyscale loop, highlighted sticky in cursed gold.
   */
  {
    filename: "comic-11.png",
    caption: "Didn’t we already not finish this last sprint?",
    oracle: "If it rolls over three times, it’s a feature now."
  },
  /**
   * A haunted Jira ticket floats in a dark room, casting a faint glow. Cobwebs cover its checklist. A dev tiptoes past with a candle, visibly terrified. In the background, ancient monitors whisper “Needs changes…” Ghostly commit messages swirl. Tone: gothic sprint horror. Color: haunted neon and terminal green.
   */
  {
    filename: "comic-12.png",
    caption: "Created March 2023. Still ‘In Review.’",
    oracle: "Some tickets are not meant to be closed. They are meant to haunt."
  }
];

export function getComicForToday() {
  const today = new Date().toDateString();
  const hash = Array.from(today).reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return comics[hash % comics.length];
}