# API Contracts: Orange Theme UI Update

**Note**: This feature is a UI update and does NOT change the API contract. The Frontend will continue to consume the existing API as defined in `specs/001-fullstack-todo-app/contracts/api.yaml`.

## Interface Contracts (Component Props)

While HTTP APIs are unchanged, the Internal Component Props are refined.

### 1. Button Component (`components/ui/button.tsx`)

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost' | 'outline'; // Added ghost/outline
  size?: 'sm' | 'md' | 'lg'; // Added size control
  fullWidth?: boolean;
}
```

### 2. Input Component (`components/ui/input.tsx`)

```typescript
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}
// No API change, just styling internal implementation.
```

### 3. Task Item (`components/features/TaskItem.tsx`)

```typescript
interface TaskItemProps {
  task: Task; // Imported from types
  onToggle: () => void;
  onDelete: () => void;
}
// Visual update only: Renders as Card instead of List Item.
```
