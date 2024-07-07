// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Scrolling
// Mendapatkan elemen kotak biru
var rec = document.getElementById("rec");

// INFORMASI DATA SEKOLAH
document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".number");

  function updateCount(counter, startTime, duration) {
    const target = +counter.getAttribute("data-target");
    const startValue = 0;
    const endValue = target;
    const range = endValue - startValue;
    const currentTime = new Date().getTime();
    const elapsedTime = currentTime - startTime;

    if (elapsedTime < duration) {
      const increment = range * (elapsedTime / duration);
      counter.innerText = Math.ceil(increment);
      requestAnimationFrame(() => updateCount(counter, startTime, duration));
    } else {
      counter.innerText = target;
    }
  }

  function startCounting(entries, observer) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const duration = 2000; // durasi dalam ms
        const startTime = new Date().getTime();

        // Check if the counter has already been animated
        if (!entry.target.classList.contains("counted")) {
          entry.target.classList.add("counted");
          updateCount(entry.target, startTime, duration);
        }
      } else {
        // hapus kelas counted setiap kali di scroll
        entry.target.classList.remove("counted");
        entry.target.innerText = "0"; // Reset
      }
    });
  }

  const observer = new IntersectionObserver(startCounting, {
    threshold: 0.5, // Adjust threshold as needed, 0.5 means element has to be half visible to start animation
  });

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

function initMap() {
  const center = { lat: -25.363, lng: 131.044 };
  const zoom = 4;

  new google.maps.Map(document.getElementById("g-maps"), {
    zoom,
    center,
    gestureHandling: "cooperative",
  });
}

window.initMap = initMap;
