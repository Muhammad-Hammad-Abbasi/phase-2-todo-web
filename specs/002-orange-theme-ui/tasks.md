---
description: "Task list for Orange Theme UI implementation"
---

# Tasks: Orange Theme UI Update

**Input**: Design documents from `specs/002-orange-theme-ui/`
**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/ui-contracts.md
**Feature Name**: Orange Theme UI

**Tests**: Visual verification is the primary testing method for this UI overhaul, as per the specification's independent test criteria.

**Organization**: Tasks are grouped by phase and user story to ensure a consistent "premium" rollout across the application.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel
- **[Story]**: [US1] Premium Experience, [US2] Minimalist Nav, [US3] Task Focus, [US4] Auth Styling

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Establish the core design system tokens.

- [X] T001 Define Deep Orange and Amber color variables in `frontend/src/app/globals.css`

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Update base UI components to support the new theme.

**⚠️ CRITICAL**: Must be completed before applying the theme to feature blocks.

- [X] T002 Update `frontend/src/components/ui/button.tsx` with Orange variants (primary, ghost, outline) and refined hover states
- [X] T003 Update `frontend/src/components/ui/input.tsx` with Orange focus ring and transition-all-smooth styling
- [X] T004 Implement sticky glassmorphism container and orange logo placeholder in `frontend/src/components/ui/navbar.tsx`

**Checkpoint**: Foundation ready - Base components now support the "Orangish" premium tokens.

---

## Phase 3: User Story 1 - Premium Visual Experience (Priority: P1) 🎯 MVP

**Goal**: Apply the global "premium" look and feel to the application shell.

**Independent Test**: Navigating all pages shows consistent `slate-50` background and refined typography.

### Implementation for User Story 1

- [X] T005 [P] [US1] Refine global background and typography system in `frontend/src/app/globals.css`
- [X] T006 [US1] Add global interaction transitions and shadow definitions in `frontend/src/app/globals.css`

**Checkpoint**: Application shell now reflects the premium aesthetic.

---

## Phase 4: User Story 2 & 3 - Navigation & Task Focus (Priority: P2)

**Goal**: Uncluttered navigation and card-based task interaction.

**Independent Test**: Header remains sticky; Task cards show orange borders on focus/hover.

### Implementation for User Story 2

- [X] T007 [US2] Finalize minimalist navigation layout and link styling in `frontend/src/components/ui/navbar.tsx`

### Implementation for User Story 3

- [X] T008 [US3] Redesign task card structure in `frontend/src/components/features/TaskItem.tsx` (Shadows, spacing, layout)
- [X] T009 [US3] Implement orange focus and hover border effects for task cards in `frontend/src/components/features/TaskItem.tsx`
- [X] T010 [US3] Refine task list layout spacing and grid transitions in `frontend/src/components/features/TaskList.tsx`
- [X] T011 [US3] Apply premium card styling to the "Add Task" form in `frontend/src/components/features/AddTaskForm.tsx`

**Checkpoint**: Dashboard is now fully themed with the card-based task system.

---

## Phase 5: User Story 4 - Consistent Authentication Styling (Priority: P3)

**Goal**: Themed and centered authentication forms.

**Independent Test**: Login and Signup forms are centered and use orange action buttons.

### Implementation for User Story 4

- [X] T012 [US4] Update authentication card layout and orange primary buttons in `frontend/src/components/features/AuthForm.tsx`
- [X] T013 [US4] Ensure authentication page layouts in `frontend/src/app/page.tsx` use the premium centered card pattern

**Checkpoint**: End-to-end theme consistency achieved across Auth and Dashboard.

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Final quality assurance and accessibility checks.

- [X] T014 [P] Verify WCAG compliance for orange focus state visibility
- [X] T015 [P] Validate responsive layout stability at 320px width
- [X] T016 Run final visual verification against all scenarios in `specs/002-orange-theme-ui/quickstart.md`

---

## Dependencies & Execution Order

### Phase Dependencies

1. **Phase 1 & 2**: MUST complete first to establish the design tokens.
2. **Phase 3 (MVP)**: Applies the shell styling.
3. **Phase 4 & 5**: Can proceed in parallel once Phase 2 is complete.
4. **Phase 6**: Final polish.

### Implementation Strategy

- **Design System First**: Use T001-T003 to build the "Orangish" toolkit.
- **Incremental Application**: The theme is rolled out component by component to prevent broken visual states.

---

## Parallel Opportunities

- T002 and T003 can be worked on simultaneously.
- T005 and T006 can be worked on simultaneously.
- T014 and T015 (Final Polish) can be worked on simultaneously.