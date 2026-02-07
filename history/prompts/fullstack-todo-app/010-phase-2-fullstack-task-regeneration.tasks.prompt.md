---
id: "010-phase-2-fullstack-task-regeneration"
title: "Phase 2 Fullstack Task Regeneration"
stage: "tasks"
date: "2026-02-07"
surface: "agent"
model: "gemini-2.0-flash-thinking-exp"
feature: "fullstack-todo-app"
branch: "001-fullstack-todo-app"
user: "User"
command: "/sp.tasks"
labels: ["restoration", "frontend", "tasks"]
links:
  spec: "specs/001-fullstack-todo-app/spec.md"
  ticket: null
  adr: null
  pr: null
files:
  - "specs/001-fullstack-todo-app/tasks.md"
tests: []
---

## Prompt

---
description: Generate an actionable, dependency-ordered tasks.md for the feature based on available design artifacts.
handoffs: 
  - label: Analyze For Consistency
    agent: sp.analyze
    prompt: Run a project analysis for consistency
    send: true
  - label: Implement Project
    agent: sp.implement
    prompt: Start the implementation in phases
    send: true
---

## User Input

```text
$ARGUMENTS
```

... (rest of the prompt) ...

Context for task generation: @frontend/src/app/page.tsx @frontend/src/app/layout.tsx @frontend/src/app/globals.css Act as the **Lead Frontend Developer**. We have just performed a **fresh install** of Next.js because the previous setup was corrupted. The `frontend` folder is now clean and standard. **Critical Task:** Re-apply our "Design System" and "Dashboard Logic" to this fresh installation. **Actions Required:** 1. **Restore `globals.css`:** Ensure standard Tailwind directives are present. 2. **Restore `layout.tsx`:** Ensure `globals.css` is imported correctly. 3. **Implement `page.tsx`:** * Create the professional "Dashboard" view we agreed upon (Navbar, Task List, Add Button). * If the user is NOT logged in, show the professional "Login/Signup" card we designed earlier. 4. **Re-create Components:** Re-generate `src/components/ui/input.tsx`, `button.tsx`, and `navbar.tsx` with Tailwind styling. Execute the restoration of the UI now.

## Response snapshot

Generated a comprehensive `tasks.md` that preserves existing backend completion state while adding a series of "Restoration" tasks (T037-T048) to rebuild the frontend UI from scratch. Organized the phases to focus on infrastructure restoration first, followed by Auth and Dashboard logic.

## Outcome

- ✅ Impact: Established a clear path to recover from frontend corruption.
- 🧪 Tests: None added (restoration focus).
- 📁 Files: Updated `specs/001-fullstack-todo-app/tasks.md`.
- 🔁 Next prompts: `/sp.implement` to execute the restoration.
- 🧠 Reflection: The monorepo structure allows for backend preservation even when the frontend needs a complete wipe and restore.

## Evaluation notes (flywheel)

- Failure modes observed: None.
- Graders run and results (PASS/FAIL): N/A.
- Prompt variant (if applicable): N/A.
- Next experiment (smallest change to try): N/A.
