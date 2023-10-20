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
//////////////////////////////////////////
////   >>IDEA:<<                      ////
////   OBJECT DESTRUCTORS TO ARRAYS   ////
////   SO ARRAY METHODS CAN SORT,etc  ////
////   AND THEN RECOMPLILED           ////
////   start with> arrays of T01 is   ////
////   index 0 etc... MAP & others    ////
////                                  ////
//////////////////////////////////////////

//*** continue with destructuring of "PLAYLISTS"
//*** start recompile to arguments 
//*** REFACTOR... Flex

// array declarations
//--track KEY/VALUE 
T_arrID = [];
T_arrName = [];
T_arrArtist = [];
T_arrAlbum = [];

//--Playlist KEY/VALUE
P_arrID = [];
P_arrName = [];
P_arrTracks = [];

// multiArrays
//TRACKS
arrTRACKS = [
  T_arrID,
  T_arrName,
  T_arrArtist,
  T_arrAlbum,
]
//PLAYLISTS
arrPLAYLISTS = [
  P_arrID,
  P_arrName,
  P_arrTracks, 
]

//object destructors to arrays
// ---- TRACKS property
Object.values(library.tracks).forEach(track => {
  T_arrID.push("id: " + track.id);
});

Object.values(library.tracks).forEach(track => {
  T_arrName.push("Name: " + track.name);
});

Object.values(library.tracks).forEach(track => {
  T_arrArtist.push("Artist: " + track.artist);
});

Object.values(library.tracks).forEach(track => {
  T_arrAlbum.push("Album: " + track.album);
});

//>>>>>>>>>>>>>>>>>>>>>>>>
// ---- PLAYLIST property
Object.values(library.playlists).forEach(playlist => {
  P_arrID.push("id: " + playlist.id);
});

Object.values(library.playlists).forEach(playlist => {
  P_arrName.push("Name: " + playlist.name);
});

Object.values(library.playlists).forEach(playlist => {
  P_arrTracks.push("Tracks: " + playlist.tracks);
});

//Console function 
const table1 = function(data) {
  console.table(data);
}

const table2 = function(data) {
  console.table(data);
}



table1(arrTRACKS);
table2(arrPLAYLISTS);
// table(arrName);
// table(arrID);
// table(arrArtist);
// table(arrAlbum);
