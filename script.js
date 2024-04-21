let playlistSongs = document.getElementById('playlist-songs');
let playButton = document.getElementById('play');
let pauseButton = document.getElementById('pause');
let nextButton = document.getElementById('next');
let previousButton = document.getElementById('previous');
let shuffleButton = document.getElementById('shuffle');

const allSongs = [
    {
        id: 0,
        title: "Scratching The Surface",
        artist: "Quincy Larson",
        duration: "4:25",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/scratching-the-surface.mp3",
    },
    {
        id: 1,
        title: "Can't Stay Down",
        artist: "Quincy Larson",
        duration: "4:15",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stay-down.mp3",
    },
    {
        id: 2,
        title: "Still Learning",
        artist: "Quincy Larson",
        duration: "3:51",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/still-learning.mp3",
    },
    {
        id: 3,
        title: "Cruising for a Musing",
        artist: "Quincy Larson",
        duration: "3:34",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cruising-for-a-musing.mp3",
    },
    {
        id: 4,
        title: "Never Not Favored",
        artist: "Quincy Larson",
        duration: "3:35",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/never-not-favored.mp3",
    },
    {
        id: 5,
        title: "From the Ground Up",
        artist: "Quincy Larson",
        duration: "3:12",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/from-the-ground-up.mp3",
    },
    {
        id: 6,
        title: "Walking on Air",
        artist: "Quincy Larson",
        duration: "3:25",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/walking-on-air.mp3",
    },
    {
        id: 7,
        title: "Can't Stop Me. Can't Even Slow Me Down.",
        artist: "Quincy Larson",
        duration: "3:52",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/cant-stop-me-cant-even-slow-me-down.mp3",
    },
    {
        id: 8,
        title: "The Surest Way Out is Through",
        artist: "Quincy Larson",
        duration: "3:10",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/the-surest-way-out-is-through.mp3",
    },
    {
        id: 9,
        title: "Chasing That Feeling",
        artist: "Quincy Larson",
        duration: "2:43",
        src: "https://s3.amazonaws.com/org.freecodecamp.mp3-player-project/chasing-that-feeling.mp3",
    },
];
//Web Audio API, which lets you generate and process audio in web applications.

const audio = new Audio();//html5 audio element


//The spread operator (...) allows you to copy all elements from one array into another. It can also be used to concatenate multiple arrays into one. 

let userData = {
    songs: [...allSongs],
    currentSong: null,
    songCurrentTime: 0,
};
// An arrow function is an anonymous function expression and a shorter way to write functions. Anonymous means that the function does not have a name. Arrow functions are always anonymous.
// () => {}
//To create a named arrow function, you can assign the function to a variable:

// const exampleFunction = () => {
//     // code goes here
//   }

//If the function only has one parameter, you can omit the parentheses around the parameter list

//If the arrow function is returning a simple expression, you can omit the return keyword and the curly braces {}. This is called an implicit return.

// const multiplyTwoNumbers = (num1, num2) => num1 * num2;

const renderSongs = (array) => {
    const songsHTML = array.map((song) => {
        return `<li id="song-${song.id}" class = "playlist-song">
<button class="playlist-song-info" onclick ="playSong(${song.id})">
<span class ="playlist-song-title">${song.title}</span>
<span class ="playlist-song-artist">${song.artist}</span>
<span class = "playlist-song-duration">${song.duration}</span>
</button>
<button class="playlist-song-delete" aria-label = "Delete ${song.title}" onclick = "deleteSong(${song.id})">
<svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8" fill="#4d4d62"/><path fill-rule="evenodd" clip-rule="evenodd" d="M5.32587 5.18571C5.7107 4.90301 6.28333 4.94814 6.60485 5.28651L8 6.75478L9.39515 5.28651C9.71667 4.94814 10.2893 4.90301 10.6741 5.18571C11.059 5.4684 11.1103 5.97188 10.7888 6.31026L9.1832 7.99999L10.7888 9.68974C11.1103 10.0281 11.059 10.5316 10.6741 10.8143C10.2893 11.097 9.71667 11.0519 9.39515 10.7135L8 9.24521L6.60485 10.7135C6.28333 11.0519 5.7107 11.097 5.32587 10.8143C4.94102 10.5316 4.88969 10.0281 5.21121 9.68974L6.8168 7.99999L5.21122 6.31026C4.8897 5.97188 4.94102 5.4684 5.32587 5.18571Z" fill="white"/></svg>
</button>
</li>
`}).join('');
    playlistSongs.innerHTML = songsHTML;
}

//The map() method is used to iterate through an array and return a new array. It's helpful when you want to create a new array based on the values of an existing array. 
//const numbers = [1, 2, 3];
// const doubledNumbers = numbers.map((number) => number * 2);
// doubledNumbers will be [2, 4, 6]

//The join() method is used to join all elements of an array into a string. By default, it joins the elements with a comma. You can specify a different separator by passing it as an argument to the join() method.


//The sort() method converts elements of an array into strings and sorts them in place based on their values in the UTF-16 encoding
const sortSongs = () => {
    userData?.songs.sort((a, b) => {
        if (a.title < b.title)
            return -1;
        if (a.title > b.title)
            return 1;
        return 0;
    });//If you return a negative number, the first item is sorted before the second item.
    return userData?.songs;
};

