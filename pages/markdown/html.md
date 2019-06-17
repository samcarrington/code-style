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

HTML Tags should be properly nesting per the document specification.
Incorrectly nested tags are usually not a problem if a templating language 
is used to generate HTML but can emerge if fragmented HTML is delivered from
multiple partials.

### Accessibility

Projects published by AnalogFolk must meet AA checkpoints from 
[WCAG 2.0 standards][wcag], and where possible, we should aim for support 
of AAA checkpoints.

[pug]: https://pugjs.org/api/getting-started.html
[wcag]: https://www.w3.org/TR/WCAG20/
