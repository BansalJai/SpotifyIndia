let CurrentSong = new Audio();
document.addEventListener("DOMContentLoaded", function () {
    
  const SongList = [
    "Tere Hawaale(PagalWorld.com.cm).mp3",
    "O Mahi O Mahi(PagalWorld.com.cm).mp3",
    "Lutt Putt Gaya(PagalWorld.com.cm).mp3",
    "Chaleya(PagalWorld.com.cm).mp3",
    "Alag Aasmaan(PagalWorld.com.cm).mp3",
    "_Tu Hai Kahan(PagalWorld.com.cm).mp3",
    "Husn(PagalWorld.com.cm).mp3",
    "Perfect-(PagalSongs.Com.IN).mp3",
    "The-Night-We-Met.mp3",
    "Until-I-Found-You(PagalWorld).mp3",
  ];
  let currentTrackIndex = -1; // To keep track of the currently playing song index

  // Function to play music
  const PlayMusic = (track) => {
    CurrentSong.src = track;
    CurrentSong.play();
    document.querySelector("#playbutton").src = "pause.svg";
  };

  // Function to toggle play/pause
  const TogglePlayPause = () => {
    if (CurrentSong.paused) {
      CurrentSong.play();
      document.querySelector("#playbutton").src = "pause.svg";
    } else {
      CurrentSong.pause();
      document.querySelector("#playbutton").src = "play.svg";
    }
  };

  // Function to update the UI for the currently playing song
  const UpdateUI = (trackIndex) => {
    // Update song image, lyrics, etc.
    let songMain = document.createElement("div");
    songMain.id = "songMain";
    songMain.style = "display:flex; flex-direction:column; height:50%; ";
    songMain.innerHTML = `<img id ="omg2" src="${ImgBack(
      trackIndex
    )}" alt="1" style="height:68.3vh; width:90%; border-radius:10px; margin:auto;" >
            `;
    document.getElementById("songMain").replaceWith(songMain);

    // Update duration of song
    CurrentSong.addEventListener("loadeddata", () => {
      let duration = CurrentSong.duration;
      let times = document.createElement("div");
      times.id = "time";
      times.style = "position:absolute; right:10px; font-style:bold";
      CurrentSong.addEventListener("timeupdate", () => {
        times.innerHTML = `<span>${secondsToHMS(
          CurrentSong.currentTime
        )}/${secondsToHMS(duration)}</span>`;
      });
      document.getElementById("time").replaceWith(times);
    });
  };

  // Add event listener to play button
  document.querySelector("#playbutton").addEventListener("click", function () {
    TogglePlayPause();
  });

  // Add event listeners to song elements
  for (let i = 1; i <= 10; i++) {
    document.querySelector(`#song${i}`).querySelector("#name").textContent =
      SongList[i - 1];
      document.querySelector(`#song${i}`).addEventListener("click", function () {
          document.getElementById("songname").innerHTML = `<span>${
              SongList[i - 1]
            }</span>`;
            if (i - 1 !== currentTrackIndex) {
                currentTrackIndex = i - 1;
                PlayMusic(SongList[currentTrackIndex]);
                UpdateUI(currentTrackIndex);
            } else {
                TogglePlayPause();
            }
        });
    }

  document.getElementById("signup").addEventListener("click", function () {

    document.body.innerHTML = `
        <div class="signumain" style="display:flex; height:100%; gap:10px; justify-content:center ;margin:5px; padding:3px;">
    <div class="left" style="width:30%; border-radius: 10px;">        
        <div class="logos">
        <img class="spoitfyicon" src="Icon.svg" alt="1" style="height: 12vh;">
        </div>
    </div>
    <div class="middle" style="color:white;display:flex; flex-direction: column; width:30%; border-radius: 10px; padding: 150px 0px; gap:25px; justify-content:center; align-items:center">
        <div class="span1" style="font-size: 70px; font-style: bold; font-weight:900;">
            Sign up to Start Listening
        </div>
        <div class="mailidbox" style="display: flex;
        flex-direction: column;
        gap: 11px;
        width:100%">
            <div class="span2" style="font-size:16px; font-weight:900; font-style:bold">Email Address</div>
            <input type="text" placeholder="name@domain.com" style="background-color:black;height:40px ;padding:10px;">
            <div class="span3" style="text-decoration:underline; color:#1fdf64">Use Phone Number instead</div>
        </div>
        <div class="button" style="justify-content: center;
        padding: 7px;
        width: 100%;
        background-color: #1fdf64;
        color: black;
        height: 30px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        font-size: 20px;
        font-style: bold;
        font-weight: 500;">Next</div>
        <div class="span4" style="    color: gray;
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 35px;">-----------------or-----------------</div>
        <div class="button-google" style="
            font-size: 20px;
            align-items: center;
            border: 1px solid white;
            width: 100%;
            display: flex;
            justify-content: center;
            gap:10px;
            border-radius: 10px;
            padding:10px;
            height: 40px;">
            <img src="icons8-google.svg" alt="" style="height:100%">
            Signup With Google
            </div>
        <div class="button-google" style="
            font-size: 20px;
            align-items: center;
            border: 1px solid white;
            width: 100%;
            display: flex;
            justify-content: center;
            gap:5px;
            border-radius: 10px;
            padding:10px;
            height: 40px;">
            <img src="icons8-facebook.svg" alt="" style="height:100%">
            Signup With Facebook
            </div>
        <div class="button-google" style="
            font-size: 20px;
            align-items: center;
            border: 1px solid white;
            width: 100%;
            display: flex;
            justify-content: center;
            gap:15px;
            border-radius: 10px;
            padding:10px;
            height: 40px;">
            <img class="invert"src="icons8-apple-logo.svg" alt="" style="height:100%">
            Sigup with Apple
            </div>
    </div>
    <div class="right" id="right" style="    
    width: 30%;
    border-radius: 10px;
    display: flex;
    justify-content: end;
    height: 30%;
    margin: 10px 10px;">
    <button type="button" id="right2" style="    
    border-radius: 20px;
    font-size: 17px;
    width: 95px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-style:bold;">
    <img src="arrow_back_FILL0_wght400_GRAD0_opsz24 (1).svg" alt="">
    back</button>
    </div>
</div>
        `;
  });
  document.getElementById("login").addEventListener("click", function () {

    document.body.innerHTML = `
    <div class="signumain" style="display:flex; height:100%; gap:10px; justify-content:center ;margin:5px; padding:3px;">
    <div class="left" style="width:30%; border-radius: 10px;">        
        <div class="logos">
        <img class="spoitfyicon" src="Icon.svg" alt="1" style="height: 12vh;">
        </div>
    </div>
    <div class="middle" style="color:white;display:flex; flex-direction: column; width:30%; border-radius: 10px; padding: 150px 0px; gap:25px; justify-content:center; align-items:center">
        <div class="span1" style="font-size: 70px; font-style: bold; font-weight:900;">
            Sign up to Start Listening
        </div>
        <div class="mailidbox" style="display: flex;
        flex-direction: column;
        gap: 11px;
        width:100%">
            <div class="span2" style="font-size:16px; font-weight:900; font-style:bold">Email Address</div>
            <input type="text" placeholder="name@domain.com" style="background-color:black;height:40px ;padding:10px;">
            <div class="span3" style="text-decoration:underline; color:#1fdf64">Use Phone Number instead</div>
        </div>
        <div class="button" style="justify-content: center;
        padding: 7px;
        width: 100%;
        background-color: #1fdf64;
        color: black;
        height: 30px;
        border-radius: 16px;
        display: flex;
        align-items: center;
        font-size: 20px;
        font-style: bold;
        font-weight: 500;">Next</div>
        <div class="span4" style="    color: gray;
        width: 100%;
        display: flex;
        justify-content: center;
        font-size: 35px;">-----------------or-----------------</div>
        <div class="button-google" style="
            font-size: 20px;
            align-items: center;
            border: 1px solid white;
            width: 100%;
            display: flex;
            justify-content: center;
            gap:10px;
            border-radius: 10px;
            padding:10px;
            height: 40px;">
            <img src="icons8-google.svg" alt="" style="height:100%">
            Signup With Google
            </div>
        <div class="button-google" style="
            font-size: 20px;
            align-items: center;
            border: 1px solid white;
            width: 100%;
            display: flex;
            justify-content: center;
            gap:5px;
            border-radius: 10px;
            padding:10px;
            height: 40px;">
            <img src="icons8-facebook.svg" alt="" style="height:100%">
            Signup With Facebook
            </div>
        <div class="button-google" style="
            font-size: 20px;
            align-items: center;
            border: 1px solid white;
            width: 100%;
            display: flex;
            justify-content: center;
            gap:15px;
            border-radius: 10px;
            padding:10px;
            height: 40px;">
            <img class="invert"src="icons8-apple-logo.svg" alt="" style="height:100%">
            Sigup with Apple
            </div>
    </div>
    <div class="right" id="right" style="    
    width: 30%;
    border-radius: 10px;
    display: flex;
    justify-content: end;
    height: 30%;
    margin: 10px 10px;">
    <button type="button" id="right2" style="    
    border-radius: 20px;
    font-size: 17px;
    width: 95px;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    font-style:bold;">
    <img src="arrow_back_FILL0_wght400_GRAD0_opsz24 (1).svg" alt="">
    back</button>
    </div>
</div>
</div>
        `;
  });
//   document.getElementById("homes").addEventListener("click", function () {
//     document.body.innerHTML = `
//     <div class="wholecont">

//     <div class="boxleft">
//         <div class="boxicon">
//             <div class="logos">
//                 <img class="spoitfyicon" src="Icon.svg" alt="1">
//             </div>
//             <div class="homes">
//                 <img class="invert" src="home.svg" alt="2">
//                 <span class="invert">Home</span>
//             </div>
//             <div class="searchs">
//                 <img class="invert" src="search.svg" alt="3">
//                 <span class="invert">Search</span>
//             </div>
//         </div>
//         <div class="boxleftlower">
//             <div class="library">
//                 <img class="invert lib" src="Library.svg" alt="4">
//                 <span class="invert librarys">Library</span>
//                 <img class="invert plus " src="plus.svg" alt="5">
//             </div>
//             <div class="songsslist">
//                 <div class="song" id="song1">
//                     <span id="d1">
//                         🎧
//                     </span>
//                     <span id="name" >
//                         Until I found You
//                     </span>
//                 </div>
//                 <div class="song" id="song2">
//                     <span id="d1">
//                         🎧
//                     </span>
//                     <span id="name" >
//                         Until I found You
//                     </span>
//                 </div>
//                 <div class="song" id="song3">
//                     <span id="d1">
//                         🎧
//                     </span>
//                     <span id="name" >
//                         Until I found You
//                     </span>
//                 </div>
//                 <div class="song" id="song4">
//                     <span id="d1">
//                         🎧
//                     </span>
//                     <span id="name" >
//                         Until I found You
//                     </span>
//                 </div>
//                 <div class="song" id="song5">
//                     <span id="d1">
//                         🎧
//                     </span>
//                     <span id="name" >
//                         Until I found You
//                     </span>
//                 </div>
//                 <div class="song" id="song6">
//                     <span id="d1">
//                         🎧
//                     </span>
//                     <span id="name" >
//                         Until I found You
//                     </span>
//                 </div>
//                 <div class="song" id="song7">
//                     <span id="d1">
//                         🎧
//                     </span>
//                     <span id="name" >
//                         Until I found You
//                     </span>
//                 </div>
//                 <div class="song" id="song8">
//                     <span id="d1">
//                         🎧
//                     </span>
//                     <span id="name" >
//                         Until I found You
//                     </span>
//                 </div>
//                 <div class="song" id="song9">
//                     <span id="d1">
//                         🎧
//                     </span>
//                     <span id="name" >
//                         Until I found You
//                     </span>
//                 </div>
//                 <div class="song" id="song10">
//                     <span id="d1">
//                         🎧
//                     </span>
//                     <span id="name" >
//                         Until I found You
//                     </span>
//                 </div>
//             </div>
//             <div class="credits">
//                 <a href="https://www.spotify.com/in-en/legal/end-user-agreement/">Legal</a>
//                 <a href="https://www.spotify.com/in-en/safetyandprivacy/reporting-content">Safety & Privacy Center</a>
//                 <a href="https://www.spotify.com/in-en/legal/privacy-policy/">Privacy Policy</a>
//                 <a href="https://www.spotify.com/in-en/legal/cookies-policy/">Cookies</a>
//                 <a href="https://www.spotify.com/in-en/legal/privacy-policy/#s3">About Ads</a>
//                 <a href="https://www.spotify.com/in-en/accessibility">Accessibility</a>
//                 <button class="lang"> 🌍 English</button>
//             </div>
//         </div>
//     </div>
//     <div class="boxright">
//         <div class="uppercont">
//             <!-- <div class="arrows">
//                 <img class="invert lftarr" src="leftarr.svg" alt="6">
//                 <img class="invert rgtarr" src="rightarr.svg" alt="7">
//             </div> -->
//             <div class="btns">

//                 <button class="signup" id="signup">Sign Up</button>
//                 <button class="login invert" id="login">Login In</button>
//             </div>
//         </div>
//         <div class="downcontainer">
//             <div class="hell" id="songMain" style="color:white; overflow-x: hidden;">
//                 <img id="omg" src="wp9339429-spotify-aesthetic-wallpapers.jpg" alt="11" style="height:64vh; width:60%; margin:0px 200px; border-radius: 10px; object-fit: cover;">
//             </div>
//             <!-- <div class="cardcont">
//                 <div class="card">
//                     <img class="imga" src="images/uifu.jpg" alt="1">
//                     <span class="invert ">Until I Found You</span>
//                     <span class="invert ">By - STEPHEN SANCHEZ</span>
//                     <img class="pbcard" src="images/newplay.svg" alt="14">
//                 </div>
//             </div> -->
//             <div class="player" id="player">
//                 <div class="songname" id="songname" style="position: absolute; left:2%; align-items: center;"></div>
                
//                 <div class="playbtns">
//                     <img id="prev" src="prevplay.svg" alt="8">
//                     <img id="playbutton" src="play.svg" alt="9">
//                     <img src="nextplay.svg" alt="10">
//                 </div>
//                 <div class="seekbar">
//                     <div class="circle"></div>
//                 </div>
//                 <div class="time" id="time" style="position:absolute; right:10px; font-style:bold"></div>
//             </div>
//         </div>
//     </div>
// </div>
//     `;
//   });
  // Add event listener to seekbar for seeking functionality
  document.querySelector(".seekbar").addEventListener("click", function (e) {
    let seekbar = document.querySelector(".seekbar");
    let seekbarWidth = seekbar.clientWidth;
    let clickPosition = e.offsetX;
    let duration = CurrentSong.duration;
    let newPosition = (clickPosition / seekbarWidth) * duration;

    // Set the new playback position
    CurrentSong.currentTime = newPosition;
  });

  // Update the seekbar continuously as the song progresses
  CurrentSong.addEventListener("timeupdate", () => {
    UpdateSeekbar();
  });
  // Variables to track seekbar dragging state
  let isSeeking = false;

  // Add event listener to seekbar for seeking functionality
  const seekbar = document.querySelector(".seekbar");
  seekbar.addEventListener("mousedown", function (e) {
    isSeeking = true;
    handleSeek(e);
  });

  document.addEventListener("mousemove", function (e) {
    if (isSeeking) {
      handleSeek(e);
    }
  });

  document.addEventListener("mouseup", function () {
    isSeeking = false;
  });

});

