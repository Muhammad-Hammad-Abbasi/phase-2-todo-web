<!--
Sync Impact Report:
- Version change: 1.0.0 -> 2.0.0 (Major overhaul for Phase II)
- Modified Principles: Defined specific Architecture, Tech Stack, and Workflow principles for Phase II.
- Added Sections: Specific deployment and refactoring constraints.
- Templates: Checked (✅ no immediate structural changes required in templates, content is dynamic).
-->
# The Evolution of Todo (Phase II) Constitution

## Core Principles

### I. Spec-Driven Development (SDD)
We strictly follow Spec-Driven Development. Every line of code must map to a Task ID defined in `speckit.tasks.md`. "Vibe Coding" is strictly prohibited; all work must be planned and tracked.

### II. Monorepo Architecture
The project is a Monorepo containing `/frontend`, `/backend`, `/specs`, and `.env` at the root.
*   **Frontend**: Next.js 15+ (App Router), Tailwind CSS, TypeScript, Better Auth (Stateless JWT).
*   **Backend**: Python FastAPI, SQLModel (Async), Asyncpg.
*   **Database**: Neon Serverless PostgreSQL.
*   **Communication**: Frontend talks to Backend via REST API (port 8000).

### III. Evolution & Refactoring
This phase evolves the Phase I CLI application. All Phase I CLI logic must be migrated into `backend/app/crud/`. No loose Python scripts are allowed in the root. The Frontend must look professional (Card-based layout, consistent styling via Tailwind), avoiding raw HTML.

### IV. Testing Standards
Testing is mandatory for reliability. Specifically, use `httpx.AsyncClient` for backend integration tests to ensure robust API verification.

### V. Development Environment Constraints
**DO NOT use Docker or Docker Compose in Phase II.**
*   **Backend**: Run with `uvicorn backend.app.main:app --reload --port 8000`
*   **Frontend**: Run with `npm run dev` (port 3000)

## Governance

This Constitution supersedes all other practices. Amendments require documentation, approval, and a migration plan. All Pull Requests and Code Reviews must verify compliance with these principles. Complexity must be justified.

**Version**: 2.0.0 | **Ratified**: 2026-02-07 | **Last Amended**: 2026-02-07