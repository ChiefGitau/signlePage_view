/**
 * Novti Landing Page - Main JavaScript
 */

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    AOS.init({
        duration: 1000,
        once: true,
        offset: 100,
        easing: 'ease-out'
    });

    // Smooth scrolling for anchor links
    initSmoothScroll();

    // Initialize scroll effects
    initScrollEffects();

    // Initialize navbar scroll effect
    initNavbarScroll();

    // Initialize timeline animation
    initTimelineAnimation();

    // Initialize logo hover effects
    initLogoEffects();

    // Initialize SVG path animation
    initSVGPathAnimation();
});

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip empty anchors
            if (href === '#' || href === '#contact') {
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80;

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Scroll Effects - Intersection Observer
 */
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    document.querySelectorAll('.reveal').forEach(element => {
        observer.observe(element);
    });
}

/**
 * Navbar Scroll Effect
 */
function initNavbarScroll() {
    const navbar = document.querySelector('.navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });
}

/**
 * Timeline Animation
 */
function initTimelineAnimation() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;

    const timelineLine = document.querySelector('.timeline-line');
    const timelineItems = document.querySelectorAll('.timeline-item');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Animate the line
                if (timelineLine) {
                    timelineLine.style.height = '100%';
                }

                // Animate items
                timelineItems.forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * 200);
                });
            }
        });
    }, { threshold: 0.1 });

    if (timeline) {
        observer.observe(timeline);
    }

    // Set initial state for timeline items
    timelineItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-50px)';
        item.style.transition = 'all 0.6s ease';
    });
}

/**
 * Logo Hover Effects
 */
function initLogoEffects() {
    const logos = document.querySelectorAll('.client-logo-placeholder');

    logos.forEach(logo => {
        logo.parentElement.addEventListener('mouseenter', () => {
            logo.style.filter = 'grayscale(0%)';
        });

        logo.parentElement.addEventListener('mouseleave', () => {
            logo.style.filter = 'grayscale(100%)';
        });
    });
}

/**
 * Parallax Effect (Optional)
 */
function initParallax() {
    const parallaxElements = document.querySelectorAll('.parallax');

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;

        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
}


// Initialize back to top button
document.addEventListener('DOMContentLoaded', initBackToTop);

/**
 * Form Handling (if needed)
 */
function initFormHandling() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Add your form submission logic here
            console.log('Form submitted');

            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'alert alert-success';
            successMessage.textContent = 'Thank you! We will be in touch soon.';
            form.appendChild(successMessage);

            // Reset form
            setTimeout(() => {
                form.reset();
                successMessage.remove();
            }, 3000);
        });
    });
}

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    if (!navbarToggler || !navbarCollapse) return;

    // Close mobile menu when clicking on a link
    const navLinks = navbarCollapse.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 992) {
                navbarToggler.click();
            }
        });
    });
}

// Initialize mobile menu
document.addEventListener('DOMContentLoaded', initMobileMenu);

/**
 * Loading Screen (Optional)
 */
function initLoadingScreen() {
    window.addEventListener('load', () => {
        const loader = document.querySelector('.loader');
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 500);
        }
    });
}

/**
 * Lazy Loading Images (Optional)
 */
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

/**
 * Initialize SVG Path Animation
 */
function initSVGPathAnimation() {
    const path = document.querySelector('.anim-overview-stroke');
    if (!path) return;

    // Calculate the actual path length
    const pathLength = path.getTotalLength();

    // Set the stroke-dasharray and stroke-dashoffset to the actual length
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    // Set CSS variable for keyframes
    path.style.setProperty('--path-length', pathLength);

    console.log('SVG Path Length:', pathLength);
}

/**
 * Console Welcome Message
 */
console.log('%cWelcome to Novti!', 'color: #6610f2; font-size: 20px; font-weight: bold;');
console.log('%cDesigned for nonprofits. Built for conversions.', 'color: #1e142e; font-size: 14px;');
