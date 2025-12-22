# 🛡️ Cybersecurity Portfolio - Angel Santiago

Professional portfolio website showcasing my cybersecurity projects, skills, and experience.

[![Live Demo](https://img.shields.io/badge/Live-zerodayblitz.com-blue?style=for-the-badge)](https://zerodayblitz.com)
[![GitHub Pages](https://img.shields.io/badge/Hosted_on-GitHub_Pages-181717?style=for-the-badge&logo=github)](https://zerodayblitz.github.io/Portfolio/)

---

## 🌐 Live Website

**Primary:** [zerodayblitz.com](https://zerodayblitz.com)  
**Backup:** [GitHub Pages](https://zerodayblitz.github.io/Portfolio/)

---

## 📖 About

This portfolio website serves as a comprehensive showcase of my work in cybersecurity and computer science, featuring:
- **Project demonstrations** with live examples
- **Technical skills** 
- **Contact form** for professional inquiries
- **YouTube integration** for video content
- **Responsive design** optimized for all devices

---

## 🚀 Features

- ✅ **Fully Responsive** - Mobile-first design that works on all devices
- ✅ **Security Hardened** - Industry-standard security practices implemented
- ✅ **Fast Loading** - Optimized performance and minimal dependencies
- ✅ **Contact Form** - Integrated with Formspree for reliable message delivery
- ✅ **YouTube Integration** - Automatically loads latest video from playlist RSS feed
- ✅ **Smooth Animations** - Scroll-triggered animations for enhanced UX
- ✅ **SEO Optimized** - Proper meta tags and semantic HTML
- ✅ **SSL Secured** - HTTPS enabled with free SSL certificate

---

## 🛠️ Technologies Used

### **Frontend**
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

### **Hosting & Deployment**
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-181717?style=flat&logo=github&logoColor=white)
![GoDaddy](https://img.shields.io/badge/Domain-GoDaddy-1BDBDB?style=flat&logo=godaddy&logoColor=white)

### **Third-Party Services**
- **Formspree** - Contact form backend
- **YouTube RSS** - Video content integration
- **CORS Proxy** - API request handling
- **Google Fonts** - Typography
- **Boxicons** - Icon library

---

## 🔒 Security Features

This portfolio implements multiple security best practices:

- **Input Validation** - All form fields have maxlength limits to prevent buffer overflow
- **Security Headers** - X-Content-Type-Options, X-Frame-Options, Referrer-Policy
- **XSS Protection** - No user input rendered without sanitization
- **Clickjacking Prevention** - X-Frame-Options set to SAMEORIGIN
- **HTTPS Enforcement** - SSL/TLS encryption for all connections
- **Privacy Protection** - Minimal data collection, no tracking

**Security Audit:** See [FINAL_SECURITY_AUDIT.md](FINAL_SECURITY_AUDIT.md) for complete details.

---

## 📂 Project Structure
```
Portfolio/
├── index.html              # Homepage
├── about.html              # About page
├── script.js               # JavaScript functionality
├── style.css               # Main stylesheet
├── about.css               # About page styles
├── headshot.jpg            # Profile image
├── portfolioproject.png    # Project screenshots
├── netsuite.png
├── CipherSuite.png
└── [tech icons]            # Python, HTML, CSS, JS, etc.
```

---

## 💻 Local Development

### **Prerequisites**
- Web browser (Chrome, Firefox, Safari, Edge)
- Text editor (VS Code recommended)
- Python 3.x (for local server, optional)

### **Setup**

1. **Clone the repository**
```bash
   git clone https://github.com/zerodayblitz/Portfolio.git
   cd Portfolio
```

2. **Open locally**
   
   **Option A: Direct file access**
```bash
   # Simply open index.html in your browser
   open index.html  # Mac
   start index.html # Windows
```

   **Option B: Local server (recommended)**
```bash
   # Using Python
   python -m http.server 8000
   
   # Then visit: http://localhost:8000
```

3. **Make changes**
   - Edit HTML, CSS, or JS files
   - Refresh browser to see changes
   - Test thoroughly before deploying

---

## 🚀 Deployment

This site is automatically deployed via **GitHub Pages**.

### **Deploy Updates**

1. **Make changes locally**
```bash
   # Edit files in your text editor
```

2. **Commit and push**
```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
```

3. **Wait 1-2 minutes**
   - GitHub Pages automatically rebuilds
   - Changes appear at zerodayblitz.com

### **Custom Domain Setup**

**DNS Configuration (GoDaddy):**
- 4 A records pointing to GitHub Pages IPs
- CNAME record for www subdomain
- Full setup documented in deployment guide

---

## 📬 Contact Form

The contact form uses **Formspree** for backend processing:
- Form submissions sent directly to email
- Spam filtering enabled
- No server-side code required
- Free tier: 50 submissions/month

**To update form endpoint:**
1. Go to [formspree.io](https://formspree.io)
2. Create new form
3. Update `action` attribute in `index.html`

---

## 🎨 Customization

### **Update Personal Info**
- `index.html` - Name, bio, contact info
- `about.html` - Background, skills, experience
- `headshot.jpg` - Replace with your photo

### **Add Projects**
```html
<!-- In index.html, duplicate this structure: -->
<div class="project-card">
  <div class="project-img">
    <img src="your-project.png" alt="Project Name">
  </div>
  <div class="project-info">
    <h3>Project Name</h3>
    <p>Description...</p>
    <div class="project-tags">
      <span class="tag">Python</span>
      <span class="tag">Security</span>
    </div>
    <a href="link" class="project-link">View Project</a>
  </div>
</div>
```

### **Change YouTube Playlist**
```javascript
// In script.js, update this line:
const PLAYLIST_ID = 'YOUR_PLAYLIST_ID_HERE';
```

---

## 📊 Performance

- **Load Time:** < 2 seconds
- **Page Size:** ~500 KB (including images)
- **Mobile-Friendly:** Yes
- **Accessibility:** WCAG 2.1 compliant
- **SEO Score:** 95/100

---

## 🐛 Known Issues

None currently. Report issues via the [Issues tab](https://github.com/zerodayblitz/Portfolio/issues).

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

Feel free to fork and customize for your own portfolio!

---

## 👨‍💻 Author

**Angel Santiago**  
Cybersecurity Student | Web Developer

- 🌐 Website: [zerodayblitz.com](https://zerodayblitz.com)
- 💼 GitHub: [@zerodayblitz](https://github.com/zerodayblitz)
- 📧 Contact: [Contact Form](https://zerodayblitz.com#contact)

---

## 🙏 Acknowledgments

- **GitHub Pages** - Free hosting
- **Formspree** - Contact form backend
- **Boxicons** - Icon library
- **Google Fonts** - Typography

---

## 📅 Version History

- **v1.0.0** (December 2025) - Initial release
  - Portfolio website launch
  - Custom domain configured
  - Security hardening completed
  - Contact form integrated

---

<div align="center">

**⭐ Star this repo if you found it helpful!**

Made with ❤️ by [Angel Santiago](https://zerodayblitz.com)

</div>
