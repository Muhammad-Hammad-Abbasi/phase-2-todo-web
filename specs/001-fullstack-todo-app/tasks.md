---
description: "Task list for Phase II - Full Stack Web App implementation and UI Restoration"
---

# Tasks: Phase II - Full Stack Web App

**Input**: Design documents from `specs/001-fullstack-todo-app/` and restoration requirements.
**Prerequisites**: plan.md, spec.md, data-model.md, contracts/api.yaml
**Feature Name**: Full Stack Todo App

**Tests**: Integration tests using `httpx` are included for the backend.

**Organization**: Tasks are grouped by phase, with a specific focus on the Frontend Restoration after a clean install.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel
- **[Story]**: [US1] Auth, [US2] Dashboard, [US3] UI/UX

## Phase 1: Setup & Infrastructure (Backend Verified)

**Purpose**: Project initialization and basic structure. (Backend parts are already implemented).

- [X] T001 Create monorepo root structure with `backend/` and `frontend/` directories
- [X] T002 Initialize Backend: Poetry/pip, `requirements.txt` in `backend/`
- [X] T003 Initialize Frontend: Next.js 15 App Router, Tailwind CSS in `frontend/`
- [X] T004 [P] Configure environment variables: `.env` and `.env.local`
- [X] T005 [P] Setup backend directory structure: `app/api`, `app/core`, etc.
- [X] T006 Setup Database Engine: `backend/app/db/session.py`
- [X] T007 Implement Base SQLModel classes in `backend/app/models/base.py`
- [X] T008 Implement Auth Config: `backend/app/core/config.py`
- [X] T009 Implement Auth Middleware: `backend/app/core/auth.py`
- [X] T010 Setup API Router Root: `backend/app/api/v1/api.py`

---

## Phase 2: Frontend Restoration (CRITICAL - Fresh Install)

**Purpose**: Re-apply design system and core views to the clean Next.js installation.

- [X] T037 [P] [US3] Restore Tailwind directives in `frontend/src/app/globals.css`
- [X] T038 [P] [US3] Restore `frontend/src/app/layout.tsx` with standard `globals.css` import
- [X] T039 [P] [US3] Re-create UI component: `frontend/src/components/ui/button.tsx` with Tailwind
- [X] T040 [P] [US3] Re-create UI component: `frontend/src/components/ui/input.tsx` with Tailwind
- [X] T041 [P] [US3] Re-create UI component: `frontend/src/components/ui/navbar.tsx` with Logo and Logout
- [X] T042 [US1][US2] Implement `frontend/src/app/page.tsx` with Dashboard/Auth-Card conditional logic

---

## Phase 3: Auth & Logic Restoration (Priority: P1)

**Goal**: Restore functional components for Auth and Tasks.

- [X] T011 [P] [US1] Integration test for Auth in `backend/tests/integration/test_auth_dep.py`
- [X] T012 [P] [US1] Create User Model: `backend/app/models/user.py`
- [X] T013 [US1] Implement User CRUD: `backend/app/crud/user.py`
- [X] T043 [US1] Configure Better Auth client in `frontend/lib/auth.ts`
- [X] T044 [US1] Re-create Login/Signup Card components or pages if separate
- [X] T045 [US1] Restore Auth Middleware/Protection in `frontend/middleware.ts`

---

## Phase 4: Dashboard Logic Restoration (Priority: P1)

**Goal**: Restore task management functionality.

- [X] T019 [P] [US2] Integration test for Tasks in `backend/tests/integration/test_tasks.py`
- [X] T020 [P] [US2] Create Task Model: `backend/app/models/task.py`
- [X] T021 [US2] Implement Task CRUD: `backend/app/crud/task.py`
- [X] T022 [P] [US2] Implement Task Endpoints: `backend/app/api/v1/endpoints/tasks.py`
- [X] T046 [P] [US2] Restore Frontend API Client fetch wrapper in `frontend/lib/api.ts`
- [X] T047 [US2] Re-create `frontend/components/features/TaskList.tsx` with isolation logic
- [X] T048 [US2] Re-create `frontend/components/features/AddTaskForm.tsx` with title validation

---

## Phase 5: Final Polish & Verification

- [X] T049 Verify NFR SC-003: Dashboard load time < 500ms
- [X] T050 Verify NFR SC-004: Responsive layout and professional aesthetic
- [X] T051 Run full backend test suite to ensure no regressions: `pytest`

---

## Dependencies & Execution Order

1. **Frontend Restoration (Phase 2)**: Start here to get the basic UI shell back.
2. **Auth Logic (Phase 3)**: Restore session management.
3. **Dashboard Logic (Phase 4)**: Restore data fetching and CRUD.
4. **Verification (Phase 5)**: Ensure everything works together.

## Implementation Strategy

1. **Restoration Mode**: Since the backend is stable and tested, focus exclusively on rebuilding the `frontend/src` directory.
2. **Atomic Components**: Build buttons/inputs first, then layout, then the main page.
3. **Mock-to-Real**: Use existing backend endpoints immediately to verify restoration.