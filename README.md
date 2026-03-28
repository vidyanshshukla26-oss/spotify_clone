🎵 Spotify Clone

A pixel-faithful, front-end recreation of Spotify's web player — built with pure HTML, CSS, and vanilla JavaScript. No frameworks. No dependencies. Just the craft.

<img width="1913" height="1095" alt="Screenshot 2026-03-28 025617" src="https://github.com/user-attachments/assets/488177ce-d814-4068-8926-bca9b4525058" />


╔══════════════════════════════════════════════════════╗
║  ▶  Now Playing: Spotify Clone  ·  by You  ·  0:00  ║
╚══════════════════════════════════════════════════════╝

✦ What is this?
This is a static, front-end clone of Spotify's web UI — reproducing the iconic dark interface, sidebar navigation, music player controls, and responsive grid layouts — using nothing but browser-native technologies.
It's not just a mockup. It's a living, interactive page with working navigation, a functional search filter, and a simulated playback controller.

📁 Project Structure
spotify-clone/
│
├── index.html        ← App shell & semantic layout
├── style.css         ← Core component styles
├── utility.css       ← CSS reset + utility/helper classes
├── script.js         ← Navigation, search, and player logic
└── logo.svg          ← Spotify logo asset

🖥️ Features
FeatureDescription🧭 Sidebar NavigationSwitches between Home, Search, and Your Library views🔍 Live SearchFilters mock song data in real-time as you type▶️ Player ControlsPlay/Pause toggle, Previous & Next track buttons🎨 Spotify-Accurate UIDark theme, green accents, blur effects, and card layouts📱 Responsive LayoutFlexbox + CSS Grid — adapts to different screen widths💾 Zero DependenciesNo npm, no bundlers, no frameworks — open and go

🚀 Getting Started
No installation. No build step. No terminal required.
bash# Option 1 — Just open it
open index.html

# Option 2 — Serve locally (recommended for asset loading)
npx serve .
# or
python3 -m http.server 8080
Then visit http://localhost:8080 in your browser.

🎛️ How It Works
Navigation
Clicking a nav link calls switchPage(page), which toggles the .hidden class across content sections and updates the active link state — no routing library needed.
Search
The search input fires on every input event. It filters mockSongs[] using a case-insensitive .includes() match across title, artist, and album fields, then re-renders the results grid dynamically.
Player
The player is a UI simulation — it tracks isPlaying state and cycles through mockSongs[] with index wrapping. Swap in the Web Audio API or an <audio> element to make it play real audio.

🧱 Tech Stack
Language    →  HTML5 · CSS3 · ES6+ JavaScript
Layout      →  Flexbox · CSS Grid
Styling     →  Custom Properties · Backdrop Filter · CSS Transitions
Assets      →  SVG (logo)
Data        →  In-memory mock data (mockSongs[], mockPlaylists[])

🗺️ Roadmap / Ideas
Want to take this further? Here are some natural next steps:

 Real audio playback — Integrate <audio> tag with actual .mp3 sources
 Progress bar scrubbing — Click-to-seek on the timeline
 Persistent playlists — Save to localStorage
 Last.fm / Spotify API — Pull real track data via OAuth
 Keyboard shortcuts — Space to play/pause, arrow keys to seek
 Volume control — Slider + mute toggle
 Mobile sidebar — Hamburger menu for small viewports
 Animations — Track change transitions, loading skeletons


🎨 Design Tokens
Key colors used throughout the interface:
css--spotify-black:   #121212   /* Page background */
--sidebar-black:   #000000   /* Sidebar */
--card-gray:       #282828   /* Cards, player bar */
--muted-gray:      #535353   /* Progress bar track */
--text-secondary:  #b3b3b3   /* Artist name, labels */
--spotify-green:   #1db954   /* Brand accent */
--white:           #ffffff   /* Primary text */

🙏 Acknowledgements
Inspired by Spotify. All design credit goes to Spotify's incredible product team — this project exists purely for learning and is not affiliated with, endorsed by, or connected to Spotify AB.
