// Navbar scroll effect and active section tracking
let isScrolled = false;
let activeSection = 'about';

// Handle navbar scroll effect
function handleScroll() {
    const navbar = document.getElementById('navbar');
    const scrollY = window.scrollY;
    
    if (scrollY > 50 && !isScrolled) {
        navbar.classList.add('scrolled');
        isScrolled = true;
    } else if (scrollY <= 50 && isScrolled) {
        navbar.classList.remove('scrolled');
        isScrolled = false;
    }
    
    // Update active section based on scroll position
    updateActiveSection();
}

// Update active navigation link based on current section
function updateActiveSection() {
    const sections = ['about', 'experience', 'skills', 'projects', 'contact'];
    let current = activeSection;
    
    for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
                current = section;
                break;
            }
        }
    }
    
    if (current !== activeSection) {
        // Remove active class from all links
        document.querySelectorAll('.navbar-link').forEach(link => {
            link.classList.remove('active');
        });
        
        // Add active class to current section link
        const currentLink = document.querySelector(`[data-section="${current}"]`);
        if (currentLink) {
            currentLink.classList.add('active');
        }
        
        activeSection = current;
    }
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Handle image loading errors
function handleImageError(img, placeholderText) {
    const svgPlaceholder = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect width='300' height='200' fill='%23f0f0f0'/%3E%3Ctext x='150' y='100' text-anchor='middle' dy='.3em' font-family='Arial' font-size='14' fill='%23666'%3E${encodeURIComponent(placeholderText)}%3C/text%3E%3C/svg%3E`;
    img.src = svgPlaceholder;
    img.style.opacity = '1';
}

// Image loading handler
function setupImageLoading() {
    const images = document.querySelectorAll('.project-image');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Setup image loading
    setupImageLoading();
    
    // Initial active section update
    updateActiveSection();
});

// Add smooth scrolling for brand click
document.addEventListener('DOMContentLoaded', function() {
    const brand = document.querySelector('.navbar-brand');
    if (brand) {
        brand.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}); 