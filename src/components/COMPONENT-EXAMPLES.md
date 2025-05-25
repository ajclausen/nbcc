# NBCC Component Examples

This file provides copy-paste examples of common components following the NBCC brand guidelines.

## Page Structure Template

```astro
---
import ModernLayout from '../layouts/ModernLayout.astro';
import FadeIn from '../components/animations/FadeIn.tsx';
import AnimatedCard from '../components/animations/AnimatedCard.tsx';
---

<ModernLayout title="Page Title - NBCC">
  <!-- Hero Section -->
  <section class="relative h-[60vh] min-h-[400px] overflow-hidden">
    <img 
      src="https://images.unsplash.com/..." 
      alt="Descriptive alt text" 
      class="w-full h-full object-cover"
    />
    <div class="absolute inset-0 gradient-overlay" />
    <div class="relative z-10 h-full flex items-center justify-center text-white">
      <div class="container mx-auto px-4 text-center">
        <h1 class="heading-xl mb-6">Page Title</h1>
        <p class="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Brief description of the page content
        </p>
      </div>
    </div>
  </section>

  <!-- Content sections go here -->
</ModernLayout>
```

## Common Components

### Section with Centered Content

```astro
<section class="section-padding bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <FadeIn client:visible>
        <h2 class="heading-lg text-gray-900 mb-6">Section Title</h2>
        <p class="text-xl text-gray-600 mb-8">
          Section description that explains the content below.
        </p>
      </FadeIn>
      
      <!-- Content goes here -->
    </div>
  </div>
</section>
```

### Two Column Layout (Text + Image)

```astro
<section class="section-padding bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <FadeIn client:visible>
          <div>
            <h2 class="heading-lg text-gray-900 mb-6">Section Title</h2>
            <p class="text-lg text-gray-600 mb-4">
              First paragraph of content explaining the main point.
            </p>
            <p class="text-lg text-gray-600 mb-6">
              Second paragraph with additional details.
            </p>
            <a href="/link" class="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group">
              Learn more
              <svg class="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </a>
          </div>
        </FadeIn>
        
        <FadeIn client:visible delay={0.2}>
          <img 
            src="image-url" 
            alt="Descriptive alt text" 
            class="rounded-lg shadow-xl"
          />
        </FadeIn>
      </div>
    </div>
  </div>
</section>
```

### Card Grid

```astro
<section class="section-padding bg-white">
  <div class="container mx-auto px-4">
    <div class="max-w-6xl mx-auto">
      <FadeIn client:visible>
        <div class="text-center mb-12">
          <h2 class="heading-lg text-gray-900 mb-4">Section Title</h2>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            Brief description of what's in the cards below.
          </p>
        </div>
      </FadeIn>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatedCard client:visible delay={0.1}>
          <div class="card-modern p-6 h-full">
            <div class="w-12 h-12 bg-blue-100 rounded-lg mb-4 flex items-center justify-center">
              <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <!-- Icon SVG path -->
              </svg>
            </div>
            <h3 class="text-xl font-bold text-gray-900 mb-2">Card Title</h3>
            <p class="text-gray-600 mb-4">
              Card description that explains this feature or service.
            </p>
            <a href="/link" class="text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Learn more →
            </a>
          </div>
        </AnimatedCard>
        <!-- Repeat for more cards -->
      </div>
    </div>
  </div>
</section>
```

### Call to Action Section

```astro
<section class="section-padding bg-gradient-to-br from-blue-600 to-blue-700 text-white">
  <div class="container mx-auto px-4">
    <div class="max-w-4xl mx-auto text-center">
      <FadeIn client:visible>
        <h2 class="heading-lg mb-6">Ready to Take the Next Step?</h2>
        <p class="text-xl mb-10 text-blue-100">
          Encouraging message about taking action.
        </p>
      </FadeIn>
      
      <FadeIn client:visible delay={0.2}>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="/primary-action" class="btn-primary bg-white text-blue-600 hover:bg-gray-100">
            Primary Action
          </a>
          <a href="/secondary-action" class="btn-secondary border-white text-white hover:bg-white hover:text-blue-600">
            Secondary Action
          </a>
        </div>
      </FadeIn>
    </div>
  </div>
</section>
```

### Feature List with Icons

```astro
<div class="space-y-4">
  <div class="flex items-start">
    <svg class="w-6 h-6 text-blue-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
    </svg>
    <div>
      <h4 class="font-semibold text-gray-900">Feature Title</h4>
      <p class="text-gray-600">Feature description with more details.</p>
    </div>
  </div>
  <!-- Repeat for more features -->
</div>
```

### Contact Information Block

```astro
<div class="card-modern p-8">
  <h3 class="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
  
  <div class="space-y-4">
    <div class="flex items-start">
      <svg class="w-6 h-6 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
      </svg>
      <div>
        <p class="font-semibold text-gray-900">Phone</p>
        <a href="tel:7654825265" class="text-gray-600 hover:text-blue-600 transition-colors">
          (765) 482-5265
        </a>
      </div>
    </div>
    
    <div class="flex items-start">
      <svg class="w-6 h-6 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
      </svg>
      <div>
        <p class="font-semibold text-gray-900">Email</p>
        <a href="mailto:office@nbcc-church.org" class="text-gray-600 hover:text-blue-600 transition-colors">
          office@nbcc-church.org
        </a>
      </div>
    </div>
    
    <div class="flex items-start">
      <svg class="w-6 h-6 text-gray-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
      <div>
        <p class="font-semibold text-gray-900">Address</p>
        <p class="text-gray-600">
          6480 S State Road 39<br />
          Lebanon, IN 46052
        </p>
      </div>
    </div>
  </div>
</div>
```

### Responsive Image Gallery

```astro
<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    className="overflow-hidden rounded-lg"
  >
    <img 
      src="image-url" 
      alt="Gallery image description" 
      class="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
    />
  </motion.div>
  <!-- Repeat for more images -->
</div>
```

### Timeline Component

```astro
<div class="space-y-8">
  <div class="flex">
    <div class="flex flex-col items-center mr-4">
      <div class="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-full text-white font-bold">
        1
      </div>
      <div class="w-px h-full bg-gray-300"></div>
    </div>
    <div class="pb-8">
      <h4 class="text-xl font-bold text-gray-900 mb-2">Timeline Event</h4>
      <p class="text-gray-600">Description of what happened at this point.</p>
    </div>
  </div>
  <!-- Repeat for more timeline items -->
</div>
```

## Common Patterns

### Loading States
```tsx
<div class="animate-pulse">
  <div class="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
  <div class="h-4 bg-gray-200 rounded w-1/2"></div>
</div>
```

### Error States
```tsx
<div class="bg-red-50 border border-red-200 rounded-lg p-4">
  <p class="text-red-800">Error message explaining what went wrong.</p>
</div>
```

### Success Messages
```tsx
<div class="bg-green-50 border border-green-200 rounded-lg p-4">
  <p class="text-green-800">Success message confirming the action.</p>
</div>
```

## Animation Snippets

### Fade In on Scroll
```tsx
<FadeIn client:visible delay={0.2} direction="up">
  <!-- Content -->
</FadeIn>
```

### Hover Scale Card
```tsx
<AnimatedCard client:visible delay={0.1} hoverScale={1.02}>
  <!-- Card content -->
</AnimatedCard>
```

### Staggered List
```tsx
{items.map((item, index) => (
  <motion.div
    key={item.id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
  >
    <!-- Item content -->
  </motion.div>
))}
```