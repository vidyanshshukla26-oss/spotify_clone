Spotify Web UI Clone
A responsive front-end clone of the Spotify web player built with pure HTML, CSS, and JavaScript.

This project focuses on layout, navigation, and basic player interactions without relying on any external UI frameworks.

Features
Multi-page style navigation (Home, Search, Library) using JavaScript-driven content switching.

Mock playlists and tracks rendered dynamically from in-memory data structures.

Search screen that filters songs by title, artist, or album as you type.

Interactive bottom player bar with play/pause, previous, and next controls.

Track info section that updates when a song is selected from search results.

Clean component-based styling split across style.css and utility.css for better organization.

Tech Stack
HTML5 for semantic layout and structure.

CSS3 (style.css, utility.css) for responsive, Spotify-inspired UI styling.

Vanilla JavaScript (script.js) for navigation, search, and player interactions.

SVG logo asset (logo.svg) for crisp branding.

Project Structure
bash
.
├── index.html          # Main entry point / UI layout
├── style.css           # Core page and component styles
├── utility.css         # Utility classes and reusable helpers
├── script.js           # Navigation, search, and mock player logic
├── logo.svg            # App logo
├── DocumentLayout.json # Editor/IDE workspace metadata (not needed in production)
└── master              # Local metadata / branch info
index.html: Defines the navigation bar, content sections (home, search, library), and bottom player bar container.

script.js: Handles page switching, filtering songs, rendering search results, and updating the player state.

style.css and utility.css: Provide layout, typography, and utility classes for consistent spacing and alignment.

Core Functionality
Navigation
Each navigation item has a data-page attribute and is wired to a corresponding content section.

Clicking on a nav link:

Removes the active state from all links and applies it to the selected one.

Hides all .content sections and reveals the section with the matching id.

Search
Uses a search-input field and a search-results container.

On each input change while the Search page is active:

Converts the query to lowercase.

Filters a mockSongs array by title, artist, or album.

Renders filtered results as clickable song cards.

Player Controls
Maintains simple player state: currentPage, isPlaying, and currentSongIndex.

play/pause toggles icon and internal state, simulating playback in the console.

prev and next cycle through the mock song list using modular indexing.

Selecting a song from search results updates the track title and artist in the player bar and switches the button to the pause icon.

Getting Started
Prerequisites
Any modern web browser (Chrome, Firefox, Edge, etc.).

Optional: A simple static server (VS Code Live Server, http-server, or similar) for a more realistic environment.

Run Locally
Clone or download this repository.

Open the project folder in your code editor.

Either:

Open index.html directly in your browser, or

Serve the folder using a static server and navigate to http://localhost:PORT.

The app initializes to the Home page automatically via a call to switchPage('home').

Customization
You can easily extend this project to make it more realistic and educational:

Replace mockSongs and mockPlaylists in script.js with your own data or fetch them from an API.

Connect a real audio element and hook play/pause, previous, and next to actual media controls.

Enhance styling in style.css and utility.css to add themes, animations, or dark/light mode toggles.

Add more sections, such as “Recently Played,” “Made for You,” or “Top Artists,” to mimic more of the Spotify experience.

Limitations
No real audio streaming; playback is currently simulated with console logs and UI state updates.

Data is static and stored in memory; there is no backend or persistence layer.

Some files like DocumentLayout.json and master are editor/local-environment metadata and not needed for deployment.

Future Improvements
Integrate an actual audio player with progress tracking and seek support.

Add user-auth-like mock state for “Liked Songs” and personalized playlists.

Implement routing with the History API or a client-side router for shareable URLs per page.

Make the layout fully mobile-optimized with touch-target-friendly controls in the player bar.
