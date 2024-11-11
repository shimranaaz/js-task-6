(function() {
  // DOM elements and variables in local scope
  const btn = document.querySelectorAll('.song #play_btn');
  const song = document.querySelectorAll('#music');
  const p_m_player = document.querySelector('.popup_music_player');
  const down_player = document.querySelector('#down_player');
  const current_track_name = document.querySelector('#current_track_name');
  const current_singer_name = document.querySelector('#current_singer_name');
  const song_img = document.querySelector('.song_img');
  const play_pause_btn = document.querySelector('#play_pause_btn');
  const slider = document.querySelector('#slider');
  const forward_btn = document.querySelector('#forward_btn');
  const backward_btn = document.querySelector('#backward_btn');
  const current_duration = document.querySelector('.controlls .progress_part #current_duration');
  const total_duration = document.querySelector('.controlls .progress_part #total_duration');
  const s_m_player = document.querySelector('.small_music_player');
  const playing_img = document.querySelector('.playing_img');
  const wave_animation = document.querySelector('.wave_animation');
  const up_player = document.querySelector('#up_player');
  const song_name = document.querySelector('#song_name');
  const artist_name = document.querySelector('#artist_name');

  // Variables for song status and index
  let is_song_played = false;
  let song_status = false;
  let index_no = 0;

  // Song button event listeners
  btn.forEach((btn, index) => {
    btn.addEventListener('click', function() {
      s_m_player.style.transform = 'translateY(0px)';

      if (index !== index_no) {
        song_status = false;
      }

      index_no = index;
      song[index].currentTime = 0;

      song_status ? pause_song() : play_song();
    });
  });

  // Pause song function
  function pause_song() {
    song[index_no].pause();
    song_status = false;
    clearInterval(update_second);
    wave_animation.style.opacity = '0';
    play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  }

  // Update song progress every second
  function update_second() {
    let position = 0;

    if (!isNaN(song[index_no].duration)) {
      position = song[index_no].currentTime * (100 / song[index_no].duration);
      slider.value = position;
    }

    const durationMinutes = Math.floor(song[index_no].duration / 60);
    const durationSeconds = Math.floor(song[index_no].duration % 60);
    total_duration.textContent = `${durationMinutes}:${durationSeconds < 10 ? '0' : ''}${durationSeconds}`;

    const curr_minutes = Math.floor(song[index_no].currentTime / 60);
    const curr_seconds = Math.floor(song[index_no].currentTime % 60);
    current_duration.textContent = `${curr_minutes}:${curr_seconds < 10 ? '0' : ''}${curr_seconds}`;

    if (song[index_no].ended) {
      clearInterval(update_second);
      wave_animation.style.opacity = '0';
      play_pause_btn.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    }
  }

  // Show and hide popup music player
  up_player.addEventListener('click', () => {
    p_m_player.style.transform = 'translateY(0%)';
  });
  down_player.addEventListener('click', () => {
    p_m_player.style.transform = 'translateY(110%)';
  });

  // Play/pause button inside popup music player
  play_pause_btn.addEventListener('click', () => {
    if (!song_status) {
      song[index_no].play();
      song_status = true;
      wave_animation.style.opacity = '1';
      play_pause_btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
    } else {
      pause_song();
    }
  });

  // Change slider position
  slider.addEventListener('input', () => {
    song[index_no].currentTime = song[index_no].duration * (slider.value / 100);
  });

  // Forward button (next song)
  forward_btn.addEventListener('click', () => {
    index_no = (index_no + 1) % song.length;
    song[index_no].currentTime = 0;
    play_song();
  });

  // Backward button (previous song)
  backward_btn.addEventListener('click', () => {
    index_no = (index_no - 1 + song.length) % song.length;
    song[index_no].currentTime = 0;
    play_song();
  });


  // Play song function
  function play_song() {
    song[index_no].play();

    if (is_song_played) {
      document.querySelector('.active_song')?.pause();
      document.querySelector('.active_song')?.classList.remove('active_song');
    } else {
      is_song_played = true;
    }

    song[index_no].classList.add('active_song');
    song_status = true;
    setInterval(update_second, 1000);
    wave_animation.style.opacity = '1';
    p_m_player.style.transform = 'translateY(0%)';

    // Update song details in the UI
    song_img.innerHTML = `<img src="${All_song[index_no].img}" />`;
    playing_img.innerHTML = `<img src="${All_song[index_no].img}" />`;
    song_name.innerHTML = All_song[index_no].name;
    artist_name.innerHTML = All_song[index_no].singer;
    current_track_name.innerHTML = All_song[index_no].name;
    current_singer_name.innerHTML = All_song[index_no].singer;
    play_pause_btn.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
  }
})();