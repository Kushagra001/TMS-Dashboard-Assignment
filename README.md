# Cynosure TMS Employee Dashboard

This repository contains the frontend implementation of the Cynosure TMS Employee Dashboard. I wanted to use this README to give you a peek into my thought process, how I approached the design, and the steps I took to bring the Figma mockup to life.

## My Thought Process & Approach

When I first looked at the Figma design, I noticed a clean, modern, and highly structured layout. Here's exactly how I broke the project down from start to finish:

### 1. Structure & Layout Strategy First
Before writing a single line of CSS, I analyzed the grid system. I noticed the dashboard operates within a strict wrapper constraint (1728px reference width in Figma) with a slim 48px sidebar. 
- I decided to use a combination of **CSS Flexbox** and **fixed positioning** for the core layout shells (sidebar, top bar, sub-header).
- For the main content area, I created a flexible scrolling container that allows the page content to breathe while keeping the headers locked in place.

### 2. Establishing a Design System (Tokens)
Instead of hardcoding colors and sizes everywhere, I set up a robust set of CSS variables (`:root`) right at the top of my `style.css`. 
- I extracted the primary brand colors (like the Cynosure red, tech green, and strategy yellow).
- I defined spacing tokens (like the strict 30px gaps between grid columns) and standardized the status badge colors (success green, warning yellow, etc.).
This makes the code much more maintainable. If we ever need to rebrand, we just change a few variables!

### 3. Component-Based Mindset (Even in Vanilla HTML/CSS)
Even though I built this using HTML, CSS, and a touch of jQuery (instead of a heavy framework like React), I approached it with a component mindset.
- I created reusable classes like `.tms-card`, `.status-badge`, and `.btn-fill-blue`.
- This allowed me to quickly scaffold out the repeated UI elements, like the task list items and the meeting schedule, ensuring they all look completely uniform.

### 4. Pixel-Perfect Alignment & The "Tricky" Bits
Getting things to line up *perfectly* is my favorite part, but it's also where the real work happens. 
- **The Grid Offset:** I noticed the top header and sub-header needed to perfectly align their right edges with the main content grid. I spent time tweaking the padding offsets so they sit exactly on the same vertical axis, regardless of screen size.
- **Card Heights:** To achieve that crisp, straight-line grid across the bottom of adjacent cards (like the "Ongoing Projects" and "Tasks in Review"), I enforced strict heights matching the Figma spec with `overflow-y: hidden` or `overflow-y: auto`. This prevents the cards from randomly expanding and breaking the visual rhythm if the content gets too long.

### 5. Adding the Polish (Micro-Interactions)
A static dashboard feels dead. To make it feel premium, I added some subtle interactivity:
- **Hover States:** Cards have a slight lift (`translateY`) and increased shadow on hover.
- **Icon Animations:** When hovering over the sidebar icons, they bounce slightly. The card icons also scale up smoothly.
- **Interactive Buttons:** I wired up the "Create" button with a fun little loading state (`setTimeout` simulation) to show how I handle asynchronous UI states. I also made the "Mark all as read" button functional so it clears out the notification badges.

## How to Run the Project

Since this is a static build, getting it running is super easy:

1. Clone the repository.
2. Open `index.html` directly in your browser.
3. (Optional) If you have a local server like Live Server or `npx serve`, you can serve the directory for a better development experience.

---

I really enjoyed working on this assignment. I focused heavily on writing clean, semantic HTML and modular CSS.
