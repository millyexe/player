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
    poster: "img/7.jpg",
  },
  {
    id: "8",
    songName: `Music8<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/8.jpg",
  },
  {
    id: "9",
    songName: ` Music9 <br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/9.jpg",
  },
  {
    id: "10",
    songName: `Music10<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/10.jpg",
  },
  {
    id: "11",
    songName: `Music11<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/11.jpg",
  },
  {
    id: "12",
    songName: `Music12<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/12.jpg",
  },
  {
    id: "13",
    songName: `Music13<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/13.jpg",
  },
  {
    id: "14",
    songName: `Music14<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/14.jpg",
  },
  {
    id: "15",
    songName: `Music15<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/15.jpg",
  },
  {
    id: "16",
    songName: `Music16<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/16.jpg",
  },
  {
    id: "17",
    songName: `Music17<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/17.jpg",
  },
  {
    id: "18",
    songName: `Music18<br>
    <div class="subtitle">MILLYexe</div>`,
    poster: "img/18.jpg",
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
    masterPlay.classList.remove("bi-play-fill");
    masterPlay.classList.add("bi-pause-fill");
    wave.classList.add("active2");
  } else {
    music.pause();
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");
    wave.classList.remove("active2");
  }
});

const makeAllBackground = () => {
  Array.from(document.getElementsByClassName("songItem")).forEach((el) => {
    el.style.background = "grey";
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
    masterPlay.classList.add("bi-play-fill");
    masterPlay.classList.remove("bi-pause-fill");

    let songTitles = songs.filter((els) => {
      return els.id == index;
    });
    songTitles.forEach((elss) => {
      let { songName, poster } = elss;
      title.innerHTML = songName;
    });
    makeAllBackground();
  });
});

//

// const makeAllPlays = () => {
//   Array.from(document.getElementsByClassName("playListPlay")).forEach(
//     (element) => {
//       element.classList.add("bi-play-circle-fill");
//       element.classList.remove("bi-pause-circle-fill");
//     }
//   );
// };

// let index = 0;

// let poster_master_play = document.getElementById("poster_master_play");
// let title = document.getElementById("title");

// Array.from(document.getElementsByClassName("playListPlay")).forEach(
//   (element) => {
//     element.addEventListener("click", (e) => {
//       index = e.target.id;
//       makeAllPlays();
//       e.target.classList.remove("bi-play-circle-fill");
//       e.target.classList.add("bi-pause-circle-fill");
//       music.src = `audio/${index}.mp3`;
//       poster_master_play.src = `img/${index}.jpg`;
//       music.play();
//       let song_title = songs.filter((ele) => {
//         return ele.id == index;
//       });
//       song_title.forEach((ele) => {
//         let { songName } = ele;
//         title.innerHTML = songName;
//       });
//     });
//   }
// );
let pop_song_left = document.getElementById("pop_song_left");
let pop_song_right = document.getElementById("pop_song_right");
let pop_song = document.getElementsByClassName("pop_song")[0];

pop_song_right.addEventListener("click", () => {
  pop_song.scrollLeft += 330;
});
pop_song_left.addEventListener("click", () => {
  pop_song.scrollLeft -= 330;
});
let pop_art_left = document.getElementById("pop_art_left");
let pop_art_right = document.getElementById("pop_art_right");
let Artist_bx = document.getElementsByClassName("Artists_box")[0];

pop_art_right.addEventListener("click", () => {
  Artist_bx.scrollLeft += 330;
});

pop_art_left.addEventListener("click", () => {
  Artist_bx.scrollLeft -= 330;
});
