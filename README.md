# Ezekiel Lipschitz Oluwatosin - Portfolio

A clean, modern portfolio website showcasing **full-stack software engineering** experience with focus on **RESS architecture** principles (Reliability, Extensibility, Scalability, Security).

Built with **HTML5, CSS3, and vanilla JavaScript** for maximum performance and simplicity.

## 📋 About

Full-Stack Software Engineer specializing in:
- **Backend Development:** Django, Django REST Framework, FastAPI, Python
- **Game Development:** Godot 4, GDScript, 2D tilemaps, animation, physics (Newtonian motion + projectile mechanics), save/load systems
- **Database Architecture:** PostgreSQL, SQLite, schema design with Alembic
- **Authentication & Security:** JWT, Firebase Auth, CSRF protection, XSS prevention
- **DevOps & Infrastructure:** Docker, Docker Compose, Render, Heroku
- **Async Processing:** Celery, Redis, background task queues
- **API Design:** RESTful APIs, Swagger/OpenAPI documentation

## 🏗️ Project Structure

```
Ezek-port/
├── index.html                # Main HTML file with complete portfolio content
├── css/
│   └── style.css            # All styling (dark theme, responsive design)
├── js/
│   └── script.js            # Navigation, smooth scrolling, form handling
├── images/                  # Project screenshots, profile photo
│   └── Picture.jpg          # Profile photo
├── files/
│   └── cv.pdf               # CV/Resume download
├── README.md                # This file
└── .gitignore               # Git ignore file
```

## 🚀 Quick Start

### View Locally

**Option 1: Direct Open**
- Double-click `index.html` to open in your browser

**Option 2: Live Server (VSCode)**
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

**Option 3: Python HTTP Server**
```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000

# Open http://localhost:8000
```

## 📄 Portfolio Sections

### 1. **Home/Hero**
- Profile introduction
- Quick summary
- Call-to-action buttons (Contact & Download CV)

### 2. **Professional Profile**
- Comprehensive professional summary
- RESS engineering philosophy

### 3. **Technical Skills**
- Backend Development (Django, FastAPI, Python)
- Frontend Integration (Next.js, API Consumption)
- Databases (PostgreSQL, SQLite)
- Authentication & Security
- DevOps & Infrastructure
- Async & Background Processing
- Testing & Debugging
- Tools & Platforms

### 4. **Work Experience**
- **Accessivo** - Backend Developer (Django) - 2025
  - RESTful APIs, database design, JWT authentication
  - Financial integrations (VFD Bank, Topupbox, Clubkonnect)
  - Security implementation (XSS, CSRF protection)
  
- **ArchsaintNexus** - Backend Developer Intern
  - Django REST Framework development
  - Webhook integration and processing
  - Celery & Redis for async tasks
  - Docker containerization

### 5. **Project Experience**
- **Health Mate** - Full-stack healthcare platform
  - Django + Next.js + Firebase Authentication
  - Appointment booking, telehealth, medical records
  
- **Onyi Gifting Platform** - FastAPI backend
  - Modular RESTful API design
  - JWT authentication with token refresh
  - Cloudinary image/audio integration
  - Alembic schema migrations
  - Comprehensive pytest coverage
  
- **2D Adventure (Godot 4)** - Game prototype
  - Animated player controller, tilemap level design, and parallax background
  - Save/load system with JSON + Godot File API

- **Outlier** - AI Prompt Engineer
  - Context-aware prompt engineering
  - GPT optimization and scaling

### 6. **Education**
- B.Sc. Mathematics Education
- University of Lagos (2019-2023)

### 7. **Certifications**
- Kubernetes and Cloud Native Essentials Training
- The Linux Foundation (via Andela Learning Program) - 2026

### 8. **Contact**
- Email, phone, address, social links
- Contact form for inquiries
- Specializations overview

## 🎨 Design

- **Dark Theme:** Professional dark mode with purple/cyan accents
- **Responsive:** Mobile-first design (works on all devices)
- **Smooth Animations:** Transitions, hover effects, scroll animations
- **Performance:** No external dependencies, pure HTML/CSS/JS
- **Accessibility:** Semantic HTML, proper contrast ratios

