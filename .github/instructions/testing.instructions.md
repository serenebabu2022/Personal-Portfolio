---
name: Testing
description: Testing conventions for this React portfolio project.
applyTo: "**/*.test.ts,**/*.test.tsx"
---

## Testing

- Always use Vitest, never Jest.
- Use React Testing Library for component tests.
- Place tests inside a `describe` block.
- Use nested `describe` blocks for distinct component behaviour or functionality.
- Prefer testing user-visible behaviour rather than implementation details.
