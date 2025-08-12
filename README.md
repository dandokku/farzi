# Farzi-Cafe Website

## Overview

This repository contains a modern, responsive restaurant website built with Reactjs and Tailwind CSS. The website showcases a premium dining experience with elegant design elements, smooth animations, and intuitive user interfaces.

## Features

### 1. **Responsive Navigation Bar**
- Sticky header that changes appearance on scroll
- Mobile-friendly hamburger menu
- Smooth animations using Framer Motion
- Reservation CTA button
- Brand-consistent color scheme (#812B1B, #FFFFFF, #F6F5F5)

### 2. **Hero Section**
- Attractive headline with animated entrance
- Two prominent call-to-action buttons
- Decorative background elements
- Delivery information component

### 3. **Gastronomic Illusion Section**
- Alternating image/text layout
- Hover effects and smooth transitions
- Content-focused design with visual hierarchy
- Responsive grid system

### 4. **Menu Page**
- Tabbed interface for different menu categories
- Animated menu cards with dietary indicators
- Price display and detailed descriptions
- Dietary information key

### 5. **Gallery Component**
- Bento grid layout with varied image sizes
- Fullscreen image viewer with navigation
- Hover effects and smooth transitions
- Responsive design for all screen sizes

### 6. **Contact Section**
- Contact information with icons
- Embedded Google Maps
- Operating hours display
- Consistent styling with brand colors

### 7. **Reservation System**
- Complete booking form with validation
- Date picker and time slot selector
- Guest number selector
- Special requests field
- Confirmation screen
- Reservation details sidebar

### 8. **Footer**
- Multi-column layout
- Quick links navigation
- Contact information
- Newsletter signup
- Social media links
- Copyright information

## Technical Specifications

### Dependencies
- React (v18+)
- React Router (v6+)
- Framer Motion (for animations)
- React Icons (for icon set)
- Tailwind CSS V3+ (for styling)

### Design System
- **Color Palette**:
  - Primary: `#812B1B` (Deep Red)
  - Secondary: `#F6F5F5` (Off-White)
  - Accent: `#FFFFFF` (Pure White)
  - Text Colors: Various shades of gray for readability

- **Typography**:
  - Clean, modern sans-serif fonts
  - Responsive font sizing
  - Strong visual hierarchy

- **Spacing**:
  - Consistent padding and margins
  - Responsive spacing for different screen sizes

### Performance Features
- Lazy loading for images
- Optimized animations
- Efficient component structure
- Responsive image handling

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dandokku/farzi.git
   cd farzi
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── assets/            # Image assets
├── components/        # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── SharedLayout.tsx
├── pages/             # Page components (Each are in their own folders)
│   ├── Home.tsx
│   ├── MenuP.tsx
│   ├── Gallery.tsx
│   ├── Contact.tsx
│   └── Reservation.tsx
├── App.tsx           # Main app component
└── Main.tex           # Entry point
```

## Customization

To customize this website for your restaurant:

1. **Update Brand Colors**:
   Modify the color values directly in the components.

2. **Replace Content**:
   - Update text content in each component
   - Replace images with your restaurant's photos
   - Modify menu items in the Menu component

3. **Configure Contact Information**:
   Update phone numbers, email addresses, and location in the Contact and Footer components.

4. **Adjust Reservation System**:
   - Modify available time slots
   - Update restaurant hours
   - Connect to your booking API if needed (Use Calendly...highly recommended if you don't have your own API)

## Best Practices Implemented

1. **Accessibility**:
   - Proper contrast ratios
   - ARIA attributes where needed
   - Keyboard navigability

2. **Performance**:
   - Optimized image loading
   - Efficient animations
   - Component-based architecture

3. **Responsive Design**:
   - Mobile-first approach
   - Responsive typography
   - Adaptive layouts

4. **Maintainability**:
   - Clean component structure
   - Consistent styling approach
   - Reusable components

## Deployment

The website can be deployed to any static hosting service:
- Vercel
- Netlify
- AWS Amplify
- Firebase Hosting
- GitHub Pages

For most services, simply connect your repository and the build process will be handled automatically.

## License

This project is open-source. Feel free to use it as a template for your restaurant website.

## Support

For any questions or issues, please open an issue in the GitHub repository.
