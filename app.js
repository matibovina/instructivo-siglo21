var countDownDate = new Date("Nov 03, 2022 10:00:00").getTime();

var myfunc = setInterval(function() {
    var now = new Date().getTime();
    var timeleft = countDownDate - now;
        
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

document.getElementById("days").innerHTML = days
document.getElementById("hours").innerHTML = hours 
document.getElementById("mins").innerHTML = minutes 
document.getElementById("secs").innerHTML = seconds

if (timeleft < 0) {
    clearInterval(myfunc);
    document.getElementById("days").innerHTML = "00"
    document.getElementById("hours").innerHTML = "00" 
    document.getElementById("mins").innerHTML = "00"
    document.getElementById("secs").innerHTML = "00"
    document.getElementById("end").innerHTML = "TIME UP!!";
}
    }, 1000)

