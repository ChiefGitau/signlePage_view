/**
 * Novti Landing Page - Charts Configuration
 */

// Wait for Chart.js to load
document.addEventListener('DOMContentLoaded', function() {
    if (typeof Chart !== 'undefined') {
        initCharts();
    } else {
        console.error('Chart.js not loaded');
    }
});

/**
 * Initialize all charts
 */
function initCharts() {
    initMarketChart();
    initClientsChart();
    initRevenueChart();
}

/**
 * Market Opportunity Donut Chart
 */
function initMarketChart() {
    const ctx = document.getElementById('marketChart');
    if (!ctx) return;

    const marketChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Fundraising Market', 'Salesforce + Microsoft CRM', 'CMS Market'],
            datasets: [{
                data: [400, 137, 41],
                backgroundColor: [
                    '#6610f2',  // Primary purple
                    '#4509a7',  // Secondary purple
                    '#f2f0f5'   // Light purple/lavender
                ],
                borderWidth: 0,
                hoverOffset: 15
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 20,
                        font: {
                            size: 14,
                            family: 'Noto Sans'
                        },
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: '#1e142e',
                    titleFont: {
                        size: 16,
                        family: 'Noto Sans'
                    },
                    bodyFont: {
                        size: 14,
                        family: 'Noto Sans'
                    },
                    padding: 12,
                    cornerRadius: 8,
                    callbacks: {
                        label: function(context) {
                            let label = context.label || '';
                            if (label) {
                                label += ': ';
                            }
                            label += '€' + context.parsed + ' bn';
                            return label;
                        }
                    }
                }
            },
            animation: {
                animateRotate: true,
                animateScale: true,
                duration: 1500,
                easing: 'easeOutQuart'
            }
        }
    });
}

/**
 * Number of Clients Bar Chart
 */
function initClientsChart() {
    const ctx = document.getElementById('clientsChart');
    if (!ctx) return;

    const clientsChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2024', '2025', '2026', '2027', '2028', '2029'],
            datasets: [
                {
                    label: 'Actuals',
                    data: [25, 0, 0, 0, 0, 0],
                    backgroundColor: '#1e142e',
                    borderRadius: 8
                },
                {
                    label: 'Projected',
                    data: [0, 50, 150, 400, 800, 1200],
                    backgroundColor: '#4509a7',
                    borderRadius: 8
                },
                {
                    label: 'Accelerated',
                    data: [0, 100, 350, 900, 1600, 3500],
                    backgroundColor: '#6610f2',
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 13,
                            family: 'Noto Sans'
                        },
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: '#1e142e',
                    titleFont: {
                        size: 14,
                        family: 'Noto Sans'
                    },
                    bodyFont: {
                        size: 13,
                        family: 'Noto Sans'
                    },
                    padding: 10,
                    cornerRadius: 6
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Noto Sans'
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Noto Sans'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart',
                delay: (context) => {
                    let delay = 0;
                    if (context.type === 'data' && context.mode === 'default') {
                        delay = context.dataIndex * 100 + context.datasetIndex * 50;
                    }
                    return delay;
                }
            }
        }
    });
}

/**
 * Annual Recurring Revenue (ARR) Bar Chart
 */
function initRevenueChart() {
    const ctx = document.getElementById('revenueChart');
    if (!ctx) return;

    const revenueChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2024', '2025', '2026', '2027', '2028', '2029'],
            datasets: [
                {
                    label: 'Actuals',
                    data: [500000, 0, 0, 0, 0, 0],
                    backgroundColor: '#1e142e',
                    borderRadius: 8
                },
                {
                    label: 'Projected',
                    data: [0, 1500000, 3000000, 7000000, 12000000, 20000000],
                    backgroundColor: '#4509a7',
                    borderRadius: 8
                },
                {
                    label: 'Accelerated',
                    data: [0, 3000000, 8000000, 18000000, 35000000, 70000000],
                    backgroundColor: '#6610f2',
                    borderRadius: 8
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        padding: 15,
                        font: {
                            size: 13,
                            family: 'Noto Sans'
                        },
                        usePointStyle: true
                    }
                },
                tooltip: {
                    backgroundColor: '#1e142e',
                    titleFont: {
                        size: 14,
                        family: 'Noto Sans'
                    },
                    bodyFont: {
                        size: 13,
                        family: 'Noto Sans'
                    },
                    padding: 10,
                    cornerRadius: 6,
                    callbacks: {
                        label: function(context) {
                            let label = context.dataset.label || '';
                            if (label) {
                                label += ': ';
                            }
                            const value = context.parsed.y;
                            label += '€' + formatNumber(value);
                            return label;
                        }
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Noto Sans'
                        },
                        callback: function(value) {
                            return '€' + formatNumber(value);
                        }
                    },
                    grid: {
                        color: 'rgba(0, 0, 0, 0.05)'
                    }
                },
                x: {
                    ticks: {
                        font: {
                            size: 12,
                            family: 'Noto Sans'
                        }
                    },
                    grid: {
                        display: false
                    }
                }
            },
            animation: {
                duration: 1500,
                easing: 'easeOutQuart',
                delay: (context) => {
                    let delay = 0;
                    if (context.type === 'data' && context.mode === 'default') {
                        delay = context.dataIndex * 100 + context.datasetIndex * 50;
                    }
                    return delay;
                }
            }
        }
    });
}

/**
 * Format large numbers with K/M suffix
 */
function formatNumber(num) {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
        return (num / 1000).toFixed(0) + 'K';
    }
    return num.toString();
}

/**
 * Animate charts when they come into view
 */
function initChartAnimationOnScroll() {
    const chartContainers = document.querySelectorAll('.chart-container');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.3
    });

    chartContainers.forEach(container => {
        observer.observe(container);
    });
}

// Initialize chart scroll animation
document.addEventListener('DOMContentLoaded', initChartAnimationOnScroll);
