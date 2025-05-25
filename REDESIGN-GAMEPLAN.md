# NBCC Website Redesign Gameplan

## Vision
Transform the current NBCC website from a standard template into a captivating, dynamic experience that engages visitors while maintaining excellent usability and staying true to the church's brand colors.

## Design Inspiration (from North City Church)
- **Text Animations**: Implement scroll-triggered text reveals using libraries like GSAP
- **Minimalist Approach**: Clean layouts with intentional whitespace
- **Interactive Elements**: Engaging forms, expandable content sections
- **Visual Storytelling**: Combine imagery with concise, impactful text
- **Playful Graphics**: Add custom illustrations or doodles for personality

## Core Design Principles
1. **Dynamic but Not Overwhelming**: Subtle animations that enhance, not distract
2. **User-Centric**: Easy navigation and clear information hierarchy
3. **Mobile-First**: Ensure all dynamic elements work beautifully on mobile
4. **Performance**: Keep animations smooth and loading times fast
5. **Brand Faithful**: Maintain existing color scheme from church logo

## Technical Implementation Strategy

### Phase 1: Foundation Enhancement (Week 1) ✅ COMPLETED
- [x] Implement GSAP or Framer Motion for animations
- [x] Create reusable animation components
- [x] Set up scroll-triggered animation system
- [x] Establish animation timing and easing standards

### Phase 2: Homepage Transformation (Week 2) 🚧 IN PROGRESS
- [x] Hero section with animated text reveals
- [x] Dynamic service times display
- [x] Interactive "I'm New" section with engaging CTA
- [ ] Animated mission/values cards
- [ ] Recent sermons carousel with hover effects
- [ ] Upcoming events with animated cards

### Phase 3: Navigation & Layout (Week 1)
- [ ] Sticky navigation with scroll effects
- [ ] Mega menu with smooth transitions
- [ ] Mobile menu with slide animations
- [ ] Footer with reveal animations

### Phase 4: Content Pages Enhancement (Week 2)
- [ ] About page with timeline animations
- [ ] Staff profiles with hover interactions
- [ ] Ministries grid with reveal effects
- [ ] Events calendar with filtering animations
- [ ] Sermons archive with dynamic loading

### Phase 5: Interactive Features (Week 1)
- [ ] Connection card with step-by-step form
- [ ] Prayer request form with confirmation animations
- [ ] Event RSVP system
- [ ] Interactive campus map
- [ ] FAQ sections with smooth expand/collapse

### Phase 6: Visual Enhancements (Week 1)
- [ ] Custom illustrations/graphics
- [ ] Background patterns or subtle animations
- [ ] Loading states and transitions
- [ ] Micro-interactions for buttons and links
- [ ] Image galleries with lightbox effects

## Key Pages to Redesign

### 1. Homepage
- Captivating hero with video background option
- Animated welcome message
- Dynamic "Next Steps" section
- Interactive service times
- Featured events carousel
- Latest sermon preview

### 2. About Page
- Church history timeline
- Interactive core values presentation
- Staff carousel with bios
- Campus tour (photos/video)
- Mission statement with animation

### 3. Connect Page
- Step-by-step visitor guide
- Interactive campus map
- Small groups finder
- Volunteer opportunities grid
- Contact form with validation

### 4. Ministries Page
- Filterable ministry cards
- Age-group navigation
- Ministry spotlight rotation
- Quick sign-up forms
- Photo galleries

### 5. Events Page
- Calendar view with animations
- Event filtering system
- Featured events hero
- RSVP functionality
- Share capabilities

### 6. Sermons Page
- Video player with custom controls
- Series organization
- Search and filter
- Related resources
- Share functionality

## Animation Guidelines
- **Entrance animations**: 0.6-0.8s duration, ease-out
- **Hover states**: 0.3s transitions
- **Scroll triggers**: Stagger elements 0.1-0.2s apart
- **Page transitions**: Smooth fade or slide effects
- **Loading states**: Skeleton screens or subtle spinners

## Accessibility Considerations
- Respect `prefers-reduced-motion`
- Ensure all animations can be paused
- Maintain WCAG color contrast with existing palette
- Keyboard navigation for all interactive elements
- Screen reader friendly animations

## Performance Metrics
- Lighthouse score > 90
- First Contentful Paint < 1.5s
- Time to Interactive < 3.5s
- Cumulative Layout Shift < 0.1

## Content Management
- Ensure Tina CMS integration for all dynamic content
- Create animation toggle options in CMS
- Allow content editors to choose animation styles
- Maintain ease of content updates

## Testing Strategy
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Device testing (Mobile, Tablet, Desktop)
- Animation performance testing
- User testing for engagement metrics
- A/B testing for conversion elements

## Success Metrics
- Increased time on site
- Lower bounce rate
- Higher event registration
- More connection card submissions
- Improved mobile engagement

## Timeline
- **Week 1-2**: Foundation and Homepage
- **Week 3**: Navigation and Core Pages
- **Week 4**: Interactive Features
- **Week 5**: Visual Polish and Testing
- **Week 6**: Launch and Optimization

## Next Steps
1. Review and approve gameplan
2. Set up animation libraries
3. Create component library
4. Begin with homepage hero section
5. Iterate based on feedback

---

*This gameplan focuses on creating a captivating, modern church website that engages visitors while maintaining usability and brand consistency.*