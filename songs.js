// JavaScript source code

let playlist = ["black hole sun", "Unforgiven", "What is love", "it must have been love", "finlandia", "My way"];

const PlayRandomSong = function (playlist) {
    randomsong = Math.floor(Math.random() * playlist.length);
    console.log(playlist[randomsong]);
};

PlayRandomSong(playlist);