// Theme Switching
const themeSwitcher = document.getElementById('themeSwitcher');
const themeIndicator = document.querySelector('.theme-indicator');
const html = document.documentElement;

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', savedTheme);
updateThemeIndicator(savedTheme);

themeSwitcher.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIndicator(newTheme);
});

function updateThemeIndicator(theme) {
    if (theme === 'dark') {
        themeIndicator.style.backgroundColor = '#ffffff';
    } else {
        themeIndicator.style.backgroundColor = '#000000';
    }
}

// Search Bar Functionality
const searchBar = document.getElementById('searchBar');
const searchBtn = document.getElementById('searchBtn');
let searchExpanded = false;

searchBtn.addEventListener('click', () => {
    searchExpanded = !searchExpanded;
    if (searchExpanded) {
        searchBar.classList.add('expanded');
        searchBar.focus();
    } else {
        searchBar.classList.remove('expanded');
        searchBar.value = '';
    }
});

searchBar.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(searchBar.value);
    }
});

function performSearch(query) {
    if (query.trim()) {
        // Implement search functionality
        console.log('Searching for:', query);
        // You can add actual search logic here
    }
}

// Hamburger Menu
const hamburgerBtn = document.getElementById('hamburgerBtn');
const drawer = document.getElementById('drawer');
const drawerClose = document.getElementById('drawerClose');

hamburgerBtn.addEventListener('click', () => {
    hamburgerBtn.classList.toggle('active');
    drawer.classList.toggle('open');
});

drawerClose.addEventListener('click', () => {
    hamburgerBtn.classList.remove('active');
    drawer.classList.remove('open');
});

// Close drawer when clicking outside
document.addEventListener('click', (e) => {
    if (!drawer.contains(e.target) && !hamburgerBtn.contains(e.target)) {
        hamburgerBtn.classList.remove('active');
        drawer.classList.remove('open');
    }
});

// Navigation
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        // Update active nav link
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        link.classList.add('active');
        
        // Show target section
        sections.forEach(section => section.classList.remove('active'));
        targetSection.classList.add('active');
        
        // Close drawer on mobile
        hamburgerBtn.classList.remove('active');
        drawer.classList.remove('open');
    });
});

// Drawer Menu Navigation
const drawerMenuLinks = document.querySelectorAll('.drawer-menu a');

drawerMenuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            // Show target section
            sections.forEach(section => section.classList.remove('active'));
            targetSection.classList.add('active');
            
            // Update nav to show About Me
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            
            // Close drawer
            hamburgerBtn.classList.remove('active');
            drawer.classList.remove('open');
        }
    });
});

// Smooth scroll for anchor links
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

// Mobile touch gestures for drawer
let touchStartX = 0;
let touchEndX = 0;

document.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;
    
    // Swipe right to open drawer
    if (touchEndX > touchStartX && Math.abs(diff) > swipeThreshold && touchStartX < 50) {
        hamburgerBtn.classList.add('active');
        drawer.classList.add('open');
    }
    
    // Swipe left to close drawer
    if (touchStartX > touchEndX && Math.abs(diff) > swipeThreshold && drawer.classList.contains('open')) {
        hamburgerBtn.classList.remove('active');
        drawer.classList.remove('open');
    }
}

// Project cards interaction
const projectLinks = document.querySelectorAll('.project-link');

projectLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const projectName = link.closest('.project-card').querySelector('h3').textContent;
        console.log(`Opening ${projectName}...`);
        // Add functionality to open tools here
    });
});

// Blog cards interaction
const blogCards = document.querySelectorAll('.blog-card');

blogCards.forEach(card => {
    card.addEventListener('click', () => {
        const title = card.querySelector('h3').textContent;
        console.log(`Opening blog: ${title}`);
        // Add functionality to open blog post here
    });
});

// Social links tracking
const socialLinks = document.querySelectorAll('.social-link');

socialLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const platform = link.querySelector('span').textContent;
        console.log(`Opening ${platform}...`);
        // Add analytics tracking here if needed
    });
});

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    // Set initial active section
    const homeSection = document.getElementById('home');
    if (homeSection) {
        homeSection.classList.add('active');
    }
    
    // Set initial active nav link
    const homeNavLink = document.querySelector('.nav-link[href="#home"]');
    if (homeNavLink) {
        homeNavLink.classList.add('active');
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Ctrl/Cmd + K for search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        searchExpanded = !searchExpanded;
        if (searchExpanded) {
            searchBar.classList.add('expanded');
            searchBar.focus();
        } else {
            searchBar.classList.remove('expanded');
            searchBar.value = '';
        }
    }
    
    // Escape to close drawer
    if (e.key === 'Escape') {
        hamburgerBtn.classList.remove('active');
        drawer.classList.remove('open');
        searchBar.classList.remove('expanded');
        searchBar.value = '';
        searchExpanded = false;
    }
});

// Performance optimization - Debounce resize events
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        // Handle responsive adjustments
        if (window.innerWidth > 768) {
            hamburgerBtn.classList.remove('active');
            drawer.classList.remove('open');
        }
    }, 250);
});

// Add loading states
function showLoading(element) {
    element.style.opacity = '0.5';
    element.style.pointerEvents = 'none';
}

function hideLoading(element) {
    element.style.opacity = '1';
    element.style.pointerEvents = 'auto';
}

// Utility functions
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

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
