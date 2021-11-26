let show = document.getElementById("show");
var timerId;
async function star() {
  let value = document.getElementById("in").value;
  if (value.length == 0) {
    return false;
  }
  let char = await fetch(`https://swapi.dev/api/people/?search=${value}`);
  let data = await char.json();
  // console.log(data.results);
  console.log(data);

  return data.results;
}
function throttle() {
  if (timerId) {
    return false;
  }
  timerId = setTimeout(() => {
    main();
    timerId = undefined;
  }, 500);
  // console.log(timerId);
}
function shows(d) {
  show.innerHTML = null;
  d.forEach((el) => {
    let div1 = document.createElement("div");
    let div2 = document.createElement("div");
    div1.className = "showing";
    div1.style.cursor = "pointer";
    div1.innerHTML = el.name;
    // div2.innerHTML = gender;
    div1.addEventListener("click", function () {
      window.location.href = "detailpage.html";
      detailpage(el);
    });
    show.append(div1, div2);
  });
}
async function main() {
  let s = await star();
  // console.log(s);
  shows(s);
}
function detailpage(el) {
  let arr = el;
  localStorage.setItem("starwar", JSON.stringify(arr));
}
//// http://gateway.marvel.com/v1/public/comics?apikey=cca334c943a9b392226ba7f0c51fc0f3
/// ts=1&apikey=cca334c943a9b392226ba7f0c51fc0f3&hash=ffd275c5130566a2916217b101f26150
