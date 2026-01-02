# 🚀 Lipschitz Ezekiel - Portfolio Website

A modern, responsive portfolio website showcasing backend development, fintech solutions, and AI/ML expertise.

## 📁 Project Structure

```
my-portfolio/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles
├── js/
│   └── script.js      # All JavaScript functionality
├── images/            # Your images go here
│   └── (add your project screenshots, profile photo, etc.)
├── files/             # Downloadable files
│   └── cv.pdf         # Your CV/Resume (add this file)
├── README.md          # This file
└── .gitignore         # Git ignore file
```

## 🎯 Features

- ✅ **Fully Responsive** - Works on mobile, tablet, and desktop
- ✅ **Modern Dark Theme** with gradient accents
- ✅ **Smooth Scrolling** navigation
- ✅ **Animated Elements** that fade in on scroll
- ✅ **Mobile Menu** with hamburger toggle
- ✅ **Contact Form** with validation
- ✅ **SEO Optimized** with meta tags
- ✅ **Fast Loading** - Pure HTML/CSS/JS, no frameworks

## 🚀 Quick Start

### 1. Setup Your Project

```bash
# Create project folder
mkdir my-portfolio
cd my-portfolio

# Create folder structure
mkdir css js images files

# Copy the files:
# - index.html (in root)
# - style.css (in css folder)
# - script.js (in js folder)
```

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