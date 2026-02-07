# Data Model: Orange Theme UI Update

**Note**: This feature is a UI/Theme update and does not strictly modify the backend data schema. However, the *visual representation* of entities is affected.

## Entities (Visual Only)

### UI Theme Configuration
Defined in `globals.css` (CSS Variables).

| Variable | Value Reference | Usage |
|----------|-----------------|-------|
| `--primary` | `orange-600` | Main buttons, active states, branding |
| `--primary-foreground` | `white` | Text on primary buttons |
| `--ring` | `orange-600` | Focus rings |
| `--radius` | `0.5rem` | Rounded corners for cards/inputs |

### Task Card (UI Component)
Visual mapping of the Backend `Task` entity.

| Visual Attribute | State | Style |
|------------------|-------|-------|
| **Container** | Default | `bg-white`, `border-slate-200`, `shadow-sm` |
| **Container** | Hover/Focus | `border-orange-500` (focus-within), `shadow-md` |
| **Status** | Completed | Title strikethrough, text grayed out |
| **Checkbox** | Checked | `bg-orange-600`, `border-orange-600` |

### Auth Form (UI Component)
Visual container for Login/Signup.

| Visual Attribute | Style |
|------------------|-------|
| **Layout** | Centered Card (`max-w-md`) |
| **Button** | Full width, Primary Orange |
| **Inputs** | Standard styling with Orange focus ring |
