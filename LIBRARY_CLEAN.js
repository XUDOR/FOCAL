const library = {
  tracks: { t01: { id: "t01",
    name: "Code Monkey",
    artist: "Jonathan Coulton",
    album: "Thing a Week Three" },
  t02: { id: "t02",
    name: "Model View Controller",
    artist: "James Dempsey",
    album: "WWDC 2003"},
  t03: { id: "t03",
    name: "Four Thirty-Three",
    artist: "John Cage",
    album: "Woodstock 1952"}
  },
  playlists: { p01: { id: "p01",
    name: "Coding Music",
    tracks: ["t01", "t02"]
  },
  p02: { id: "p02",
    name: "Other Playlist",
    tracks: ["t03"]
  }
  }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks


const printPlaylists = function(lib) {
  const playlists = lib.playlists;      // get playlist
  for (const playKey in playlists) {
    const playlist = playlists[playKey];
    //console.log(playlist);
    const name = playlist.name;
    //console.log(name);
    const tracks = playlist.tracks;
    //console.log(tracks);
    const numOfTracks = tracks.length;
    //console.log(numOfTracks);
    console.log(`${playKey}: ${name} - ${numOfTracks} tracks`);


  }
  // console.log(playlist);

};

printPlaylists(library);



// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function(lib) {
  const tracks = lib.tracks; // Get the tracks object from the library
  for (const trackKey in tracks) { // Iterate over each track
    const track = tracks[trackKey];
    const name = track.name;
    const artist = track.artist;
    const album = track.album;
    console.log(`${trackKey}: ${name} by ${artist} (${album})`); // Print in the desired format
  }
};


printTracks(library);

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(lib, playlistId) {
  const playlist = lib.playlists[playlistId]; // Get the playlist using the given ID
  
  if (!playlist) { // Check if the playlist exists
    console.log("Playlist not found!");
    return;
  }

  // Print the playlist details
  const name = playlist.name;
  const tracks = playlist.tracks;
  const numOfTracks = tracks.length;
  console.log(`${playlistId}: ${name} - ${numOfTracks} tracks`);

  // Iterate over each track ID in the playlist and print the track details
  tracks.forEach(trackId => {
    const track = lib.tracks[trackId];
    if (track) { // Make sure the track exists
      console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
    }
  });
};


printPlaylist(library, "p01");


// adds an existing track to an existing playlist
const addTrackToPlaylist = function(lib, trackId, playlistId) {
  const track = lib.tracks[trackId];
  const playlist = lib.playlists[playlistId];

  if (!track) {
    console.error(`Track with ID ${trackId} not found!`);
    return;
  }

  if (!playlist) {
    console.error(`Playlist with ID ${playlistId} not found!`);
    return;
  }

  if (playlist.tracks.includes(trackId)) {
    console.log(`Track with ID ${trackId} is already in the playlist ${playlistId}`);
    return;
  }

  playlist.tracks.push(trackId);
  console.log(`Added track ${trackId} to playlist ${playlistId}`);
};



addTrackToPlaylist(library, "t03", "p01");




// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(lib, name, artist, album) {
  const trackId = 't' + generateUid();
  lib.tracks[trackId] = {
    id: trackId,
    name: name,
    artist: artist,
    album: album
  };
  console.log(`Added track with ID ${trackId}`);
};



// adds a playlist to the library
const addPlaylist = function(lib, name) {
  const playlistId = 'p' + generateUid();
  lib.playlists[playlistId] = {
    id: playlistId,
    name: name,
    tracks: []
  };
  console.log(`Added playlist with ID ${playlistId}`);
};



addTrack(library, "New Song", "New Artist", "New Album");  // Add a new track
addPlaylist(library, "New Playlist");  // Add a new playlist


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {

};
