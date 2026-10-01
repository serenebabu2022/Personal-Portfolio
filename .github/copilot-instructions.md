# Custom Instructions for Copilot

## Development principles

- Prefer reusable React components.
- Use TypeScript instead of plain JavaScript.
- Keep components small and readable.
- Do not introduce dependencies unless necessary.
- Preserve the existing visual design unless explicitly asked to change it.

## Typescript

- Indent with 2 spaces.
- Use camelCase for variable and function names.
- Constants should be in UPPER_CASE with underscores(eg. MAX_SIZE).

## Responsive design

- Design mobile-first.
- Test layouts at mobile, tablet and desktop widths.
- Avoid fixed widths that cause overflow.
- Images should scale responsively.

## Accessibility

- Use semantic HTML.
- Add meaningful alt text to informative images.
- Do not use aria-hidden on interactive elements.
- Use anchor elements for navigation and external links.

## Validation

- Run lint/build after significant code changes.
- Do not repeatedly run the build for minor copy or styling changes.
