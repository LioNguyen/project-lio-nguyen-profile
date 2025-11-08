# 🎨 Modern React Portfolio - Lio Nguyen

> A modern, performant portfolio application built with React 19, TypeScript, and Tailwind CSS following industry best practices.

[![React](https://img.shields.io/badge/React-19.0.0-blue.svg)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-blue.svg)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0.7-purple.svg)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1.12-cyan.svg)](https://tailwindcss.com/)

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Start development server
bun dev

# Build for production
bun build

# Run tests
bun test

# Type check
bun type-check
```

Visit `http://localhost:5173` to view the app.

## ✨ Features

- 🎯 **Modern React 19** with latest features and patterns
- 📦 **TypeScript 5.7** for type safety
- ⚡ **Vite 6** for lightning-fast development
- 🎨 **Tailwind CSS v4** for utility-first styling
- 🧩 **Atomic Design** component architecture
- 📱 **Fully Responsive** design
- 🔄 **React Query** for server state management
- 🗃️ **Zustand** for client state management
- 🧪 **Vitest** for unit testing
- 🎭 **Playwright** for E2E testing
- 📚 **Storybook** for component documentation
- 🔍 **ESLint** for code quality

## 📁 Project Structure

```
src/
├── core/                   # Core application infrastructure
│   ├── api/                # API layer and React Query setup
│   ├── components/         # Reusable UI components
│   │   ├── atoms/          # Basic UI building blocks
│   │   ├── molecules/      # Composite components
│   │   ├── organisms/      # Complex UI sections
│   │   └── templates/      # Page layouts
│   ├── config/             # App configuration
│   ├── hooks/              # Core custom hooks
│   └── routing/            # Route definitions
├── pages/                  # Page components
├── shared/                 # Shared utilities
│   ├── assets/             # Images, fonts, etc.
│   ├── hooks/              # Custom hooks
│   ├── lib/                # Utility functions
│   ├── store/              # State management
│   └── types/              # TypeScript types
└── test/                   # Test configuration
```

## 🏗️ Architecture

This project follows modern React architecture principles:

- **Atomic Design Pattern** for component organization
- **Domain-Driven Design** for business logic separation
- **React.FC with memo** for component definitions
- **Structured imports** with path aliases
- **Zustand** for global state
- **React Query** for server state
- **Tailwind CSS** for styling

See [Technical Architecture](/.ai/rules/technical-architecture-rule.md) for details.

## 🎯 Tech Stack

### Core
- **React 19.0.0** - UI library with latest features
- **TypeScript 5.7.2** - Type-safe JavaScript
- **Vite 6.0.7** - Next-generation frontend tooling

### State Management
- **@tanstack/react-query 5.62.11** - Server state management
- **zustand 5.0.2** - Lightweight state management

### Styling
- **Tailwind CSS 4.1.12** - Utility-first CSS framework
- **@chakra-ui/react 2.8.1** - Component library (gradual migration)
- **Framer Motion 10.16.5** - Animation library

### Testing
- **Vitest 2.1.8** - Unit testing framework
- **@playwright/test 1.49.1** - E2E testing
- **@testing-library/react 16.1.0** - React testing utilities

### Development Tools
- **ESLint** - Code linting
- **Storybook 7.x** - Component documentation
- **Bun** - Fast package manager

## 📝 Development Guidelines

### Component Standards

All components follow these standards:

```typescript
import { memo } from 'react'
import type { FC } from 'react'

interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  variant?: 'primary' | 'secondary'
}

export const Button: FC<ButtonProps> = memo(({ children, onClick, variant = 'primary' }) => {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'
```

### Import Organization

```typescript
// External libraries (alphabetical)
import { memo, useCallback } from 'react'
import { useQuery } from '@tanstack/react-query'
import type { FC } from 'react'

// Internal components
import { Button } from '@/core/components/atoms'

// Hooks and utilities
import { useDevice } from '@/shared/hooks'

// Types
import type { User } from '@/shared/types'
```

### Path Aliases

- `@/core/*` - Core infrastructure
- `@/pages/*` - Page components  
- `@/shared/*` - Shared utilities
- `@/test/*` - Test utilities

## 🧪 Testing

### Unit Tests

```bash
# Run all tests
bun test

# Run tests in watch mode
bun test --watch

# Run tests with UI
bun test --ui
```

### E2E Tests

```bash
# Run E2E tests
bun test:e2e

# Run E2E tests with UI
bun test:e2e --ui
```

## 📦 Build & Deploy

```bash
# Build for production
bun build

# Preview production build
bun preview
```

The build output will be in the `dist/` directory.

## 🔄 Migration Status

This project is currently being refactored to follow modern React architecture principles. See:

- [Architecture Refactoring Guide](ARCHITECTURE_REFACTORING.md)
- [Refactoring Summary](REFACTORING_SUMMARY.md)
- [Quick Reference](QUICK_REFERENCE.md)

**Current Progress**: Infrastructure complete (45%), component migration in progress

## 📚 Documentation

- [Architecture Rules](/.ai/rules/technical-architecture-rule.md) - Technical architecture standards
- [Core Development Rules](/.ai/rules/core-development-rule.md) - Development principles
- [Architecture Refactoring](ARCHITECTURE_REFACTORING.md) - Migration guide
- [Quick Reference](QUICK_REFERENCE.md) - Quick lookup guide

## 🤝 Contributing

1. Follow the architecture guidelines in `.ai/rules/`
2. Use React.FC with memo for all components
3. Maintain import organization standards
4. Add tests for new components
5. Update documentation

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Lio Nguyen**
- GitHub: [@LioNguyen](https://github.com/LioNguyen)
- LinkedIn: [lio-nguyen](https://www.linkedin.com/in/lio-nguyen/)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
