# Data Model: Phase II - Full Stack Web App

## Entities

### User
Represents a registered user of the application.

| Field | Type | Required | Unique | Description |
|-------|------|----------|--------|-------------|
| `id` | UUID | Yes | Yes | Primary Key. |
| `email` | String | Yes | Yes | User's email address. Index. |
| `name` | String | Yes | No | Display name. |
| `password_hash`| String | Yes | No | Hashed password. |
| `created_at` | DateTime | Yes | No | UTC timestamp of registration. |

### Task
Represents a todo item belonging to a user.

| Field | Type | Required | Unique | Description |
|-------|------|----------|--------|-------------|
| `id` | UUID | Yes | Yes | Primary Key. |
| `title` | String | Yes | No | Task title. Min length 1. |
| `description` | String | No | No | Optional details. |
| `is_completed` | Boolean | Yes | No | Completion status. Default: false. |
| `user_id` | UUID | Yes | No | Foreign Key to User.id. Index. |
| `created_at` | DateTime | Yes | No | UTC timestamp. Used for sorting. |

## Relationships

- **User** has many **Tasks** (1:N).
- **Task** belongs to one **User** (N:1).
- **Cascading**: Deleting a User deletes all their Tasks.