// Function to convert seconds to HH:MM:SS format
function secondsToHMS(seconds) {
  var hours = Math.floor(seconds / 3600);
  var minutes = Math.floor((seconds % 3600) / 60);
  var remainingSeconds = seconds % 60;
  var formattedTime = [
    String(minutes).padStart(2, "0").slice(0, 2),
    String(remainingSeconds).padStart(2, "0").slice(0, 2),
  ].join(":");
  return formattedTime;
}
const ImgBack = (trackIndex) => {
  switch (trackIndex) {
    case 0:
      return "terehawale.jpg"; // Image for the first song
    case 1:
      return "omahi.jpg"; // Image for the second song
    case 2:
      return "lutputt.jpg"; // Image for the third song
    case 3:
      return "chaleya.avif"; // Image for the fourth song
    case 4:
      return "alag.jpg"; // Image for the fourth song
    case 5:
      return "tuhai.jpg"; // Image for the fourth song
    case 6:
      return "Husn.png"; // Image for the fourth song
    case 7:
      return "Perfect.jpg"; // Image for the fourth song
    case 8:
      return "The-Night-We-Met.jpg"; // Image for the fourth song
    case 9:
      return "Until I Found YOU.jpg"; // Image for the fourth song
    default:
      return "default.png"; // Default image if trackIndex is invalid
  }
};

// Function to update the seekbar position based on the current time of the audio
const UpdateSeekbar = () => {
  let seekbar = document.querySelector(".seekbar");
  let circle = document.querySelector(".circle");
  let seekbarWidth = seekbar.clientWidth;
  let duration = CurrentSong.duration;
  let currentTime = CurrentSong.currentTime;
  let percentage = (currentTime / duration) * 100;

  // Update the position of the circle and seekbar
  circle.style.left = `${percentage}%`;
};

// Function to handle seek functionality
function handleSeek(e) {
  const seekbar = document.querySelector(".seekbar");
  const seekbarRect = seekbar.getBoundingClientRect();
  const seekbarWidth = seekbar.clientWidth;
  const clickPosition = e.clientX - seekbarRect.left;
  const duration = CurrentSong.duration;
  const newPosition = (clickPosition / seekbarWidth) * duration;

  // Set the new playback position
  CurrentSong.currentTime = newPosition;
}

  




