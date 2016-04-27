## CSS

### Syntax

- Use two spaces for indentation
- Use a space to separate the colon after the property from its value
- Always end a `property: value` pair with a semicolon and new line
- Use one discreet selector per line in multi-selector rule sets.
- Include a single space before the opening brace of a rule set.
- Use one level of indentation for each declaration
- Use lowercase and shorthand hex values.
- Use single quotes consistently
- Include a space after each comma in comma-separated property or function values
- Separate each rule set with a blank line

### Preprocessing

We use SASS (with SCSS syntax) as a preprocessor of choice. 

- Limit nesting to one level to avoid overly specific selectors
- Always place `@extend` statements on the first line of a declaration

### Units and Colours

- Omit units after "0"
- Omit leading "0"s in values (i.e. `.5em` not `0.5em`)


### Specificity

- Use the least number of selectors required to style an element
- Ideally use BEM and don't stack selectors in your CSS
- Avoid adding element selectors to class definitions
- Avoid using Ids in style definitions

### Class naming 

- Use Kebab case, i.e. hyphens not underscores or camelCase for class names

### Media Queries



### Modularisation

Use SMACSS principles for modular CSS

### Further reading, and acknowledgements

- [Idiomatic CSS](idiomatic) by Nicolas Gallagher

(idiomatic): https://github.com/necolas/idiomatic-css