const music = new Audio("Blue_chair.mp3");
// create Array

const songs = [
  {
    id: "1",
    songName: ` Meditation for sleep <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "2",
    songName: ` Lullary <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "3",
    songName: ` Tapping on wood <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "4",
    songName: ` Heavy Rain <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "5",
    songName: ` Ocean <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "6",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "7",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "8",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "9",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "10",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "11",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "12",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "13",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "14",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "15",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "16",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "17",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
  {
    id: "18",
    songName: ` Possitive Afformation <br>
    <div class="subtitles">MILLYexe</div>`,
    poster: "img.png",
  },
];

Array.from(document.getElementsByClassName("songItem")).forEach(
  (element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].poster;
    element.getElementsByTagName("h5")[0].innerHTML = songs[i].songName;
  }
);
