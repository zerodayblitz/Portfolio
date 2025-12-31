window.addEventListener("load", () => {
  document.body.classList.add("loaded");
});

// ========================================
// INTERSECTION OBSERVER (SCROLL ANIMATIONS)
// ========================================
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

// ========================================
// MOBILE MENU TOGGLE
// ========================================
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
  });
}

// ========================================
// CONTACT FORM (FORMSPREE DIRECT)
// ========================================
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  
  if (!contactForm) {
    console.error('Contact form not found! Check if id="contact-form" exists in HTML');
    return;
  }
  
  console.log('✅ Form found:', contactForm);
  
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('📧 Form submitted!');
    
    const submitButton = this.querySelector('button[type="submit"]');
    if (!submitButton) {
      console.error('Submit button not found!');
      return;
    }
    
    submitButton.disabled = true;
    const originalButtonText = submitButton.textContent;
    submitButton.textContent = 'Sending...';
    
    try {
      const formData = new FormData(this);
      
      console.log('📤 Sending to Formspree...');
      
      const response = await fetch('https://formspree.io/f/xqezqppq', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      console.log('📥 Response status:', response.status);
      
      if (response.ok) {
        console.log('✅ Success!');
        alert('✅ Message sent successfully! Thank you for contacting me.');
        contactForm.reset();
      } else {
        const data = await response.json();
        console.error('❌ Error:', data);
        alert('❌ Failed to send message. Please try again or email me directly at angelsantiago3200@gmail.com');
      }
    } catch (error) {
      console.error('💥 Form submission error:', error);
      alert('❌ An error occurred. Please try again or email me directly at angelsantiago3200@gmail.com');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = originalButtonText;
    }
    
    return false;
  });
});

// ========================================
// YOUTUBE LATEST VIDEO LOADER
// ========================================
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

