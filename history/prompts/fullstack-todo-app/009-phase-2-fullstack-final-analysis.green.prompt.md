---
id: "009-phase-2-fullstack-final-analysis"
title: "Phase 2 Fullstack Final Analysis"
stage: "green"
date: "2026-02-07"
surface: "agent"
model: "gemini-2.0-flash-thinking-exp"
feature: "fullstack-todo-app"
branch: "001-fullstack-todo-app"
user: "User"
command: "/sp.analyze"
labels: ["analysis", "quality-gate", "final-check"]
links:
  spec: "specs/001-fullstack-todo-app/spec.md"
  plan: "specs/001-fullstack-todo-app/plan.md"
  tasks: "specs/001-fullstack-todo-app/tasks.md"
files_yaml:
  - specs/001-fullstack-todo-app/tasks.md
tests_yaml: []
outcome: "Analysis complete. All tasks verified complete. No critical issues."
evaluation: "Feature implementation matches Specification and Constitution. Ready for handoff."
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

(See full report in output)

**No CRITICAL issues detected.** All tasks are marked complete and align with the specification and constitution.
