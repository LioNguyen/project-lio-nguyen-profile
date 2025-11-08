# Horizontal Navigation Implementation

## 1. Overview

This document describes the implementation of horizontal scrolling navigation for the portfolio website. The system converts traditional vertical scrolling into smooth horizontal sliding transitions with snap points and wheel event interception.

### 1.1. Key Features

- **Horizontal Scroll**: Full-page horizontal scrolling instead of vertical
- **Smooth Animations**: Framer Motion animations for section transitions
- **Touch/Swipe Support**: Native horizontal swipe gestures on touch devices
- **Snap Points**: CSS scroll-snap for precise section alignment
- **Navigation Integration**: Navbar and buttons navigate between sections programmatically
- **Active Section Tracking**: Automatic detection of currently visible section
- **Responsive Design**: Works on desktop and mobile devices

## 2. Architecture

### 2.1. Component Structure

```
HorizontalScrollContainer (Template)
├── HorizontalSection (Template)
│   └── HomePage (Page)
├── HorizontalSection (Template)
│   └── AboutPage (Page)
├── HorizontalSection (Template)
│   └── SkillsPage (Page)
└── HorizontalSection (Template)
    └── QualificationPage (Page)
```

### 2.2. Core Components

#### 2.2.1. HorizontalScrollContainer

**Location**: `src/core/components/templates/HorizontalScrollContainer/HorizontalScrollContainer.tsx`

**Purpose**: Main container that manages horizontal scrolling behavior

**Features**:
- Full viewport height and width
- Horizontal overflow with hidden scrollbar
- CSS scroll-snap for smooth section alignment
- Framer Motion fade-in animation
- Flex layout for horizontal sections

**Props**:
```typescript
interface HorizontalScrollContainerProps {
  children: ReactNode      // Child sections
  className?: string       // Custom styling
  id?: string             // Container ID (default: 'horizontal-scroll-container')
}
```

#### 2.2.2. HorizontalSection

**Location**: `src/core/components/templates/HorizontalSection/HorizontalSection.tsx`

**Purpose**: Wrapper for individual page sections with scroll-snap alignment

**Features**:
- Full viewport dimensions (100vw × 100vh)
- Scroll-snap alignment to start
- Framer Motion slide-in animation
- Fixed width prevents content overflow

**Props**:
```typescript
interface HorizontalSectionProps {
  children: ReactNode      // Section content
  className?: string       // Custom styling
  id?: string             // Section identifier
}
```

### 2.3. Custom Hook

#### 2.3.1. useHorizontalNavigation

**Location**: `src/core/hooks/horizontalNavigation.ts`

**Purpose**: Manages horizontal navigation state and behavior

**Features**:
- Active section detection based on scroll position
- Programmatic navigation to specific sections
- Native horizontal scroll support (touch swipe on mobile/trackpad)
- Scroll state management
- Section counting and validation

**API**:
```typescript
interface UseHorizontalNavigationReturn {
  activeSection: number              // Current section index
  navigateToSection: (index) => void // Navigate to specific section
  navigateNext: () => void           // Navigate to next section
  navigatePrevious: () => void       // Navigate to previous section
  totalSections: number              // Total number of sections
  isScrolling: boolean               // Scroll in progress
}

// Usage
const { activeSection, navigateNext, navigateToSection } = useHorizontalNavigation()
```

**Options**:
```typescript
interface UseHorizontalNavigationOptions {
  containerId?: string   // Container element ID (default: 'horizontal-scroll-container')
  threshold?: number     // Visibility threshold 0-1 (default: 0.5)
  smooth?: boolean       // Smooth scroll behavior (default: true)
}
```

## 3. Implementation Details

### 3.1. App Structure

**File**: `src/App.tsx`

