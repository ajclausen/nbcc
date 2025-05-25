# NBCC Brand Guidelines

## Overview
These guidelines ensure consistent, professional design across all NBCC digital properties while maintaining a warm, welcoming atmosphere appropriate for a modern non-denominational church.

## Brand Personality
- **Professional** yet approachable
- **Modern** while respecting tradition
- **Warm** without being casual
- **Inclusive** and welcoming to all
- **Clear** and easy to navigate

## Color Palette

### Primary Colors
```css
--primary-blue: #2563eb;      /* Main brand blue - use for CTAs, links */
--primary-blue-dark: #1d4ed8; /* Hover states, emphasis */
--primary-blue-light: #dbeafe; /* Light backgrounds, accents */
```

### Neutral Colors
```css
--warm-white: #fafaf9;     /* Main background */
--warm-gray-50: #f9f7f4;   /* Section backgrounds */
--warm-gray-100: #f3f1ed;  /* Light backgrounds */
--warm-gray-200: #e7e5e4;  /* Borders, dividers */
--warm-gray-300: #d6d3d1;  /* Disabled states */
--warm-gray-600: #57534e;  /* Body text */
--warm-gray-800: #292524;  /* Headings */
--warm-gray-900: #1c1917;  /* Footer, high contrast */
```

### Accent Colors
```css
--accent-gold: #f59e0b;   /* Special highlights */
--accent-green: #10b981;  /* Success states */
--accent-purple: #8b5cf6; /* Alternative accent */
```

## Typography

### Font Family
```css
font-family: 'Inter', system-ui, -apple-system, sans-serif;
```

### Font Sizes
```css
.heading-xl {
  font-size: clamp(2.5rem, 5vw, 4rem);
  line-height: 1.1;
  font-weight: 800;
}

.heading-lg {
  font-size: clamp(2rem, 4vw, 3rem);
  line-height: 1.2;
  font-weight: 700;
}

.heading-md {
  font-size: clamp(1.5rem, 3vw, 2rem);
  line-height: 1.3;
  font-weight: 600;
}

.text-xl { font-size: 1.25rem; }
.text-lg { font-size: 1.125rem; }
.text-base { font-size: 1rem; }
.text-sm { font-size: 0.875rem; }
```

### Text Colors
- **Headings**: `--warm-gray-800` or `--warm-gray-900`
- **Body text**: `--warm-gray-600`
- **Light text**: `--warm-gray-500`
- **Links**: `--primary-blue` with hover state `--primary-blue-dark`

## Spacing System

### Section Padding
```css
.section-padding {
  padding-top: 5rem;    /* 80px */
  padding-bottom: 5rem; /* 80px */
}
```

### Container Widths
- **Container**: `max-width: 1280px` with `px-4` padding
- **Content**: `max-width: 1152px` (6xl)
- **Text content**: `max-width: 896px` (4xl)
- **Narrow content**: `max-width: 768px` (3xl)

### Spacing Scale
- `space-1`: 0.25rem (4px)
- `space-2`: 0.5rem (8px)
- `space-3`: 0.75rem (12px)
- `space-4`: 1rem (16px)
- `space-6`: 1.5rem (24px)
- `space-8`: 2rem (32px)
- `space-12`: 3rem (48px)
- `space-16`: 4rem (64px)

## Component Styles

### Cards
```css
.card-modern {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 
              0 1px 2px -1px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card-modern:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 
              0 4px 6px -4px rgba(0, 0, 0, 0.1);
  transform: translateY(-2px);
}
```

### Buttons

#### Primary Button
```css
.btn-primary {
  background-color: var(--primary-blue);
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s;
}

.btn-primary:hover {
  background-color: var(--primary-blue-dark);
  transform: translateY(-1px);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}
```

#### Secondary Button
```css
.btn-secondary {
  background-color: transparent;
  color: var(--primary-blue);
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  border: 2px solid var(--primary-blue);
  font-weight: 600;
  transition: all 0.2s;
}

.btn-secondary:hover {
  background-color: var(--primary-blue);
  color: white;
}
```

## Animation Guidelines

### Timing Functions
```css
transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
```

### Standard Durations
- **Fast**: 0.2s (hover states, micro-interactions)
- **Normal**: 0.3s (most transitions)
- **Slow**: 0.5s-0.8s (page elements, reveals)

### Motion Principles
1. **Subtle**: Animations should enhance, not distract
2. **Purposeful**: Each animation should have a clear purpose
3. **Consistent**: Use the same easing and timing for similar elements
4. **Accessible**: Respect `prefers-reduced-motion`

## Image Guidelines

### Hero Images
- **Size**: 2940px wide minimum
- **Style**: Modern, diverse, non-denominational
- **Overlay**: Use gradient overlay for text legibility
- **Sources**: Unsplash or professional photography

### Content Images
- **Border radius**: `rounded-lg` (0.5rem)
- **Shadow**: `shadow-xl` for featured images
- **Aspect ratios**: Maintain consistent ratios within sections

### Logo Usage
- **Header**: 48px height
- **Footer**: Can be larger
- **Favicon**: Simple version for small sizes

## Layout Patterns

### Grid Systems
```css
/* 2 columns on medium, 3 on large */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

/* 2 columns on medium, 4 on large */
grid-cols-1 md:grid-cols-2 lg:grid-cols-4

/* Standard gap */
gap-6 or gap-8
```

### Section Patterns
1. **Hero**: Full height with overlay and centered content
2. **Content**: Alternating left/right layouts with images
3. **Cards**: Grid layout with consistent spacing
4. **CTAs**: Centered with primary/secondary button pairs

## Content Guidelines

### Tone of Voice
- **Welcoming** without being overly casual
- **Clear** and direct communication
- **Encouraging** and positive
- **Inclusive** language for all backgrounds

### Messaging Hierarchy
1. **Primary**: What we offer (worship, community, growth)
2. **Secondary**: How we do it (programs, services, values)
3. **Tertiary**: Logistics (times, location, contact)

### No-Use List
- ❌ Emojis in any context
- ❌ Overly casual language ("Hey guys!")
- ❌ Religious jargon without explanation
- ❌ Dated or traditional church imagery
- ❌ Clip art or low-quality graphics

## Component Library

### Navigation
- Sticky header with blur backdrop
- Clean horizontal menu
- Mobile hamburger menu
- Give button as primary CTA

### Hero Sections
- Full viewport height
- Auto-rotating background images
- Gradient overlay for text contrast
- Clear CTAs above the fold

### Service Times
- Card-based layout
- Icon + title pattern
- Clear time displays
- Location info readily available

### Visitor Information
- FAQ accordion pattern
- Step-by-step guides
- Clear next steps
- Contact options visible

### Footer
- Dark background for contrast
- Organized information hierarchy
- Service times always visible
- Clear contact information

## Accessibility Standards

### Color Contrast
- Normal text: 4.5:1 minimum
- Large text: 3:1 minimum
- Interactive elements: Clear focus states

### Navigation
- Keyboard navigable
- Skip links where appropriate
- ARIA labels for icons
- Descriptive link text

### Content
- Proper heading hierarchy
- Alt text for images
- Readable font sizes
- Sufficient line height

## Implementation Checklist

When creating new pages:
- [ ] Use ModernLayout.astro as base
- [ ] Follow color palette strictly
- [ ] Maintain consistent spacing
- [ ] Use established component patterns
- [ ] Include proper animations
- [ ] Test on mobile devices
- [ ] Check accessibility
- [ ] Verify load performance
- [ ] Review content tone
- [ ] Ensure brand consistency