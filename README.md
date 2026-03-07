# Lipschitz Ezekiel - Full Stack Portfolio

A modern, production-ready portfolio website showcasing **full-stack architecture** with:
- **Backend:** Django REST APIs and FastAPI microservices
- **Frontend:** TypeScript-powered Next.js
- **AI/ML:** LangChain and OpenAI integration
- **DevOps:** Docker, Kubernetes, and cloud deployment

## 🏗️ Architecture

```
Ezek-port/
├── app/                      # Next.js App Router
│   ├── components/          # React Components (TypeScript)
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── backend/                 # FastAPI + Django
│   ├── main.py             # FastAPI application
│   ├── database.py         # Database configuration
│   ├── schemas.py          # Pydantic models
│   ├── utils.py            # Utilities
│   ├── django_settings.py  # Django configuration
│   └── requirements.txt    # Python dependencies
├── lib/                     # Utilities & API clients
│   └── api-client.ts       # Backend API client
├── types/                   # TypeScript types
├── styles/                  # Global styles
├── package.json            # Node dependencies
├── tsconfig.json           # TypeScript config
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind configuration
└── .env.example            # Environment template
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ (Frontend)
- Python 3.11+ (Backend)
- PostgreSQL 14+ (Database)
- Redis 7+ (Caching & Celery)

### 1. Frontend Setup

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your values

# Development server
npm run dev
# Open http://localhost:3000
```

### 2. Backend Setup (FastAPI)

```bash
# Create Python virtual environment
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows

# Install dependencies
pip install -r backend/requirements.txt

# Set up environment
cp .env.example .env
# Edit .env with your database and API keys

# Run FastAPI server
npm run api:dev
# API available at http://localhost:8000

# API Documentation
# Swagger UI: http://localhost:8000/docs
# ReDoc: http://localhost:8000/redoc
```

### 3. Backend Setup (Django - Optional)

```bash
# Install Django dependencies
pip install django djangorestframework django-cors-headers celery redis

# Run migrations
python manage.py migrate

# Start Django server
npm run api:django
```

## 📦 Tech Stack

### Frontend
- **Framework:** Next.js 14+
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **State Management:** React Hooks
- **HTTP Client:** Axios / HTTPX
- **Deployment:** Vercel

### Backend
- **FastAPI:** Async Python web framework
- **Django:** Full-stack framework (optional)
- **Database:** PostgreSQL
- **ORM:** SQLAlchemy (FastAPI) / Django ORM
- **Task Queue:** Celery + RabbitMQ/Redis
- **Caching:** Redis
- **API Documentation:** Swagger/OpenAPI

### AI/ML Integration
- **LLM Framework:** LangChain
- **LLM Provider:** OpenAI API
- **Prompt Engineering:** Custom chains

### DevOps
- **Containerization:** Docker
- **Orchestration:** Kubernetes (optional)
- **CI/CD:** GitHub Actions
- **Cloud Platforms:** Render, Vercel, AWS

## 🔧 Development

### Scripts

```bash
# Frontend
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server
npm run lint        # Run ESLint
npm run type-check  # TypeScript type checking
npm run format      # Format code with Prettier

# Backend
npm run api:dev     # Start FastAPI dev server
npm run api:django  # Start Django server
```

### Environment Variables

Create `.env.local`:

```env
# Frontend
NEXT_PUBLIC_API_URL=http://localhost:8000/api

# Backend
DATABASE_URL=postgresql+asyncpg://user:password@localhost:5432/portfolio
REDIS_URL=redis://localhost:6379/0
OPENAI_API_KEY=sk-...
```

## 📱 Features

- ✅ **Fully Responsive** - Mobile, tablet, desktop
- ✅ **TypeScript** - Full type safety
- ✅ **Dark Theme** - Modern gradient design
- ✅ **Smooth Navigation** - Optimized UX
- ✅ **Contact Form** - Form validation & submission
- ✅ **Projects Showcase** - Featured projects
- ✅ **Skills Grid** - Technical expertise
- ✅ **Experience Timeline** - Professional journey
- ✅ **API Integration** - Backend communication
- ✅ **SEO Optimized** - Meta tags & structure

## 🚢 Deployment

### Frontend (Vercel)
```bash
npm run build
vercel deploy
```

### Backend (Render/Railway)
```bash
# Create Procfile
web: uvicorn backend.main:app --host 0.0.0.0 --port $PORT
```

## 📚 API Endpoints

### FastAPI
- `GET /api/health` - Health check
- `GET /api/projects` - Get all projects
- `POST /api/contact` - Submit contact form
- `GET /api/skills` - Get skills list

## 🔐 Security

- ✅ TypeScript type safety
- ✅ CORS configuration
- ✅ Rate limiting ready
- ✅ SQL injection prevention (SQLAlchemy ORM)
- ✅ Input validation (Pydantic)
- ✅ Environment variables for secrets

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