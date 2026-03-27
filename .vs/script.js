// Spotify Clone JavaScript

// Mock data
const mockSongs = [
    { title: 'Song 1', artist: 'Artist 1', album: 'Album 1' },
    { title: 'Song 2', artist: 'Artist 2', album: 'Album 2' },
    { title: 'Song 3', artist: 'Artist 3', album: 'Album 3' },
    // Add more songs as needed
];

const mockPlaylists = [
    { name: 'Liked Songs', songs: mockSongs },
    { name: 'My Playlist #1', songs: mockSongs.slice(0, 2) },
];

// DOM Elements
const navLinks = document.querySelectorAll('.nav-link');
const contents = document.querySelectorAll('.content');
const searchInput = document.querySelector('.search-input');
const searchResults = document.querySelector('.search-results');
const playPauseBtn = document.getElementById('play-pause');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const progressFill = document.querySelector('.progress-fill');

// State
let currentPage = 'home';
let isPlaying = false;
let currentSongIndex = 0;

// Navigation
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const page = e.target.dataset.page;
        switchPage(page);
    });
});

function switchPage(page) {
    // Update active nav link
    navLinks.forEach(link => link.classList.remove('active'));
    document.querySelector(`[data-page="${page}"]`).classList.add('active');

    // Show corresponding content
    contents.forEach(content => content.classList.add('hidden'));
    document.getElementById(page).classList.remove('hidden');

    currentPage = page;
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    if (currentPage === 'search') {
        const filteredSongs = mockSongs.filter(song =>
            song.title.toLowerCase().includes(query) ||
            song.artist.toLowerCase().includes(query) ||
            song.album.toLowerCase().includes(query)
        );
        displaySearchResults(filteredSongs);
    }
});

function displaySearchResults(songs) {
    searchResults.innerHTML = '';
    songs.forEach(song => {
        const songCard = document.createElement('div');
        songCard.className = 'playlist-card';
        songCard.textContent = `${song.title} - ${song.artist}`;
        songCard.addEventListener('click', () => playSong(song));
        searchResults.appendChild(songCard);
    });
}

// Player controls
playPauseBtn.addEventListener('click', togglePlayPause);
prevBtn.addEventListener('click', playPrevious);
nextBtn.addEventListener('click', playNext);

function togglePlayPause() {
    isPlaying = !isPlaying;
    playPauseBtn.textContent = isPlaying ? '⏸' : '▶';
    // In a real app, this would control audio playback
    console.log(isPlaying ? 'Playing' : 'Paused');
}

function playPrevious() {
    currentSongIndex = (currentSongIndex - 1 + mockSongs.length) % mockSongs.length;
    playSong(mockSongs[currentSongIndex]);
}

function playNext() {
    currentSongIndex = (currentSongIndex + 1) % mockSongs.length;
    playSong(mockSongs[currentSongIndex]);
}

function playSong(song) {
    // Update player UI
    document.querySelector('.track-title').textContent = song.title;
    document.querySelector('.artist').textContent = song.artist;
    // In a real app, load and play audio
    console.log('Playing:', song.title);
    isPlaying = true;
    playPauseBtn.textContent = '⏸';
}

// Initialize
switchPage('home');