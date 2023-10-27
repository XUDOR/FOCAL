const library = {
  tracks: {
    t01: {
      id: "t01",
      name: "Code Monkey",
      artist: "Jonathan Coulton",
      album: "Thing a Week Three"
    },
    t02: {
      id: "t02",
      name: "Model View Controller",
      artist: "James Dempsey",
      album: "WWDC 2003"
    },
    t03: {
      id: "t03",
      name: "Four Thirty-Three",
      artist: "John Cage",
      album: "Woodstock 1952"
    }
  },
  playlists: {
    p01: {
      id: "p01",
      name: "Coding Music",
      tracks: ["t01", "t02"]
    },
    p02: {
      id: "p02",
      name: "Other Playlist",
      tracks: ["t03"]
    }
  },
  printPlaylists: function() {
    const playlists = this.playlists;
    for (const playKey in playlists) {
      const playlist = playlists[playKey];
      const name = playlist.name;
      const tracks = playlist.tracks;
      const numOfTracks = tracks.length;
      console.log(`${playKey}: ${name} - ${numOfTracks} tracks`);
    }
  },
  printTracks: function() {
    const tracks = this.tracks;
    for (const trackKey in tracks) {
      const track = tracks[trackKey];
      const name = track.name;
      const artist = track.artist;
      const album = track.album;
      console.log(`${trackKey}: ${name} by ${artist} (${album})`);
    }
  },
  printPlaylist: function(playlistId) {
    const playlist = this.playlists[playlistId];
    if (!playlist) {
      console.log("Playlist not found!");
      return;
    }

    const name = playlist.name;
    const tracks = playlist.tracks;
    const numOfTracks = tracks.length;
    console.log(`${playlistId}: ${name} - ${numOfTracks} tracks`);

    tracks.forEach(trackId => {
      const track = this.tracks[trackId];
      if (track) {
        console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
      }
    });
  },
  addTrackToPlaylist: function(trackId, playlistId) {
    const track = this.tracks[trackId];
    const playlist = this.playlists[playlistId];

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
  },
  generateUid: function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },
  addTrack: function(name, artist, album) {
    const trackId = 't' + this.generateUid();
    this.tracks[trackId] = {
      id: trackId,
      name: name,
      artist: artist,
      album: album
    };
    console.log(`Added track with ID ${trackId}`);
  },
  addPlaylist: function(name) {
    const playlistId = 'p' + this.generateUid();
    this.playlists[playlistId] = {
      id: playlistId,
      name: name,
      tracks: []
    };
    console.log(`Added playlist with ID ${playlistId}`);
  },
  printSearchResults: function(query) {
    const lowerCaseQuery = query.toLowerCase();

    for (const trackId in this.tracks) {
      const track = this.tracks[trackId];
      if (track.name.toLowerCase().includes(lowerCaseQuery) ||
          track.artist.toLowerCase().includes(lowerCaseQuery) ||
          track.album.toLowerCase().includes(lowerCaseQuery)) {
        console.log(`${trackId}: ${track.name} by ${track.artist} (${track.album})`);
      }
    }
  }
};

// Testing the methods:
library.printPlaylists();
library.printTracks();
library.addTrack("New Track", "New Artist", "New Album");
library.addPlaylist("My New Playlist");
library.printSearchResults("Code");
