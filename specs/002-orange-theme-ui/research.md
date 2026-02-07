# Research: Orange Theme UI Update

**Branch**: `002-orange-theme-ui` | **Date**: 2026-02-07

## Key Decisions

### 1. Color Palette Strategy
**Decision**: Use Tailwind's `orange` and `amber` scales.
- **Primary**: `orange-600` (Vibrant interaction points)
- **Secondary/Accent**: `amber-500` (Subtle highlights)
- **Background**: `slate-50` (Clean, premium feel) instead of stark white.
**Rationale**: Aligns with "Deep Orange/Amber" requirement while maintaining a modern SaaS aesthetic (avoiding "Halloween" look). `orange-600` offers accessible contrast for white text.

### 2. Card Design Pattern
**Decision**: Flat design with subtle `shadow-sm`, increasing to `shadow-md` and `border-orange-500` on hover/focus.
**Rationale**: Meets the "subtle shadows and orange borders for focus" requirement. Modern "premium" feel relies on spacing and subtle depth rather than heavy skeuomorphism.

### 3. Navigation Layout
**Decision**: Sticky glassmorphism header (`backdrop-blur`) with minimalist content.
**Rationale**: "Minimalist navigation bar" suggests removing clutter. Sticky positioning ensures persistent access without consuming viewport space.

### 4. Authentication Forms
**Decision**: Centered "Card" layout with `max-w-md` and distinct branding header.
**Rationale**: Standard pattern for "Professional" apps. Focuses user attention on the form.

## Unknowns & Clarifications (Resolved)

- **NEEDS CLARIFICATION**: "Orangish logo placeholder" - *Resolved*: Will use a text-based logo or simple geometric SVG icon styled with the primary orange color to avoid external asset dependencies.
- **NEEDS CLARIFICATION**: "Premium feel" - *Resolved*: Interpreted as generous whitespace (padding), refined typography (inter/geist), and subtle transitions (`transition-all duration-200`).

## Alternatives Considered

- **Custom CSS Variables vs Tailwind Colors**:
  - *Option*: Define custom hex codes in `globals.css`.
  - *Decision*: Map custom variables to Tailwind utility classes (e.g., `--primary: #ea580c`) to allow easy theme switching later while using Tailwind semantics (`bg-primary`).

- **Material UI / Chakra UI**:
  - *Option*: Use a component library.
  - *Decision*: Rejected. Project constraint mandates "Use Tailwind CSS".
