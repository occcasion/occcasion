const timeDiv = document.getElementById("time");

function calcTime() {
    let now = new Date().getTime();
    //let start = new Date("Feb 28,2023,23:59:59").getTime();
    let start = new Date(2023, 01, 29, 0, 0, 0, 0).getTime();

    console.log(start);

    let dis = now - start;

    var day = Math.floor(dis / (1000 * 60 * 60 * 24));
	var hour = Math.floor((dis % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var min = Math.floor((dis % (1000 * 60 * 60)) / (1000 * 60));
    var sec = Math.floor((dis % (1000 * 60)) / 1000);

    timeDiv.textContent = `백수ING ~ ${day + 1}일 ${hour + 1}시간 ${min + 1}분 ${sec}초 ~`;
}

calcTime();
setInterval(calcTime, 1000);


const addrText = document.getElementById("address");
const phoneText = document.getElementById("phone");
const emailText = document.getElementById("email");
const univText = document.getElementById("university");
const acadText = document.getElementById("academy");

addrText.addEventListener('click', function() {
   window.open('https://naver.me/xdIJX6rm');
});

phoneText.addEventListener('click', function() {
    window.open('tel:01089741860');
});

emailText.addEventListener('click', function() {
    window.open('mailto:rsh1860@naver.com');
});

// univText.addEventListener('click', function() {

// });

// acadText.addEventListener('click', function() {

// });