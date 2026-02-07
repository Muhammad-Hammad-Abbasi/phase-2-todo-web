---
id: "012-fix-db-and-driver-issues"
title: "Fix DB Driver and Missing Tables"
stage: "green"
date: "2026-02-07"
surface: "agent"
model: "gemini-2.0-flash-thinking-exp"
feature: "fullstack-todo-app"
branch: "001-fullstack-todo-app"
user: "User"
command: "Manual fix for runtime errors"
labels: ["bug-fix", "database", "fastapi", "nextjs"]
links:
  spec: "specs/001-fullstack-todo-app/spec.md"
files:
  - "backend/.env"
  - "backend/init_db.py"
  - "frontend/.env.local"
tests: []
---

## Prompt

(User reported runtime errors: sqlalchemy.exc.InvalidRequestError and relation "user" does not exist)

## Response snapshot

1. Updated `backend/.env` to use `postgresql+asyncpg://` as required by SQLAlchemy's async engine.
2. Created `backend/init_db.py` script to initialize database tables using SQLModel metadata.
3. Successfully executed `init_db.py` to create `user` and `task` tables.
4. Updated `frontend/.env.local` to use `localhost` and verified table name quoting (`"user"`) in API routes.

## Outcome

- ✅ Impact: Resolved critical runtime errors preventing application startup and signup.
- 🧪 Tests: Database tables created and verified via script output.
- 📁 Files: Modified environment configs and added a DB init script.
- 🧠 Reflection: Always ensure database tables are initialized before running the application, especially in a fresh environment. Async SQLAlchemy requires the explicit `+asyncpg` driver in the connection string.
