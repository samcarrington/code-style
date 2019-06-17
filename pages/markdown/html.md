## HTML

HTML should be prepared using a template language. [Pug][pug] is recommended
for static files.

### Syntax

- Use two spaces for indentation
- Use single quotation marks for attributes
- Don't repeat IDs in a document

### Encoding

- Use UTF-8 encoding and custom characters instead of HTML entities.

### Attributes

- Omit `type` attributes in CSS and JavaScript
- Omit values in boolean attributes
- Comply to the following attribute order ...
  - class
  - id, name
  - data-*
  - src, for, type, href, value
  - title, alt
  - role, aria-*

### Nesting

### Accessibility

Projects published by AnalogFolk must meet AA checkpoints from 
[WCAG 2.0 standards][wcag], and where possible, we should aim for support 
of AAA checkpoints.

### Boilerplate

[pug]: https://pugjs.org/api/getting-started.html
[wcag]: https://www.w3.org/TR/WCAG20/