## 🔧 Customization

### Change Colors
Edit `:root` variables in `css/style.css`:
```css
:root {
    --primary-color: #6366f1;      /* Purple */
    --secondary-color: #8b5cf6;    /* Light Purple */
    --accent: #22d3ee;              /* Cyan */
    --dark-bg: #0f172a;             /* Dark Blue-Black */
    --card-bg: #1e293b;             /* Card Background */
}
```

### Update Navigation
Edit navigation links in `index.html`:
```html
<ul id="navMenu">
    <li><a href="#home">Home</a></li>
    <li><a href="#profile">Profile</a></li>
    <!-- Add more sections -->
</ul>
```

### Add Your Content
1. **Profile Photo:** Add your image to `images/` folder as `Picture.jpg`
2. **CV:** Add your CV to `files/` folder as `cv.pdf`
3. **Project Images:** Add screenshots to `images/` folder
4. **Update Text:** Edit content directly in `index.html`

## 📱 Features

- ✅ **Fully Responsive** - Desktop, tablet, mobile
- ✅ **Dark Theme** - Modern gradient design with cyan/purple accents
- ✅ **Smooth Navigation** - Fixed header with smooth scrolling
- ✅ **Mobile Menu** - Hamburger menu for mobile devices
- ✅ **Contact Form** - Professional contact section with inline info
- ✅ **Projects Showcase** - Detailed project cards with skills
- ✅ **Experience Timeline** - Professional journey with achievements
- ✅ **Skills Grid** - Organized technical expertise
- ✅ **Download CV** - One-click CV download button
- ✅ **Social Links** - LinkedIn, GitHub, Portfolio links
- ✅ **SEO Optimized** - Meta tags and semantic HTML

## 🚀 Deployment

### Deploy to Vercel (Recommended)

