const user = document.querySelector(".user__modal");
const userImg = document.querySelector(".search__user");

userImg.addEventListener("click", () => {
  if (userImg.src.match("./icons/T-Time/Vector.svg")) {
    user.classList.add("active");
    userImg.src = "./icons/T-Time/close.svg";
  } else if (userImg.src.match("./icons/T-Time/close.svg")) {
    userImg.src = "./icons/T-Time/Vector.svg";
    user.classList.remove("active");
  }
});

const enter = document.querySelectorAll(".connect");
const sign = document.querySelectorAll(".sign");
for (let i = 0; i < enter.length; i++) {
  enter[i].addEventListener("click", () => {
    for (let x = 0; x < sign.length; x++) {
      sign[x].style.display = "none";
    }
    sign[i].style.display = "block";
  });
}

async function Covid() {
  const covidApi = await fetch("https://api.covid19api.com/summary");
  let covidData = await covidApi.json();

  let covidTotal = covidData.Global.TotalConfirmed;
  let covidRec = covidData.Global.TotalRecovered;
  let covidDeath = covidData.Global.TotalDeaths;

  let total = document.querySelector(".confirmed");
  let deaths = document.querySelector(".deaths");
  let recover = document.querySelector(".recover");

  total.innerHTML = covidTotal;
  deaths.innerHTML = covidRec;
  recover.innerHTML = covidDeath;
}

Covid();

