// Case Study Animations
document.addEventListener('DOMContentLoaded', function() {

    // Intersection Observer for triggering animations when elements come into view
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px 0px -100px 0px'
    };

    // Animate Bar Charts
    function animateBarChart(barFill) {
        const value = parseFloat(barFill.getAttribute('data-value'));
        const maxValue = 10; // Max conversion rate for scaling
        const percentage = (value / maxValue) * 100;

        setTimeout(() => {
            barFill.style.width = percentage + '%';
        }, 100);
    }

    // Animate Circular Progress
    function animateCircle(circle) {
        const percent = parseFloat(circle.getAttribute('data-percent'));
        const radius = 65;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 10) * circumference; // Divide by 10 for scale

        setTimeout(() => {
            circle.style.strokeDashoffset = offset;
        }, 100);
    }

    // Count up animation for numbers
    function animateCounter(element) {
        const target = parseFloat(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }

            // Format the number
            if (target >= 10) {
                element.textContent = Math.floor(current);
            } else {
                element.textContent = current.toFixed(2);
            }
        }, 16);
    }

    // Observer for bar charts
    const barObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const barFills = entry.target.querySelectorAll('.bar-fill');
                barFills.forEach((bar, index) => {
                    setTimeout(() => {
                        animateBarChart(bar);
                    }, index * 200); // Stagger animations
                });
                barObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observer for circular progress
    const circleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const circles = entry.target.querySelectorAll('.circle-progress');
                const counters = entry.target.querySelectorAll('.circle-value');

                circles.forEach((circle, index) => {
                    setTimeout(() => {
                        animateCircle(circle);
                    }, index * 300);
                });

                counters.forEach((counter, index) => {
                    setTimeout(() => {
                        animateCounter(counter);
                    }, index * 300);
                });

                circleObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements
    const conversionCharts = document.querySelectorAll('.conversion-chart');
    conversionCharts.forEach(chart => barObserver.observe(chart));

    const metricsVisual = document.querySelector('.metrics-visual');
    if (metricsVisual) {
        circleObserver.observe(metricsVisual);
    }

    // Add pulse animation to improvement badges on hover
    const improvementBadges = document.querySelectorAll('.bar-improvement, .conversion-improvement');
    improvementBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1)';
            this.style.transition = 'transform 0.3s ease';
        });
        badge.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add hover effect to platform data cards
    const platformCards = document.querySelectorAll('.platform-data');
    platformCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Animate SVG line based on scroll position through the section
    const scrollSection = document.getElementById('scroll-section');
    if (scrollSection) {
        const svgPath = scrollSection.querySelector('.anim-overview-stroke');

        if (svgPath) {
            const pathLength = 6200;

            // Check if browser supports scroll-driven animations
            // Most browsers don't support this yet, so we'll use JS fallback for now
            const supportsScrollTimeline = false; // Force JS control for reliability

            if (!supportsScrollTimeline) {
                // Fallback: Manual scroll listener
                svgPath.classList.add('js-controlled');

                // Set initial stroke properties
                svgPath.style.strokeDasharray = pathLength;
                svgPath.style.strokeDashoffset = pathLength;
                svgPath.style.opacity = '0.5';
                svgPath.style.transition = 'none'; // Disable transition for initial set

                function updateSvgProgress() {
                    const rect = scrollSection.getBoundingClientRect();
                    const windowHeight = window.innerHeight;
                    const sectionHeight = scrollSection.offsetHeight;

                    // Calculate progress through entire section (entry to exit)
                    const sectionTop = rect.top;
                    const sectionBottom = rect.bottom;

                    // Progress from 0 (section enters) to 1 (section exits)
                    let progress = 0;

                    // Total scroll distance from entry to exit
                    const totalScrollDistance = sectionHeight + windowHeight;
                    const currentScroll = windowHeight - sectionTop;
                    progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));

                    // Add delay - animation starts at 20% of scroll progress
                    // Phase 1 (20% - 60%): Draw the line
                    // Phase 2 (60% - 70%): Line stays fully visible
                    // Phase 3 (70% - 95%): Line exits off the left (moves entire line off screen)
                    // Phase 4 (95% - 100%): Fade out
                    let offset = pathLength;
                    let opacity = 0.5;

                    if (progress < 0.2) {
                        // Before animation starts - line not visible
                        offset = pathLength;
                        opacity = 0;
                    } else if (progress <= 0.6) {
                        // Drawing phase - line draws in
                        const drawProgress = (progress - 0.2) / 0.4; // 0 to 1
                        offset = pathLength * (1 - drawProgress); // 6200 to 0
                        opacity = 0.5;
                    } else if (progress <= 0.7) {
                        // Line stays fully drawn
                        offset = 0;
                        opacity = 0.5;
                    } else if (progress <= 0.95) {
                        // Line exits - entire line moves off to the left
                        const exitProgress = (progress - 0.7) / 0.25; // 0 to 1
                        offset = -pathLength * exitProgress; // 0 to -6200
                        opacity = 0.5;
                    } else {
                        // Fade out
                        offset = -pathLength;
                        const fadeProgress = (progress - 0.95) / 0.05; // 0 to 1
                        opacity = 0.5 - (fadeProgress * 0.5); // 0.5 to 0
                    }

                    // Update stroke-dashoffset and opacity
                    svgPath.style.strokeDashoffset = offset;
                    svgPath.style.opacity = opacity;
                }

                // Update on scroll
                let ticking = false;
                window.addEventListener('scroll', function() {
                    if (!ticking) {
                        window.requestAnimationFrame(function() {
                            updateSvgProgress();
                            ticking = false;
                        });
                        ticking = true;
                    }
                });

                // Initial update
                updateSvgProgress();
            }
        }
    }
});
