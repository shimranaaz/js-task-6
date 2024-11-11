
let All_song = [
    {
      name: "Faded",
      path: "music1.mp3",
      img: "1.jpg",
      singer: "Alan Walker"
    },
    {
      name: "Dusk till down",
      path: "music2.mp3",
      img: "2.webp",
      singer: "Zayn Malik"
    },
    {
      name: " The Spectre",
      path: "music3.mp3",
      img: "3.jpg",
      singer: "Alan Walker"
    },
    {
      name: "Peaky Blinder",
      path: "music4.mp3",
      img: "4.avif",
      singer: "Lisa O'Neill"
    },
    {
      name: "Hurts So Good",
      path: "music5.mp3",
      img: "5.jpg",
      singer: "Astrid S"
    },
    {
     name: " In The End",
     path: "music6.mp3",
     img: "6.jpg",
     singer: "Linkin Park"
    },
    {
      name: "ilomilo",
      path: "music7.mp3",
      img: "7.jpg",
      singer: "Billie Eilish"
     },{
      name: "lovely",
      path: "music8.mp3",
      img: "8.jpg",
      singer: "Billie Eilish, Khalid"
     },{
      name: "Into Your Arms",
      path: "music9.mp3",
      img: "9.jpg",
      singer: "Witt Lowry"
     },
     {
      name: "Don't Go",
      path: "music10.mp3",
      img: "10.jpg",
      singer: "Alan Walker"
     }, {
      name: "Katchi Sera",
      path: "music11.mp3",
      img: "11.jpg",
      singer: "Sai Abhyankkar"

     },
     {
      name: "Adi Penne",
      path: "music12.mp3",
      img: "12.jpg",
      singer: "Srinisha,Stephen"

     },
     {
      name: "Chuttamalle",
      path: "music13.mp3",
      img: "13.jpg",
      singer: "Shilpa Rao, Anirudh"

     },
     {
      name: "Hey Minnale",
      path: "music14.mp3",
      img: "14.webp",
      singer: "Shweta Mohan, Karthik Netha"

     },
     {
      name: "Maate Vinadhuga",
      path: "music15.mp3",
      img: "15.jpg",
      singer: "Sid Sriram"

     },
      {
      name: "JO TUM MERE HO",
      path: "music16.mp3",
      img: "16.jpg",
      singer: "Anuv Jain"
     },
     {
      name: "Kesariya",
      path: "music17.mp3",
      img: "17.jpg",
      singer: " Arijit Singh"
     },
     {
      name: "Heeriye",
      path: "music18.mp3",
      img: "18.jpg",
      singer: "Jasleen, Arijit Singh"
     },
     {
      name: "Thoda Thoda Pyaar",
      path: "music19.mp3",
      img: "19.jpg",
      singer: "Stebin Ben, Nilesh"
     },
     {
      name: "USKA HI BANANA",
      path: "music20.mp3",
      img: "20.jpg",
      singer: "Arijit Singh"
     }
 ];
 let tracks = document.querySelector('.tracks');
 for (let i = 0; i < All_song.length; i++) {
 
   let Html = ` <div class="song">
       <div class="img">
       <img src="${All_song[i].img}"/>
       </div>
       <div class="more">
       <audio src="${All_song[i].path}" id="music"></audio>
       <div class="song_info">
          <p id="title">${All_song[i].name}</p>
          <p>${All_song[i].singer}</p>
       </div>
       <button id="play_btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
       </div>
     </div>`;
 
   tracks.insertAdjacentHTML("beforeend", Html);
 };

 