```typescript
function App() {
  return (
    <QueryProvider>
      <ChakraProvider theme={theme}>
        <Fonts />
        <Navbar />
        <HorizontalScrollContainer>
          <HorizontalSection id="home">
            <HomePage />
          </HorizontalSection>
          <HorizontalSection id="about">
            <AboutPage />
          </HorizontalSection>
          <HorizontalSection id="skills">
            <SkillsPage />
          </HorizontalSection>
          <HorizontalSection id="qualification">
            <QualificationPage />
          </HorizontalSection>
        </HorizontalScrollContainer>
        <Footer />
      </ChakraProvider>
    </QueryProvider>
  )
}
```

### 3.2. Navbar Integration

**File**: `src/core/components/organisms/Navbar/Navbar.tsx`

The Navbar uses the `useHorizontalNavigation` hook to enable click-based navigation:

```typescript
const { navigateToSection } = useHorizontalNavigation()

const handleNavClick = (e: React.MouseEvent, index: number) => {
  e.preventDefault()
  navigateToSection(index)
}

// Each nav item
<a onClick={(e) => handleNavClick(e, index)}>
  {item.name}
</a>
```

### 3.3. HomePage Navigation

**File**: `src/pages/Home/HomePage.tsx`

The HomePage implements "Scroll Right" functionality:

```typescript
const { navigateNext } = useHorizontalNavigation()

// "Say Hello" button navigates to next section
<CustomButton onClick={() => navigateNext()}>
  Say Hello
</CustomButton>

// Scroll indicator button
<button onClick={() => navigateNext()}>
  <BiMouse size={50} />
  <Text>Scroll Right</Text>
  <FaArrowRight className="arrow-right" size={20} />
</button>
```

## 4. Technical Specifications

### 4.1. Scroll Behavior

**CSS Properties**:
```css
/* HorizontalScrollContainer */
.horizontal-scroll-container {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  height: 100vh;
  width: 100%;
}

/* HorizontalSection */
.horizontal-section {
  flex: 0 0 100vw;
  width: 100vw;
  height: 100vh;
  scroll-snap-align: start;
}
```

### 4.2. Native Scroll Support

The implementation uses native browser horizontal scrolling, which supports:
- **Mouse/Trackpad**: Horizontal scroll using Shift + Mouse Wheel or two-finger swipe
- **Touch Devices**: Native horizontal swipe gestures
- **Keyboard**: Arrow keys for navigation (browser default behavior)

```typescript
// Container allows natural horizontal scrolling
<HorizontalScrollContainer
  overflow="hidden"
  overflowX="auto"
  scrollSnapType="x mandatory"
/>
```

### 4.3. Active Section Detection

The hook monitors scroll position to update the active section:

```typescript
const updateActiveSection = () => {
  const scrollLeft = container.scrollLeft
  const containerWidth = container.clientWidth
  
  // Find most visible section based on threshold
  for (let i = 0; i < sections.length; i++) {
    const visibilityRatio = calculateVisibility(section, scrollLeft, containerWidth)
    
    if (visibilityRatio >= threshold) {
      setActiveSection(i)
      break
    }
  }
}
```

## 5. Animation System

### 5.1. Framer Motion Integration

**Container Animation**:
```typescript
<MotionBox
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

**Section Animation**:
```typescript
<MotionBox
  initial={{ opacity: 0, x: 50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.6, ease: 'easeInOut' }}
  viewport={{ once: false, amount: 0.3 }}
