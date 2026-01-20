/**
 * Novti Landing Page - Animated Counters
 */

document.addEventListener('DOMContentLoaded', function() {
    initCounters();
});

/**
 * Initialize all counter animations
 */
function initCounters() {
    const counters = document.querySelectorAll('.counter');

    // Create intersection observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
            }
        });
    }, {
        threshold: 0.5
    });

    // Observe all counters
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/**
 * Animate a single counter element
 */
function animateCounter(element) {
    const target = parseInt(element.dataset.target);
    const prefix = element.dataset.prefix || '';
    const suffix = element.dataset.suffix || '';
    const duration = parseInt(element.dataset.duration) || 2000;
    const startValue = 0;

    // Use CountUp.js if available
    if (typeof CountUp !== 'undefined') {
        const options = {
            prefix: prefix,
            suffix: suffix,
            duration: duration / 1000,
            useEasing: true,
            useGrouping: true,
            separator: ',',
            decimal: '.'
        };

        const countUp = new CountUp(element, target, options);

        if (!countUp.error) {
            countUp.start();
        } else {
            console.error(countUp.error);
            // Fallback to custom animation
            customCounterAnimation(element, target, prefix, suffix, duration);
        }
    } else {
        // Fallback to custom animation
        customCounterAnimation(element, target, prefix, suffix, duration);
    }
}

/**
 * Custom counter animation fallback
 */
function customCounterAnimation(element, target, prefix, suffix, duration) {
    const startTime = Date.now();
    const startValue = 0;

    function updateCounter() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function (easeOutQuart)
        const easeProgress = 1 - Math.pow(1 - progress, 4);

        const currentValue = Math.floor(easeProgress * target);

        element.textContent = prefix + currentValue + suffix;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = prefix + target + suffix;
        }
    }

    updateCounter();
}

/**
 * Initialize static stat numbers with animation
 */
function initStatNumbers() {
    const statNumbers = document.querySelectorAll('.stat-number');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                const number = entry.target.textContent;
                entry.target.textContent = '0';

                setTimeout(() => {
                    entry.target.textContent = number;
                }, 100);
            }
        });
    }, {
        threshold: 0.5
    });

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

/**
 * Percentage animation
 */
function animatePercentage(element, targetPercentage) {
    const duration = 2000;
    const startTime = Date.now();

    function update() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentPercentage = Math.floor(easeProgress * targetPercentage);

        element.textContent = currentPercentage + '%';

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = targetPercentage + '%';
        }
    }

    update();
}

/**
 * Currency animation
 */
function animateCurrency(element, targetAmount, currency = '€') {
    const duration = 2500;
    const startTime = Date.now();

    function update() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentAmount = Math.floor(easeProgress * targetAmount);

        element.textContent = currency + formatMoney(currentAmount);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = currency + formatMoney(targetAmount);
        }
    }

    update();
}

/**
 * Format money with commas
 */
function formatMoney(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Number with comma separator animation
 */
function animateNumberWithCommas(element, targetNumber) {
    const duration = 2000;
    const startTime = Date.now();

    function update() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentNumber = Math.floor(easeProgress * targetNumber);

        element.textContent = formatNumberWithCommas(currentNumber);

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            element.textContent = formatNumberWithCommas(targetNumber);
        }
    }

    update();
}

/**
 * Format number with commas
 */
function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

/**
 * Odometer effect for counters
 */
function odometerEffect(element, targetNumber) {
    const digits = targetNumber.toString().split('');
    const container = element;
    container.innerHTML = '';
    container.style.display = 'flex';
    container.style.gap = '2px';

    digits.forEach((digit, index) => {
        const digitWrapper = document.createElement('span');
        digitWrapper.style.display = 'inline-block';
        digitWrapper.style.overflow = 'hidden';
        digitWrapper.style.height = '1em';
        digitWrapper.style.position = 'relative';

        const digitElement = document.createElement('span');
        digitElement.style.display = 'block';
        digitElement.style.transition = 'transform 2s ease';
        digitElement.style.transform = 'translateY(-' + (parseInt(digit) * 100) + '%)';

        // Create all numbers 0-9
        for (let i = 0; i <= 9; i++) {
            const num = document.createElement('span');
            num.textContent = i;
            num.style.display = 'block';
            num.style.height = '1em';
            digitElement.appendChild(num);
        }

        digitWrapper.appendChild(digitElement);
        container.appendChild(digitWrapper);

        // Trigger animation
        setTimeout(() => {
            digitElement.style.transform = 'translateY(-' + (parseInt(digit) * 100) + '%)';
        }, index * 100);
    });
}

/**
 * Progress bar animation
 */
function animateProgressBar(progressBar, targetPercentage) {
    const duration = 2000;
    const startTime = Date.now();

    function update() {
        const currentTime = Date.now();
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing
        const easeProgress = 1 - Math.pow(1 - progress, 3);
        const currentPercentage = easeProgress * targetPercentage;

        progressBar.style.width = currentPercentage + '%';

        if (progress < 1) {
            requestAnimationFrame(update);
        } else {
            progressBar.style.width = targetPercentage + '%';
        }
    }

    update();
}

// Initialize additional animations on load
document.addEventListener('DOMContentLoaded', function() {
    initStatNumbers();
});
