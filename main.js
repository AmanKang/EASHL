var countdown = document.querySelector('.countdown');
const status = document.querySelector('.status');
const borders = document.querySelectorAll('.countdown div');
var deadline = new Date("May 4, 2020 2:15:00");
var isPlayoffs = false;

var daysDiv = document.querySelector('.days');
var hoursDiv = document.querySelector('.hours');
var minutesDiv = document.querySelector('.minutes');
var secondsDiv = document.querySelector('.seconds');

var x = setInterval(function() { 

  var deadlineTime = deadline.getTime(); 

  var now = new Date().getTime(); 
  var timeleft = deadlineTime - now; 
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24)); 
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60)); 
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000); 

  if(isPlayoffs) {
    status.innerText = "Playoffs close in"; 
    borders.forEach(element => element.style.border = '5px solid green');
  } else {
    status.innerText = "Playoffs open in"; 
    borders.forEach(element => element.style.border = '5px solid red');
  }

  daysDiv.innerHTML = `${days}<span>Days</span>`;
  hoursDiv.innerHTML = `${hours}<span>Hours</span>`;
  minutesDiv.innerHTML = `${minutes}<span>Minutes</span>`;
  secondsDiv.innerHTML = `${seconds}<span>Seconds</span>`;

  if (timeleft < 0) { 
    if(isPlayoffs) {
      deadline.setDate(deadline.getDate() +  30);
      //deadline.setSeconds(deadline.getSeconds() + 10);
      isPlayoffs = false;

    } else {
      deadline.setDate(deadline.getDate() +  3);
      deadline.setDate(deadline.getHours() +  6);
      //deadline.setSeconds(deadline.getSeconds() + 5);
   
      isPlayoffs = true;

    } 
  } 
}, 1000); 