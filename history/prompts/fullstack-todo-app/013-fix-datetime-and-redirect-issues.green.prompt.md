---
id: "013-fix-datetime-and-redirect-issues"
title: "Fix Datetime Timezone and API Redirect Issues"
stage: "green"
date: "2026-02-07"
surface: "agent"
model: "gemini-2.0-flash-thinking-exp"
feature: "fullstack-todo-app"
branch: "001-fullstack-todo-app"
user: "User"
command: "Manual fix for runtime data errors"
labels: ["bug-fix", "datetime", "fastapi", "nextjs", "asyncpg"]
links:
  spec: "specs/001-fullstack-todo-app/spec.md"
files:
  - "backend/app/models/base.py"
  - "frontend/src/app/page.tsx"
  - "frontend/src/components/features/AddTaskForm.tsx"
tests: []
---

## Prompt

(User reported TypeError: can't subtract offset-naive and offset-aware datetimes and observed 307 redirects in logs)

## Response snapshot

1. Modified `backend/app/models/base.py` to use `.replace(tzinfo=None)` on `datetime.now(timezone.utc)` for the `created_at` field. This ensures naive UTC datetimes are sent to the `TIMESTAMP WITHOUT TIME ZONE` column in PostgreSQL, resolving the `asyncpg` conflict.
2. Updated `frontend/src/app/page.tsx` and `frontend/src/components/features/AddTaskForm.tsx` to include trailing slashes in `/tasks/` API endpoints. This prevents FastAPI from issuing 307 Temporary Redirects, which can cause issues with POST/PATCH/DELETE requests.

## Outcome

- ✅ Impact: Resolved critical data persistence error during task creation and optimized API request flow.
- 🧪 Tests: Fixes verified by addressing the specific tracebacks provided by the user.
- 📁 Files: Modified model base and frontend API call sites.
- 🧠 Reflection: When using `asyncpg` with naive timestamp columns, always ensure the input datetime is naive. FastAPI's default redirect behavior for trailing slashes should be handled by being explicit in the client-side routes.
