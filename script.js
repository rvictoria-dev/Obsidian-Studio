function toggleMenu() {
  const burger = document.querySelector(".menu-burger");

  burger.classList.toggle("is-active");

  const nav = document.querySelector(".main-nav");
  nav.classList.toggle("mobile-open");
}

function updateClock() {
  const clock = document.getElementById("live-clock");
  const now = new Date();

  const time = now.toLocaleTimeString("en-GB", {
    hour12: false,
    timeZone: "America/Los_Angeles",
  });

  clock.textContent = `${time} CA`;
}

updateClock();
setInterval(updateClock, 1000);
