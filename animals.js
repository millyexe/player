const music = new Audio("audio/1.mp3");

// create Array

const songs = [
  {
    id: "1",
    songName: `Meditation for sleep<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/1.jpg",
  },
  {
    id: "2",
    songName: `Singing<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/2.jpg",
  },
  {
    id: "3",
    songName: `Tapping on wood<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/3.jpg",
  },
  {
    id: "4",
    songName: `Heavy Rain<br>
    <div class="subtitle">Nature ASMR</div>`,
    poster: "img/4.jpg",
  },
  {
    id: "5",
    songName: `Ocean<br>
    <div class="subtitle">Nature ASMR</div>`,
    poster: "img/5.jpg",
  },
  {
    id: "6",
    songName: `Possitive Afformation<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/6.jpg",
  },
  {
    id: "7",
    songName: `Music7<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "8",
    songName: `Music8<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "9",
    songName: ` Music9 <br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "10",
    songName: `Music10<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "11",
    songName: `Music11<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "12",
    songName: `Music12<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "13",
    songName: `Music13<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "14",
    songName: `Music14<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "15",
    songName: `Music15<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "16",
    songName: `Music16<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "17",
    songName: `Music17<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "18",
    songName: `Music18<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/19.jpg",
  },
  {
    id: "19",
    songName: `Music19<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/20.jpg",
  },
  {
    id: "20",
    songName: `Music20<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/20.jpg",
  },
  {
    id: "21",
    songName: ` Music21 <br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/20.jpg",
  },
  {
    id: "22",
    songName: `Music22<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/20.jpg",
  },
  {
    id: "23",
    songName: `Music23<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/20.jpg",
  },
  {
    id: "24",
    songName: `Music24<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/20.jpg",
  },
  {
    id: "25",
    songName: `Music25<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/20.jpg",
  },
  {
    id: "26",
    songName: `Music26<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/20.jpg",
  },
  {
    id: "27",
    songName: `Music27<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/20.jpg",
  },
  {
    id: "28",
    songName: `Music28<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/20.jpg",
  },
  {
    id: "29",
    songName: `Music29<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/20.jpg",
  },
  {
    id: "30",
    songName: `Music30<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/20.jpg",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach((e, i) => {
  e.getElementsByTagName("img")[0].src = songs[i].poster;
  e.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
});
let masterPlay = document.getElementById("masterPlay");
let wave = document.getElementById("wave");

masterPlay.addEventListener("click", () => {
  if (music.paused || music.currentTime <= 0) {
    music.play();
    wave.classList.add("active2");
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
  } else {
    music.pause();
    wave.classList.remove("active2");
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
  }
});

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "rgb(128, 147, 120)";
  });
};

const makeAllplays = () => {
  Array.from(document.getElementsByClassName("playListPlay")).forEach((el) => {
    el.classList.add("bi-play-circle-fill");
    el.classList.remove("bi-pause-circle-fill");
  });
};

let index = 0;
let poster_master_play = document.getElementById("poster_master_play");
let title = document.getElementById("title");

Array.from(document.getElementsByClassName("playListPlay")).forEach((e) => {
  e.addEventListener("click", (el) => {
    index = el.target.id;
    music.src = `audio/${index}.mp3`;
    poster_master_play.src = `img/${index}.jpg`;
    music.play();
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });
    songTitles.forEach((elss) => {
      let { songName, poster } = elss;
      title.innerHTML = songName;
    });
    makeAllBackground();
    Array.from(document.getElementsByClassName("songItem"))[
      index - 1
    ].style.background = "rgb(137, 127, 91)";
    makeAllplays();
    el.target.classList.remove("bi-play-circle-fill");
    el.target.classList.add("bi-pause-circle-fill");
    wave.classList.add("active2");
  });
});

let currentStart = document.getElementById("currentStart");
let currentEnd = document.getElementById("currentEnd");
let seek = document.getElementById("seek");
let bar2 = document.getElementById("bar2");
let dot = document.getElementsByClassName("dot")[0];

music.addEventListener("timeupdate", () => {
  let music_curr = music.currentTime;
  let music_dur = music.duration;

  let min1 = Math.floor(music_dur / 60);
  let sec1 = Math.floor(music_dur % 60);

  if (sec1 < 10) {
    sec1 = `0${sec1}`;
  }
  currentEnd.innerText = `${min1}:${sec1}`;

  let min2 = Math.floor(music_curr / 60);
  let sec2 = Math.floor(music_curr % 60);
  if (sec2 < 10) {
    sec2 = `0${sec2}`;
  }

  currentStart.innerText = `${min2}:${sec2}`;

  let progressBar = parseInt((music_curr / music_dur) * 100);
  seek.value = progressBar;

  let seekbar = seek.value;
  bar2.style.width = `${seekbar}$`;
  dot.style.left = `${seekbar}$`;
});

seek.addEventListener("change", () => {
  music.currentTime = (seek.value * music.duration) / 100;
});

let vol_icon = document.getElementById("vol_icon");
let vol = document.getElementById("vol");
let vol_bar = document.getElementsByClassName("vol_bar")[0];
let vol_dot = document.getElementById("vol_dot");

vol.addEventListener("change", () => {
  if (vol.value == 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.add("bi-volume-off-fill");
  }
  if (vol.value > 0) {
    vol_icon.classList.remove("bi-volume-up-fill");
    vol_icon.classList.add("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  if (vol.value > 50) {
    vol_icon.classList.add("bi-volume-up-fill");
    vol_icon.classList.remove("bi-volume-down-fill");
    vol_icon.classList.remove("bi-volume-off-fill");
  }
  let vol_a = vol.value;
  vol_bar.style.width = `${vol_a}$`;
  vol_dot.style.left = `${vol_a}$`;
  music.volume = vol_a / 100;
});

let back = document.getElementById("back");
let next = document.getElementById("next");
index = Array.from(document.getElementsByClassName("songItem")).length;

back.addEventListener("click", () => {
  index -= 1;
  if (index < 1) {
    index = Array.from(document.getElementsByClassName("songItem")).length;
  }

  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((elss) => {
    let { songName, poster } = elss;
    title.innerHTML = songName;
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(137, 127, 91)";
  makeAllplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active2");
});

next.addEventListener("click", () => {
  index++;
  if (index > Array.from(document.getElementsByClassName("songItem")).length) {
    index = 1;
  }

  music.src = `audio/${index}.mp3`;
  poster_master_play.src = `img/${index}.jpg`;
  music.play();
  masterPlay.classList.remove("bi-play-fill");
  masterPlay.classList.add("bi-pause-fill");

  let songTitles = songs.filter((els) => {
    return els.id == index;
  });
  songTitles.forEach((elss) => {
    let { songName, poster } = elss;
    title.innerHTML = songName;
  });
  makeAllBackground();
  Array.from(document.getElementsByClassName("songItem"))[
    index - 1
  ].style.background = "rgb(137, 127, 91)";
  makeAllplays();
  el.target.classList.remove("bi-play-circle-fill");
  el.target.classList.add("bi-pause-circle-fill");
  wave.classList.add("active2");
});

// feefefs
let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});
// let pop_art_left = document.getElementById("pop_art_left");
// let pop_art_right = document.getElementById("pop_art_right");
// let Artists_bx = document.getElementsByClassName("Artists_bx")[0];

// pop_art_right.addEventListener("click", () => {
//   Artists_bx.scrollLeft += 330;
// });

// pop_art_left.addEventListener("click", () => {
//   Artists_bx.scrollLeft -= 330;
// });
