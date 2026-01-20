# Novti Landing Page

A modern, animated single-page website for Novti - a nonprofit fundraising platform. Built with Bootstrap 5, featuring scroll-driven animations and interactive elements.

## Features

### Design Elements
- **Color Palette**: Pink (#F23861), Burgundy (#45171A), Beige (#F9DDC6)
- **Typography**: Noto Sans throughout
- **Responsive Design**: Mobile-first, fully responsive across all devices
- **Smooth Animations**: Scroll-triggered fade-ins and transitions

### Page Sections

1. **Hero Section** - Full-screen intro with split layout and CTAs
2. **Trusted Organizations** - Logo grid with grayscale-to-color hover effects
3. **Problem Section** - 4 pain points with icons and left-border cards
4. **Solution Section** - Key benefits with animated counter (+35%)
5. **How It Works** - 5-step process with **scroll-driven SVG path animation**
6. **Benefits Section** - 6 key advantages with checkmarks
7. **Market Opportunity** - Interactive donut chart + 4 trend cards
8. **Pricing & Strategy** - 2 pricing tiers + 4 sales strategies
9. **Financial Projections** - Bar charts for clients & revenue + investment ask
10. **Team Section** - 4 team members with circular photos
11. **Contact Section** - Contact info with gradient background

### Interactive Features

- ✅ **Scroll-Driven SVG Animation** - Curved line draws as you scroll (How It Works section)
- ✅ **AOS (Animate On Scroll)** - Elements fade in as they enter viewport
- ✅ **Animated Counter** - +35% conversion stat counts up
- ✅ **Interactive Charts** - Chart.js visualizations (market, clients, revenue)
- ✅ **Smooth Scrolling** - Navigation links scroll smoothly to sections
- ✅ **Logo Hover Effects** - Grayscale to color on hover
- ✅ **Card Animations** - Lift and shadow on hover
- ✅ **Back to Top Button** - Appears after scrolling down
- ✅ **Sticky Navigation** - Navbar stays at top while scrolling
- ✅ **Mobile Menu** - Responsive hamburger menu

## How to Run

### Option 1: Open Directly in Browser

1. Navigate to the project folder
2. Double-click `index.html` to open it in your default browser

### Option 2: Using Command Line

**macOS/Linux:**
```bash
open index.html
```

**Windows:**
```bash
start index.html
```

### Option 3: Using a Local Server (Recommended)

For the best experience with scroll-driven animations, use a local server:

**Using Python 3:**
```bash
python3 -m http.server 8000
```

**Using Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Using Node.js (with npx):**
```bash
npx http-server -p 8000
```

Then open your browser and visit: `http://localhost:8000`

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Grid, Flexbox, Custom Properties, Scroll-Driven Animations
- **Bootstrap 5.3.2** - Grid system and utilities (via CDN)
- **JavaScript** - Vanilla JS for interactions
- **Google Fonts** - Noto Sans font family
- **AOS** - Animate On Scroll library
- **Chart.js** - Data visualization
- **CountUp.js** - Animated counters

## File Structure

```
/information
├── index.html                 # Main HTML file
├── README.md                  # This file
├── BUILD_INSTRUCTIONS.md      # Detailed build guide
├── css/
│   ├── styles.css            # Main stylesheet
│   └── animations.css        # Animation definitions
└── js/
    ├── main.js               # Core functionality
    ├── charts.js             # Chart configurations
    └── counters.js           # Animated counters
```

## Browser Support

### Modern Features
The page uses **CSS Scroll-Driven Animations** which are supported in:
- Chrome 115+
- Edge 115+
- Opera 101+

For browsers without support, the animations gracefully fall back to static displays.

### All Features Work In
- Chrome (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Edge (latest 2 versions)
- Mobile browsers (iOS 14+, Android 10+)

## Customization

### Adding Real Content

1. **Replace Placeholder Images**
   - Add client logos to section: "Trusted Organizations"
   - Add team photos (150x150px, circular) to: "Team Section"
   - Add mockup screenshots to: "Solution" and "Benefits" sections

2. **Update Contact Information**
   - Edit phone numbers and emails in: "Contact Section"

3. **Modify Colors**
   - Edit CSS variables in `css/styles.css`:
     ```css
     :root {
         --primary-color: #F23861;
         --dark-color: #121212;
         --accent-color: #F9DDC6;
         --burgundy-color: #45171A;
     }
     ```

4. **Adjust Chart Data**
   - Edit chart values in `js/charts.js`

## Special Feature: Scroll-Driven SVG Animation

The "How It Works" section uses cutting-edge **CSS Scroll-Driven Animations** to create a curved SVG path that draws itself as you scroll through the section. This creates an engaging, story-telling effect.

### How It Works
- An SVG path is positioned behind the content
- As you scroll, the path progressively reveals using `stroke-dasharray` and `stroke-dashoffset`
- Content boxes scale in and fade in as they enter the viewport
- The entire section uses `animation-timeline: scroll()` to tie animations to scroll position

### Browser Fallback
For browsers without scroll-driven animation support, the path and boxes appear immediately without animation.

## Accessibility

- ✅ Semantic HTML5 elements
- ✅ ARIA labels where needed
- ✅ Keyboard navigation support
- ✅ Focus states on interactive elements
- ✅ Color contrast meets WCAG AA standards
- ✅ `prefers-reduced-motion` support
- ✅ Alt text ready for images (add when replacing placeholders)

## Performance

- CDN-hosted libraries for fast loading
- Lazy-loaded animations (only animate when visible)
- Optimized CSS with minimal specificity
- GPU-accelerated transforms
- Minimal JavaScript footprint

## Resources

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.3/getting-started/introduction/)
- [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
- [Chart.js Documentation](https://www.chartjs.org/)
- [CSS Scroll-Driven Animations](https://developer.chrome.com/articles/scroll-driven-animations/)
- [CountUp.js](https://inorganik.github.io/countUp.js/)

## Development Notes

- All placeholders are styled boxes ready for actual content
- Mobile-first responsive design
- Tested on Chrome, Firefox, Safari, and Edge
- No build process required - pure HTML/CSS/JS

## Next Steps

1. Replace all placeholder content with real images and copy
2. Test on various devices and browsers
3. Add actual client logos
4. Include team photos
5. Optimize images (use WebP format)
6. Add analytics tracking if needed
7. Set up domain and hosting

---

**Built for Novti** - Designed for nonprofits. Built for conversions.
