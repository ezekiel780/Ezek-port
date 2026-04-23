// ===================================
// Mobile Menu Toggle
// ===================================

function toggleMenu() {
    const menu = document.getElementById('navMenu');
    menu.classList.toggle('active');
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const nav = document.querySelector('nav');
    const menu = document.getElementById('navMenu');
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    
    if (!nav.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});

// ===================================
// Smooth Scrolling
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const target = document.querySelector(targetId);
        if (target) {
            const navHeight = document.querySelector('nav').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            document.getElementById('navMenu').classList.remove('active');
        }
    });
});

// ===================================
// Active Navigation Link on Scroll
// ===================================

window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    const navHeight = document.querySelector('nav').offsetHeight;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    // Remove all active classes
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        
        // Add active class to current section link
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Contact Form Submission
// ===================================

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Here you can add your form submission logic
    // For now, we'll just show an alert
    alert(`Thank you, ${name}! Your message has been received. I'll get back to you soon at ${email}.`);
    
    // Reset form
    this.reset();
    
    // Optional: Send to email service like EmailJS, Formspree, etc.
    // Example with mailto (opens email client):
    // window.location.href = `mailto:ezekielbalogun56@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
});

// ===================================
// Scroll Animations (Fade In on Scroll)
// ===================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards and items for animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll(
        '.skill-card, .experience-item, .project-card'
    );
    
    elementsToAnimate.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// ===================================
// Navbar Background on Scroll
// ===================================

window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.3)';
    }
});

// ===================================
// Hide Scroll Indicator on Scroll
// ===================================

window.addEventListener('scroll', function() {
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        if (window.scrollY > 100) {
            scrollIndicator.style.opacity = '0';
        } else {
            scrollIndicator.style.opacity = '1';
        }
    }
});

// ===================================
// Add Current Year to Footer
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    const footer = document.querySelector('footer p');
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = footer.textContent.replace('2025', currentYear);
    }
});

// ===================================
// Performance: Debounce Scroll Events
// ===================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll event (optional optimization)
const debouncedScroll = debounce(function() {
    // Any additional scroll logic can go here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ===================================
// Console Message
// ===================================

console.log('%c👋 Hi there!', 'font-size: 20px; color: #22c55e; font-weight: bold;');
console.log('%cInterested in working together? Reach out at ezekielbalogun56@gmail.com', 'font-size: 14px; color: #eab308;');

// ===================================
// Prevent Right Click (Optional - Remove if not needed)
// ===================================

// Uncomment below if you want to disable right-click
// document.addEventListener('contextmenu', event => event.preventDefault());

// ===================================
// Loading Animation
// ===================================

window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    setTimeout(function() {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});
