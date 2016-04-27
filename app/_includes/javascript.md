## JavaScript

It is important to note that JavaScript should be used to enhance the 
user's experience by adding engaging and interactive functionality. It 
is acceptable to use JavaScript to create an interactive widget (for 
example, a carousel or a lightbox), but it is not acceptable to use 
JavaScript where non-dynamic or "plain" HTML and CSS would in normal 
circumstances suffice - that is to say, JavaScript MUST be used only 
where it is strictly necessary. Examples of unnecessary JavaScript:

- Using JavaScript where a normal anchor link (A) would suffice.
- Using JavaScript to submit a form, where the form's action would suffice.
- Using JavaScript to replace images on mouse rollover/rollout, where 
CSS can achieve the same effect.

### Syntax

In common with the file formats and encodings conventions, indent with 
two spaces. Tabs MUST NOT be used. Lines SHOULD be kept to a reasonable 
length; < 100 characters is preferable. An editorConfig file should be 
included in a project to define the acceptable formatting rule for 
other developers.

While ending a statement with a semicolon in JavaScript is in some cases
optional, the rules around this (generally called "Automatic Semicolon 
Insertion", or ASI) are surprisingly complicated. For this reason, 
semicolons MUST be used in all traditional places to terminate lines.

#### Naming

Variables and functions SHOULD have concise but meaningful names. When 
referring to a jQuery wrapped object (for example, a collection returned
from a query selector), it is a common and very useful practice to 
prefix the variable name with the jQuery `$` sigil.

- Use `camelCase` for variables & functions
- Use `UpperCamelCase` for constructors and prototype objects
- Use `CAPITALS_WITH_UNDERSCORES` for constants.

#### Braces and brackets

The following style of indentation MUST be used for functions (this 
is referred to as the One True Brace Style and is a variant of that 
used by Kernighan and Ritchie):

````
function func(arg1, arg2) {
    ... // body
}
````

#### Commenting code

- Short inline comments SHOULD generally follow a line
- Functions and constructors, classes and modules SHOULD be preceeded 
by a header multi-line comment using [JSDoc syntax](jsdoc) to describe 
parameters and return values

````
var $el = $(options.parentElement) // The parent of the widget

/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
}
````

[jsdoc]: http://usejsdoc.org/