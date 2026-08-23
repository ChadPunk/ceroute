const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (toggle && nav) {
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));


const youtubeFeed = document.getElementById("youtube-feed");

function escapeText(value = "") {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

async function loadLocalYouTubeFeed() {
  if (!youtubeFeed) return;

  try {
    const response = await fetch("./youtube-feed.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Feed file unavailable");

    const videos = await response.json();
    if (!Array.isArray(videos) || videos.length === 0) {
      throw new Error("No videos found");
    }

    youtubeFeed.innerHTML = videos.slice(0, 3).map(video => `
      <article class="youtube-feed-card">
        <a class="youtube-feed-thumb"
           href="${video.url}"
           target="_blank"
           rel="noopener noreferrer"
           aria-label="Watch ${escapeText(video.title)} on YouTube">
          <img src="${video.thumbnail}" alt="" loading="lazy">
          <span class="youtube-feed-watch">WATCH</span>
        </a>

        <div class="youtube-feed-copy">
          <h3>
            <a href="${video.url}" target="_blank" rel="noopener noreferrer">
              ${escapeText(video.title)}
            </a>
          </h3>
        </div>
      </article>
    `).join("");
  } catch (error) {
    youtubeFeed.innerHTML = `
      <div class="youtube-feed-error">
        <p>The latest-video cards couldn’t refresh right now.</p>
        <a class="btn btn-primary"
           href="https://www.youtube.com/c/ChadEmery/videos"
           target="_blank"
           rel="noopener noreferrer">
          Open YouTube ↗
        </a>
      </div>`;
  }
}

loadLocalYouTubeFeed();

