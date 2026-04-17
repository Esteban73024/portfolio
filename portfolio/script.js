// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Navbar background on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Portfolio Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const filterValue = btn.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
                item.style.visibility = 'visible';
            } else {
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                item.style.visibility = 'hidden';
            }
        });
    });
});

// Skills Animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll('.skill-progress');
            skillBars.forEach(bar => {
                const width = bar.getAttribute('data-width');
                bar.style.setProperty('--progress-width', width + '%');
            });
        }
    });
}, observerOptions);

// Observe skills section
const skillsSection = document.querySelector('#skills');
observer.observe(skillsSection);

// Navbar active link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Contact Form
const contactForm = document.querySelector('.contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simulate form submission
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    
    btn.textContent = 'Envoi...';
    btn.disabled = true;
    
    setTimeout(() => {
        btn.textContent = 'Message envoyé ! ✅';
        contactForm.reset();
        
        setTimeout(() => {
            btn.textContent = originalText;
            btn.disabled = false;
        }, 3000);
    }, 2000);
});

// Add loading animation on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Parallax effect for hero floating cards
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const cards = document.querySelectorAll('.floating-card');
    cards.forEach((card, index) => {
        const speed = (index + 1) * 0.5;
        card.style.transform = `translateY(${scrolled * speed * 0.1}px)`;
    });
});