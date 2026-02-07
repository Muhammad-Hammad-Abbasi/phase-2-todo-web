# TodoFlow - Phase II Full Stack Todo App

A professional, spec-driven full-stack todo application.

## Tech Stack
- **Frontend**: Next.js 15 (App Router), Tailwind CSS, Better Auth
- **Backend**: FastAPI, SQLModel (Async), PostgreSQL (Neon)
- **Database**: PostgreSQL

## Getting Started

### Prerequisites
- Python 3.12+
- Node.js 20+

### Backend Setup
1. Navigate to `backend/`
2. Install dependencies: `pip install -r requirements.txt`
3. Create `.env` file based on the implementation plan.
4. Run server: `uvicorn app.main:app --reload --port 8000`

### Frontend Setup
1. Navigate to `frontend/`
2. Install dependencies: `npm install`
3. Create `.env.local` file.
4. Run dev server: `npm run dev` (Runs on port 3000)

## Features
- Secure Authentication via Better Auth
- User-isolated Task Management
- Modern, Responsive UI with Tailwind CSS
- Async FastAPI Backend with SQLModel