>
```

### 5.2. Custom Animations

**HomePage Arrow Animation**:
```typescript
const rightAnimate = keyframes`
  0% { transform: translateX(-3px); }
  100% { transform: translateX(3px); }
`
```

## 6. Responsive Design

### 6.1. Desktop Behavior

- Horizontal scrolling with Shift + Mouse Wheel or trackpad swipe
- Click-based navigation through navbar
- Scroll indicators visible
- Smooth section transitions
- Active section tracking

### 6.2. Mobile Behavior

- Native horizontal swipe gestures
- Touch-based navigation
- Responsive section sizing
- Scroll indicators hidden on small screens

## 7. Browser Compatibility

### 7.1. Supported Features

- **CSS Scroll Snap**: Modern browsers (Chrome 69+, Firefox 68+, Safari 11+)
- **Framer Motion**: All modern browsers with React support
- **Native Horizontal Scroll**: All browsers with overflow-x support
- **Flexbox**: Universal support

### 7.2. Fallback Behavior

If scroll-snap is not supported:
- Basic horizontal scrolling still works
- Manual scroll position management via JavaScript
- Slightly less precise section alignment

## 8. Performance Considerations

### 8.1. Optimizations

- **Memoization**: All components wrapped with `React.memo`
- **Scroll Throttling**: Debounced scroll event handlers
- **Lazy Loading**: Section content loaded as needed
- **CSS Animations**: Hardware-accelerated transforms
- **Hidden Scrollbar**: Reduced visual noise while maintaining functionality

### 8.2. Best Practices

- Keep section count reasonable (4-6 sections)
- Optimize images and assets in sections
- Use will-change CSS for animated elements
- Minimize re-renders during scroll

## 9. Usage Guidelines

### 9.1. Adding New Sections

1. Create page component in `src/pages/`
2. Wrap in `HorizontalSection` with unique ID
3. Add to `HorizontalScrollContainer` in `App.tsx`
4. Update navigation items in config if needed

**Example**:
```typescript
<HorizontalSection id="contact">
  <ContactPage />
</HorizontalSection>
```

### 9.2. Customizing Navigation

To customize threshold or behavior:

```typescript
const { navigateToSection } = useHorizontalNavigation({
  containerId: 'my-container',
  threshold: 0.7,      // 70% visibility required
  smooth: true         // Enable smooth scrolling
})
```

## 10. Testing Recommendations

### 10.1. Unit Tests

- Test `useHorizontalNavigation` hook in isolation
- Verify navigation methods work correctly
- Test active section detection logic

### 10.2. Integration Tests

- Test full navigation flow
- Verify wheel event handling
- Test responsive behavior

### 10.3. E2E Tests (Playwright)

```typescript
test('horizontal navigation works', async ({ page }) => {
  await page.goto('/')
  
  // Click "Say Hello" button
  await page.click('text=Say Hello')
  
  // Verify navigation to about section
  await expect(page.locator('#about')).toBeVisible()
})
```

## 11. Troubleshooting

### 11.1. Common Issues

**Issue**: Sections not snapping correctly
- **Solution**: Verify `scroll-snap-type` and `scroll-snap-align` CSS properties

**Issue**: Horizontal scroll not working with mouse wheel
- **Solution**: Use Shift + Mouse Wheel or enable trackpad horizontal scroll gestures

**Issue**: Navigation not smooth
- **Solution**: Verify `behavior: 'smooth'` in scrollTo options

**Issue**: Active section not updating
- **Solution**: Check threshold value and visibility calculation

### 11.2. Debug Mode

Enable console logging in the hook:

```typescript
const updateActiveSection = () => {
  // Add debug logging
  console.log('Active section:', activeSection)
  console.log('Scroll position:', container.scrollLeft)
}
```

## 12. Future Enhancements

### 12.1. Potential Improvements

- **Progress Indicator**: Visual progress bar showing current section
- **Section Previews**: Thumbnail navigation for quick access
- **Keyboard Navigation**: Arrow keys for section navigation
- **Deep Linking**: URL hash-based navigation to specific sections
- **Gesture Support**: Enhanced touch gesture recognition
- **Animation Variants**: Different animation styles per section

### 12.2. Accessibility Enhancements

- ARIA labels for navigation controls
- Keyboard focus management
- Screen reader announcements
- Reduced motion support

## 13. References

### 13.1. Dependencies

- **React 19**: Core framework
- **Framer Motion 10**: Animation library
- **Chakra UI 2.8**: Component library
- **TypeScript 5.7**: Type safety

### 13.2. Related Documentation

- [Framer Motion Scroll Animations](https://www.framer.com/motion/scroll-animations/)
- [CSS Scroll Snap](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Scroll_Snap)
- [React Hooks Guide](https://react.dev/reference/react)

---

**Document Version**: 1.0  
**Last Updated**: November 7, 2025  
**Author**: AI Assistant via GitHub Copilot
