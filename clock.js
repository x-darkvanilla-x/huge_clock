function startTime() {
    const today = new Date();
    let h = today.getHours();
    h = h % 12
    let m = today.getMinutes();
    let s = today.getSeconds();
    h = checkTime(h)
    m = checkTime(m);
    s = checkTime(s);
  
    document.getElementById("hours-mins").innerHTML = h + ":" + m;
  
    document.getElementById("sec").innerHTML = s;
    setTimeout(startTime, 1000);
}
  
function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  
startTime();
  