renderSongs(sortSongs());

const highlightCurrentSong = ()=>{
    const playlistSongs = document.querySelectorAll('.playlist-song');
    const songToHighlight = document.getElementById(`song-${userData?.currentSong?.id}`);
    playlistSongs.forEach((songEl)=>
    {
        songEl.removeAttribute('aria-current');
    }
    );
    if(songToHighlight)
    {
        songToHighlight.setAttribute('aria-current','true');
    }
};

const playSong = (id)=>{
    const song  = userData?.songs.find((song)=>song.id === id);
    audio.src = song.src;// This tells the audio element where to find the audio data for the selected song.
    audio.title = song.title;//This tells the audio element what to display as the title of the song.
    if(userData?.currentSong === null || userData?.currentSong.id !== song.id){
        audio.currentTime = 0;
    }
    else{//current song pos
        audio.currentTime = userData?.songCurrentTime;
    }
    userData.currentSong = song;
    playButton.classList.add('playing');
    audio.play();
    highlightCurrentSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
};

const pauseSong = ()=>{
    userData.songCurrentTime = audio.currentTime;
    playButton.classList.remove('playing');
    audio.pause();
};

const getCurrentSongIndex = ()=>{
    return userData?.songs.indexOf(userData?.currentSong);
};

const playNextSong = ()=>{
    if(userData?.currentSong === null){
        playSong(userData?.songs[0].id);
    }
    else
    {
        const currentSongIndex = getCurrentSongIndex();
        const nextSong = userData?.songs[currentSongIndex + 1];
        playSong(nextSong?.id);
    }
};

const playPreviousSong = ()=>{
    if(userData?.currentSong===null)
    {
        playSong(userData?.songs[0].id);
    }
    else{
        const currentSongIndex = getCurrentSongIndex();
        if(currentSongIndex === 0){
            userData.songCurrentTime = 0;
            playSong(userData?.songs[0].id);
            return;
        }
        const previousSong = userData?.songs[currentSongIndex - 1];
        playSong(previousSong?.id);
    
    }
};

const setPlayerDisplay = () =>
{
    const playingSong = document.getElementById('player-song-title');
    const songArtist = document.getElementById('player-song-artist');
    const currentTitle = userData?.currentSong?.title;
    const currentArtist = userData?.currentSong?.artist;
    //textContent sets the text of a node and allows you to set or retrieve the text content of an HTML element.
    playingSong.textContent = (currentTitle) ? currentTitle : '';
    songArtist.textContent = (currentArtist) ? currentArtist : '';
}

const setPlayButtonAccessibleText = ( )=>
{
    const song = userData?.currentSong || userData?.songs[0];
    playButton.setAttribute('aria-label',song?.title ?`Play ${song.title}`: 'Play');
}

const shuffle = () => {
    // One way to randomize an array of items would be to subtract 0.5 from Math.random() which produces random values that are either positive or negative. This will cause the sort() method to randomly sort the array.
    userData?.songs.sort(() => Math.random() - 0.5);
    userData.currentSong = null;
    userData.songCurrentTime = 0;
    renderSongs(userData?.songs);
    pauseSong();
    setPlayerDisplay();
    setPlayButtonAccessibleText();
};

const deleteSong = (id) => {
    if(userData?.currentSong?.id === id){
        userData.currentSong = null;
        userData.songCurrentTime = 0;
        pauseSong();
        setPlayerDisplay();
    }
    // The filter method keeps only the elements of an array that satisfy the callback function passed to it:
    userData.songs = userData?.songs.filter((song) => song.id !== id);
    renderSongs(userData?.songs);
    highlightCurrentSong();
    setPlayButtonAccessibleText();
    if(userData?.songs.length === 0){
        //createElement() is a DOM method you can use to dynamically create an element using JavaScript.
        const resetButton = document.createElement('button');
        //createTextNode() method is used to create a text node. 
        const resetText = document.createTextNode('Reset Playlist');
        resetButton.id = "reset";
        resetButton.ariaLabel = "Reset playlist";
        //appendChild() lets you add a node or an element as the child of another element. 
        resetButton.appendChild(resetText);
        playlistSongs.appendChild(resetButton);
        resetButton.addEventListener('click',()=>{
            userData.songs = [...allSongs];
            renderSongs(sortSongs());
            setPlayButtonAccessibleText();
            resetButton.remove();
        });
    }
}

playButton.addEventListener('click',()=>{
    if(userData?.currentSong === null){
        playSong(userData?.songs[0].id);
    }
    else
    {
        playSong(userData?.currentSong.id);
    }
});

pauseButton.addEventListener('click',pauseSong);

nextButton.addEventListener('click',playNextSong);

previousButton.addEventListener('click',playPreviousSong);

shuffleButton.addEventListener('click',shuffle);

audio.addEventListener('ended',()=>{
    const currentSongIndex = getCurrentSongIndex();
    const nextSongExists = userData?.songs[currentSongIndex + 1] ? true : false;
    if(nextSongExists){
        playNextSong();
    }
    else{
        pauseSong();
        userData.currentSong = null;
        userData.songCurrentTime = 0;
        setPlayerDisplay();
        highlightCurrentSong();
        setPlayButtonAccessibleText();
    }
});