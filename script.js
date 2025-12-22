window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("active", entry.isIntersecting);
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".reveal, .reveal-from-bottom, .reveal-from-left, .reveal-from-right").forEach((el) => {
  revealObserver.observe(el);
});

const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });
}

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    formStatus.textContent = "Sending...";

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",
        body: new FormData(contactForm),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        formStatus.textContent = "Message sent successfully!";
        contactForm.reset();
        document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
        history.replaceState(null, "", "#contact");
      } else {
        const data = await response.json().catch(() => null);
        formStatus.textContent = data?.error || "Something went wrong. Try again.";
      }
    } catch {
      formStatus.textContent = "Network error. Try again.";
    }
  });
}

async function loadLatestVideo() {
  const container = document.getElementById('latest-video-container');
  if (!container) return;

  const PLAYLIST_ID = 'PLheZzTtyKsLiCX84HDIVyaCgcYO4GFWQ4';
  const rssUrl = `https://www.youtube.com/feeds/videos.xml?playlist_id=${PLAYLIST_ID}`;

  try {
    const response = await fetch(`https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`);
    const data = await response.json();
    const xml = new DOMParser().parseFromString(data.contents, 'text/xml');
    const entry = xml.querySelector('entry');

    if (entry) {
      const videoId = entry.querySelector('videoId')?.textContent;
      const title = entry.querySelector('title')?.textContent;

      if (videoId) {
        container.innerHTML = `
          <iframe 
            src="https://www.youtube.com/embed/${videoId}?rel=0" 
            title="${title || 'Latest Video'}" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
          </iframe>
        `;
        return;
      }
    }
    throw new Error('No videos found');
  } catch (error) {
    console.error('Error loading video:', error);
    container.innerHTML = `
      <p style="color: var(--text-color); text-align: center; padding: 2rem;">
        Unable to load video. <a href="https://youtube.com/@0dayblitz" target="_blank" rel="noopener noreferrer" style="color: var(--main-color);">Visit my channel</a>
      </p>
    `;
  }
}

window.addEventListener('DOMContentLoaded', loadLatestVideo);