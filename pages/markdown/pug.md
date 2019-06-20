## Pug (formerly Jade) {.title .is-2}

[Pug][pug-docs] is a terse templating/pre-processing language used to build HTML.
All the standard practices for HTML apply where relevant to Pug templates
as well.

Adapters are available for PHP, Ruby, and of course JavaScript. This means that
if suited to a project, a consistent template syntax can be deployed across
front and back ends. An adapter does exist for .NET but it's a seemingly
unmaintained project. 

### Syntax {.title .is-3}

Pug syntax is familiar if you use Emmet and is influenced by HAML. It is a
clean, whitespace-sensitive syntax for writing HTML.

#### Class Chaining {.title .is-4}

Chain classes directly after an element

````
input.field.field__large(placeholder = 'Enter your name')
````

[pug-docs]: https://pugjs.org/api/getting-started.html
