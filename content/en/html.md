## HTML

HTML should be prepared using a template language. [Pug](/pug) is recommended
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
  - data-\*
  - src, for, type, href, value
  - title, alt
  - role, aria-\*

### Nesting

HTML Tags should be properly nested per the document specification.
Incorrectly nested tags are usually not a problem if a templating language
is used to generate HTML but can emerge if fragmented HTML is delivered from
multiple partials.

Ideally run pages through the [W3C markup validation service][w3c-validation]
as part of build. This will reveal issues immediately.

### Accessibility

Projects published by AnalogFolk must meet AA checkpoints from
[WCAG 2.1 standards][wcag], and where possible, we should aim for support
of AAA checkpoints.

Full guidelines on implementation of accessible markup is outside the scope of
this document. The [WAVE tool from WebAIM][wave] is a good way to audit your sites.

[pug]: https://pugjs.org/api/getting-started.html
[w3c-validation]: https://validator.w3.org/
[wcag]: https://www.w3.org/TR/WCAG21/
[wave]: https://wave.webaim.org/extension/
