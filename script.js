const progress = document.getElementById("progress");
const song = document.getElementById("song");
const controlIcon = document.getElementById("controlIcon");
const playPauseButton = document.querySelector(".play-pause-btn");
const forwardButton = document.querySelector(".controls button.forward");
const backwardButton = document.querySelector(".controls button.backward");
const songName = document.querySelector(".music-player h1");
const artistName = document.querySelector(".music-player p");

const songs = [
  { title: "Chase Me", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/Chase%20Me.mp3" },
  { title: "Good Night", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/GOOD%20NIGHT.mp3" },
  { title: "Fly High", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/Fly%20high.mp3" },
  { title: "You and I", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/YOU%20AND%20I.mp3" },
  { title: "What", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/What.mp3" },
  { title: "PIRI", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/PIRI.mp3" },
  { title: "Breaking Out", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/Breaking%20Out.mp3" },
  { title: "Deja Vu", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/Deja%20Vu.mp3" },
  { title: "Scream", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/Scream.mp3" },
  { title: "Endless Night", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/Endless%20Night.mp3" },
  { title: "R.o.S.E BLUE (Prod. ESTi)", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/R.o.S.E%20BLUE%20(Prod.%20ESTi).mp3" },
  { title: "BOCA", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/BOCA.mp3" },
  { title: "Odd Eye", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/Odd%20Eye.mp3" },
  { title: "Eclipse", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/Eclipse.mp3" },
  { title: "BEcause", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/BEcause.mp3" },
  { title: "MAISON", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/MAISON.mp3" },
  { title: "Vision", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/VISION.mp3" },
  { title: "Reason", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/REASON.mp3" },
  { title: "BONVOYAGE", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/BONVOYAGE.mp3" },
  { title: "OTTD", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/OOTD.mp3" },
  { title: "JUSTICE", name: "Dreamcatcher", source: "https://github.com/Ana4Root/Assets/raw/main/Music/JUSTICE.mp3" },
];

const gradients = {
  "Chase Me": "linear-gradient(0deg, #5E4D37ff, #171918ff, #433A2Fff, #926D45ff, #1A1815ff)",
  "Good Night": "linear-gradient(0deg, #8C4F34ff, #BE926Eff, #530B09ff, #823A30ff, #5C070Fff)",
  "Fly High": "linear-gradient(0deg, #623D90ff, #7F4BAEff, #694095ff, #7F5AA8ff, #69409Aff)",
  "You and I": "linear-gradient(0deg, #579393ff, #018090ff, #A69376ff, #7D9893ff, #017D98ff)",
  "What": "linear-gradient(0deg, #FA3797ff, #DF94C2ff, #F87DBAff, #CB0078ff, #E046A2ff)",
  "PIRI": "linear-gradient(0deg, #5F7660ff, #40594Bff, #597E6Dff, #D3CE9Aff, #D8CD99ff)",
  "Breaking Out": "linear-gradient(0deg, #C8BDBEff, #4D2D25ff, #DFE1E7ff, #784D36ff, #55483Eff)",
  "Deja Vu": "linear-gradient(0deg, #C99269ff, #B44A3Fff, #A41E32ff, #BC8153ff, #A41A2Cff)",
  "Scream": "linear-gradient(0deg, #5F4232ff, #6B5847ff, #E0D7C5ff, #876D3Aff, #C9BDABff)",
  "Endless Night": "linear-gradient(0deg, #E3DDDFff, #5F6783ff, #1D638Aff, #314356ff, #73A3A4ff)",
  "R.o.S.E BLUE (Prod. ESTi)": "linear-gradient(0deg, #40296Aff, #301750ff, #3D2363ff, #402867ff, #351C56ff)",
  "BOCA": "linear-gradient(0deg, #1296F4ff, #B8BBC7ff, #025BA8ff, #191B39ff, #073B6Eff)",
  "Odd Eye": "linear-gradient(0deg, #9D9D9Dff, #CFCECFff, #C0C1C0ff, #8E908Fff, #A8A6AAff)",
  "Eclipse": "linear-gradient(0deg, #857764ff, #140402ff, #A79170ff, #5A2F23ff, #DDD2C1ff)",
  "BEcause": "linear-gradient(0deg, #031E50ff, #142B63ff, #40547Eff, #88A2C1ff, #92BCD9ff)",
  "MAISON": "linear-gradient(0deg, #6A6250ff, #D6D3C6ff, #998656ff, #AB9C75ff, #857A5Bff)",
  "Vision": "linear-gradient(0deg, #250003ff, #450108ff, #310105ff, #1A0101ff, #49020Dff)",
  "Reason": "linear-gradient(0deg, #AB7395ff, #1C1B4Dff, #191945ff, #B49DC4ff, #422E5Aff)",
  "BONVOYAGE": "linear-gradient(0deg, #030409ff, #253404ff, #ACEE03ff, #A9EE01ff, #2F3F05ff)",
  "OTTD": "linear-gradient(0deg, #480506ff, #040003ff, #220002ff, #A30101ff, #AC0000ff)",
  "JUSTICE": "linear-gradient(0deg, #8699AEff, #D4DBE1ff, #EBF1F1ff, #5D6A7Dff, #BED2EAff)"
};

let currentSongIndex = 0;

function updateSongInfo() {
  songName.textContent = songs[currentSongIndex].title;
  artistName.textContent = songs[currentSongIndex].name;
  song.src = songs[currentSongIndex].source;

  updateBackground(); // Atualiza o fundo da página
}

function updateBackground() {
  const gradient = gradients[songs[currentSongIndex].title];
  if (gradient) {
    document.body.style.background = gradient;
  }
}

song.addEventListener("timeupdate", function () {
  if (!song.paused) {
    progress.value = song.currentTime;
  }
});

song.addEventListener("loadedmetadata", function () {
  progress.max = song.duration;
  progress.value = song.currentTime;
});

function pauseSong() {
  song.pause();
  controlIcon.classList.remove("fa-pause");
  controlIcon.classList.add("fa-play");
}

function playSong() {
  song.play();
  controlIcon.classList.add("fa-pause");
  controlIcon.classList.remove("fa-play");
}

function playPause() {
  if (song.paused) {
    playSong();
  } else {
    pauseSong();
  }
}

playPauseButton.addEventListener("click", playPause);

progress.addEventListener("input", function () {
  song.currentTime = progress.value;
});

progress.addEventListener("change", function () {
  playSong();
});

forwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  updateSongInfo();
  playPause();
});

backwardButton.addEventListener("click", function () {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  updateSongInfo();
  playPause();
});

updateSongInfo();

// Inicialize o Swiper
const swiper = new Swiper(".swiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 0,
  slidesPerView: "auto",
  allowTouchMove: false,
  spaceBetween: 40,
  coverflowEffect: {
    rotate: 25,
    stretch: 0,
    depth: 50,
    modifier: 1,
    slideShadows: false,
  },
  navigation: {
    nextEl: ".forward",
    prevEl: ".backward",
  },
});

// Inicialize o particles.js
particlesJS.load('particles-js', 'particles-config.json', function() {
  console.log('particles.js config loaded');
});

