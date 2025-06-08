console.log("heloo!");

let songIndex = 0;
let audioElement = new Audio('1.mp3');

let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");
let gif = document.getElementById("gif");
let songItems = Array.from(document.getElementsByClassName("songItems"));
let songItemPlay=Array.from(document.getElementsByClassName("songItemPlay"));
let masterSongnName = document.getElementById("masterSongName");


let songs = [
    { songName: "Let Me Love You", filePath: "1.mp3", coverPath: "1.jpg" },
    { songName: "Hookah-Bar", filePath: "2.mp3", coverPath: "https://pagalworld.ink/siteuploads/thumb/sft20/9957_resize2x_200x200.webp"},
    { songName: "Royalty", filePath: "3.mp3", coverPath: "https://up.yimg.com/ib/th?id=OIP.c9VEQBVhLBX1m0iaeg5BWwAAAA&pid=Api&rs=1&c=1&qlt=95&w=165&h=92" },
    { songName: "Middle Of The Night", filePath: "4.mp3", coverPath: "https://up.yimg.com/ib/th?id=OIP.wEGgca4X55CZsYbGSsed1QHaHa&pid=Api&rs=1&c=1&qlt=95&w=96&h=96" },
    { songName: "Alone", filePath: "5.mp3", coverPath: "https://up.yimg.com/ib/th?id=OIP.T1KZTI6MXClsem0JNNzFegHaHa&pid=Api&rs=1&c=1&qlt=95&w=96&h=96" },
    { songName: "On My Way", filePath: "6.mp3", coverPath: "https://up.yimg.com/ib/th?id=OIP.0-29dW72GOXXYHrJxnG6fgHaHa&pid=Api&rs=1&c=1&qlt=95&w=96&h=96" },
    { songName: "We-Rollin", filePath: "7.mp3", coverPath: "https://up.yimg.com/ib/th?id=OIP.tAqDYCKZzxzyTDL6MV5APwHaHa&pid=Api&rs=1&c=1&qlt=95&w=96&h=96" },

]

songItems.forEach((element, i) => {

    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})


masterPlay.addEventListener("click", () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.add("fa-pause");
        masterPlay.classList.remove("fa-play");
        gif.style.opacity = 1;
        songItemPlay.classList.remove("fa-play");
        songItemPlay.classList.add("fa-pause");
    }

    else {
        audioElement.pause();
        masterPlay.classList.add("fa-play");
        masterPlay.classList.remove("fa-pause");
        gif.style.opacity = 0;
        songItemPlay.classList.remove("fa-pause");
        songItemPlay.classList.add("fa-play");
    }

})


//update progressbar
//Formula of convert time into percentage
//(currentvalue/totalvalue)*mainvalue

audioElement.addEventListener('timeupdate', () => {
    let progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

    myProgressBar.value = progress;

})

//Formula of convert percentage into time
//(currentvalue/100)*totalvalue(duration)


myProgressBar.addEventListener("change", () => {

    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;

})

const MakeAllPlays = () => {
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element) => {
        element.classList.remove("fa-pause");
        element.classList.add("fa-play");
    })
}

songItemPlay.forEach((element) => {
    element.addEventListener("click", (e) => {

        MakeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove("fa-play");
        e.target.classList.add("fa-pause");
        audioElement.src = `${songIndex + 1}.mp3`;
        masterSongnName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-play");
        masterPlay.classList.add("fa-pause");

        })
})

document.getElementById("next").addEventListener("click", (element) => {
    if (songIndex >= 6) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongnName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    element.classList.remove("fa-pause");
    element.classList.add("fa-play");

})

document.getElementById("previous").addEventListener("click", (element) => {
    if (songIndex === 0) {
        songIndex = 6;
    }
    else {
        songIndex -= 1;
    }
    audioElement.src = `${songIndex + 1}.mp3`;
    masterSongnName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-play");
    masterPlay.classList.add("fa-pause");
    element.classList.remove("fa-play");
    element.classList.add("fa-pause");

})

