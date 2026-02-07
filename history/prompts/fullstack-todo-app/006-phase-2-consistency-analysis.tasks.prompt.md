---
id: "006-phase-2-consistency-analysis"
title: "Phase 2 Consistency Analysis"
stage: "tasks"
date: "2026-02-07"
surface: "agent"
model: "gemini-2.0-flash-thinking-exp"
feature: "fullstack-todo-app"
branch: "001-fullstack-todo-app"
user: "User"
command: "/sp.analyze"
labels: ["analysis", "quality-gate", "consistency"]
links:
  spec: "specs/001-fullstack-todo-app/spec.md"
  plan: "specs/001-fullstack-todo-app/plan.md"
  tasks: "specs/001-fullstack-todo-app/tasks.md"
files_yaml:
  - specs/001-fullstack-todo-app/spec.md
  - specs/001-fullstack-todo-app/plan.md
  - specs/001-fullstack-todo-app/tasks.md
tests_yaml: []
outcome: "Analysis complete. Critical Constitution violation found in Auth strategy."
evaluation: "Critical ambiguity in Auth implementation vs Constitution. Tasks T014 and T008 conflict on Auth strategy."
---

# Prompt

---
description: Perform a non-destructive cross-artifact consistency and quality analysis across spec.md, plan.md, and tasks.md after task generation.
---

## User Input

```text
$ARGUMENTS
```

(See full prompt in context)

# Response

## Specification Analysis Report

| ID | Category | Severity | Location(s) | Summary | Recommendation |
|----|----------|----------|-------------|---------|----------------|
| C1 | Constitution | **CRITICAL** | tasks.md:T014 | **Unauthorized Alternative**: T014 suggests "Configure Better Auth (or custom auth lib)". Constitution Principle II strictly mandates "Better Auth". | Remove "(or custom auth lib)" from T014. Adhere strictly to Better Auth. |
| I1 | Inconsistency | **HIGH** | tasks.md:T008, T013 vs Constitution | **Auth Strategy Conflict**: Tasks T008 (Pwd hashing) and T013 (User CRUD: create) imply backend handles signup/hashing. Better Auth (mandated) typically handles this. | Clarify Auth responsibility. If Better Auth handles signup, remove T008/T013 hashing logic; keep User Sync only. |
| G1 | Coverage | MEDIUM | tasks.md | **Missing NFR Verification**: Success Criteria SC-001 (Signup < 30s) and SC-003 (Dashboard < 500ms) have no specific verification tasks. | Add a Phase 6 task to explicitly benchmark/verify SC-001 and SC-003. |
| A1 | Ambiguity | MEDIUM | tasks.md:T017 | **Implementation Vague**: T017 says "Implement Backend Auth Endpoint (if not fully handled by Better Auth SaaS)". | Determine the integration pattern now. Don't leave architectural decisions to the implementation phase. |
| U1 | Underspecification | LOW | tasks.md:T033 | **Vague Verification**: T033 "Verify CORS" lacks the specific target from FR-008. | Update T033 to "Verify CORS allows http://localhost:3000". |

(See full report in output)
