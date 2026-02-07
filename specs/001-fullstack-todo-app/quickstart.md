# Quickstart: Phase II - Full Stack Web App

## Prerequisites
- Node.js 20+
- Python 3.12+
- PostgreSQL (Neon or local)

## Setup

### Backend (FastAPI)
1. Navigate to backend: `cd backend`
2. Create virtualenv: `python -m venv venv`
3. Activate: `. venv/bin/activate` (Linux/Mac) or `venv\Scripts\activate` (Win)
4. Install: `pip install -r requirements.txt`
5. Env: Copy `.env.example` to `.env` and set `DATABASE_URL`, `SECRET_KEY`.
6. Run: `uvicorn app.main:app --reload --port 8000`

### Frontend (Next.js)
1. Navigate to frontend: `cd frontend`
2. Install: `npm install`
3. Env: Copy `.env.local.example` to `.env.local` and set `NEXT_PUBLIC_API_URL`.
4. Run: `npm run dev` (runs on port 3000)

## Verification
1. Open `http://localhost:3000`.
2. Sign up for a new account.
3. Verify you are redirected to Dashboard.
4. Create a task "Test Task".
5. Verify it appears in the list.