**Method 1: GitHub + Vercel**
1. Push code to GitHub repository
2. Go to [vercel.com](https://vercel.com)
3. Sign in with GitHub
4. Click "New Project" and import your repository
5. Click "Deploy"
6. Your portfolio is live!

**Method 2: Vercel CLI**
```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow prompts
```

**Method 3: Direct Upload**
1. Go to [vercel.com](https://vercel.com)
2. Drag and drop your project folder
3. Done!

### Deploy to Other Platforms

- **Netlify:** Drag & drop folder or connect GitHub
- **GitHub Pages:** Push to gh-pages branch
- **Render:** Connect GitHub repo with static site settings
- **Firebase Hosting:** Use Firebase CLI for deployment

## 📊 Performance

- **Zero Dependencies:** Pure HTML/CSS/JavaScript
- **Fast Loading:** No external frameworks or libraries
- **Optimized Images:** Compressed and optimized
- **Clean Code:** Semantic HTML, organized CSS, readable JavaScript
- **Mobile First:** Progressive enhancement approach

## 📝 Contact Information

- **Email:** ezekielbalogun56@gmail.com
- **Phone:** +234 901 839 1336
- **Address:** 7B, University Road Abule Oja | Lagos, Nigeria
- **LinkedIn:** [Balogun Ezekiel](https://linkedin.com/in/balogun-ezekiel-474a90323/)
- **GitHub:** [@ezekiel780](https://github.com/ezekiel780)

## 📄 License

© 2026 Ezekiel Lipschitz Oluwatosin. All rights reserved.

## 🤝 Support

For questions or inquiries about projects and opportunities, use the contact form on the portfolio or email directly.

---

**Last Updated:** March 2026

## 📝 License

© 2024 Lipschitz Ezekiel. All rights reserved.

## 🤝 Contributing

This is a personal portfolio. Feel free to fork and customize for your own use!

## 📧 Contact

- Email: ezekielbalogun56@gmail.com
- LinkedIn: [linkedin.com/in/lipschitz](https://linkedin.com/in/lipschitz)
- GitHub: [github.com/lipschitz](https://github.com/lipschitz)

---

**Architecture & Shipped Systems:**
- Django REST APIs for enterprise-grade backends
- FastAPI microservices for high-performance async operations
- TypeScript + Next.js for modern, type-safe frontends
- Full-stack systems from concept to production

### 2. Add Your Content

1. **Add your CV**: Place your CV PDF in the `files/` folder and name it `cv.pdf`
2. **Add images**: Put project screenshots in the `images/` folder
3. **Update contact info**: Edit email, phone in `index.html` if needed

### 3. Test Locally

**Option A: Using Live Server (Recommended)**
1. Install "Live Server" extension in VSCode
2. Right-click `index.html`
3. Select "Open with Live Server"

**Option B: Direct Open**
- Simply double-click `index.html` to open in browser

## 🌐 Deploy to Vercel

### Method 1: GitHub + Vercel (Recommended)

```bash
# Initialize git
git init

# Add .gitignore
echo "node_modules/" > .gitignore
echo ".DS_Store" >> .gitignore
echo ".env" >> .gitignore

# Commit your code
git add .
git commit -m "Initial commit: Portfolio website"

# Create a repo on GitHub, then:
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

Then:
1. Go to [vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**
4. Import your repository
5. Click **"Deploy"**
6. Done! You'll get a URL like: `your-name.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login
vercel login

# Deploy
vercel

# Follow the prompts
```

### Method 3: Drag & Drop

1. Go to [vercel.com](https://vercel.com)
2. Drag your entire project folder to Vercel
3. Done!

## 🎨 Customization

### Change Colors

Edit the `:root` variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;    /* Main purple */
    --secondary-color: #8b5cf6;  /* Secondary purple */
    --accent: #22d3ee;            /* Cyan accent */
    --dark-bg: #0f172a;           /* Dark background */
    --card-bg: #1e293b;           /* Card background */
}
```

### Add Project Links

In `index.html`, find the project cards and uncomment the links section:

```html
<div class="project-links">
    <a href="YOUR_LIVE_DEMO_URL" class="btn btn-primary btn-sm">Live Demo</a>
    <a href="YOUR_GITHUB_REPO" class="btn btn-secondary btn-sm">GitHub</a>
</div>
```

### Add Project Images

```html
<!-- Add before the project title -->
<img src="images/project1.png" alt="Project Name" 
     style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;">
```

### Add Social Icons

Add Font Awesome for icons:

```html
<!-- In <head> of index.html -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

<!-- Then add icons in contact section -->
<div style="display: flex; gap: 1rem; margin-top: 1rem;">
    <a href="https://github.com/yourusername" style="color: var(--accent); font-size: 1.5rem;">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/yourprofile" style="color: var(--accent); font-size: 1.5rem;">
        <i class="fab fa-linkedin"></i>
    </a>
</div>
```

## 📧 Contact Form Setup

The contact form currently shows an alert. To send actual emails:

### Option 1: Formspree (Easiest)

1. Go to [formspree.io](https://formspree.io)
2. Sign up and create a form
3. Replace the form in `index.html`:

```html
<form id="contactForm" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <!-- form fields stay the same -->
</form>
```

### Option 2: EmailJS

1. Sign up at [emailjs.com](https://www.emailjs.com)
2. Follow their integration guide
3. Update `script.js` with EmailJS code

## 🔧 Troubleshooting

### Links not working?
- Make sure all file paths are correct
- Check that files are in the right folders

### CV download not working?
- Ensure `cv.pdf` is in the `files/` folder
- Check the path in the download button

### Mobile menu not closing?
- Make sure `script.js` is properly linked
- Check browser console for errors

### Styles not loading?
- Verify `style.css` is in the `css/` folder
- Check the link tag in `index.html`

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 📄 License

This is your personal portfolio. Feel free to use and modify as needed!

## 🤝 Need Help?

If you run into any issues:
1. Check the browser console for errors (F12)
2. Verify all files are in the correct folders
3. Make sure file names match exactly (case-sensitive)

---

**Built with ❤️ by Lipschitz Ezekiel**

Portfolio URL: `your-portfolio.vercel.app` (add after deployment)