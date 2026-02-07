# Research: Phase II - Full Stack Web App

**Branch**: `001-fullstack-todo-app` | **Date**: 2026-02-07

## Decisions & Findings

### 1. Authentication & JWT Validation

**Decision**: Use `python-jose` and `OAuth2PasswordBearer` in FastAPI.
**Rationale**: `better-auth` on the frontend generates standard JWTs. The backend must validate them independently. `python-jose` provides robust decoding and verification. `OAuth2PasswordBearer` integrates seamlessly with FastAPI's dependency injection system for protected routes.
**Implementation**:
-   Frontend sends `Authorization: Bearer <token>`.
-   Backend dependency `get_current_user` extracts token.
-   `jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])` verifies signature and expiration.
-   `TokenData` Pydantic model validates payload structure (subject/user_id).

### 2. Database Connection (Neon Serverless)

**Decision**: Use `postgresql+asyncpg` scheme with `poolclass=NullPool`.
**Rationale**: Neon serverless Postgres has a built-in connection pooler (PgBouncer). Using SQLAlchemy's internal pooling (`QueuePool`) conflicts with this and causes connection issues in serverless environments.
**Implementation**:
```python
engine = create_engine(
    DATABASE_URL, # postgresql+asyncpg://...
    poolclass=NullPool,
)
```

### 3. Migration Strategy

**Decision**: Re-implement core logic (Task CRUD) in `backend/app/crud/` rather than file-copy.
**Rationale**: The legacy CLI codebase is not present in the immediate context. Re-implementing ensures the new code strictly follows the `async` patterns required by FastAPI and SQLModel, which differ significantly from typical synchronous CLI scripts.
