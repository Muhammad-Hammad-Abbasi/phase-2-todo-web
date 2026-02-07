# Quickstart: Testing the Orange Theme

## Prerequisites
- Frontend server running: `cd frontend && npm run dev`
- Backend server running (for data): `cd backend && uvicorn app.main:app --reload`

## Visual Verification Scenarios

### 1. Theme Consistency
1. Open `http://localhost:3000`.
2. **Verify**: The background is a soft slate/gray (`#f8fafc`), not stark white.
3. **Verify**: Primary buttons (if visible) are Deep Orange (`#ea580c` approx).

### 2. Authentication UI
1. If logged in, click "Logout".
2. **Verify**: The Login form is centered in a card with a shadow.
3. **Verify**: The "Sign In" button is Orange.
4. **Verify**: Input fields have a subtle border that turns Orange when clicked (focus).

### 3. Task Dashboard
1. Log in.
2. **Verify**: The Navigation bar is sticky and minimalist (Logo + Logout).
3. **Verify**: Task list items appear as individual Cards with spacing between them.
4. **Action**: Hover over a task card.
5. **Verify**: The card shadow increases slightly.
6. **Action**: Tab to a task checkbox.
7. **Verify**: The focus ring is Orange.

### 4. Responsiveness
1. Resize browser window to mobile width (~375px).
2. **Verify**: The Auth form fits with padding.
3. **Verify**: Task cards stack vertically and remain readable.
