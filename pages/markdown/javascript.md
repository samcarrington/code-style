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

A lot can be learned from the [AirBnB ES5 Style Guide](airbnb-es5). It's
recommended that you implement automatic inclusion of the [AirBnB preset](airbnb-preset)
checker when you lint your code.

### Syntax

In common with the file formats and encodings conventions, indent with
two spaces. Tabs MUST NOT be used. Lines SHOULD be kept to a reasonable
length; < 100 characters is preferable. An editorConfig file should be
included in a project to define the acceptable formatting rule for
other developers.

Use of [Standard JS][standard-js] or [Prettier][prettier-js] is recommended 
for code. This allows consistent and predictable layout and formatting. 
Formatting rules should be defined in a project's prettier.rc or eslint.rc 
file to ensure that each developer uses the same set of rules & settings.

Generally - two spaces for indentation, no semi-colons, single quotes are the
preferred set of simple sub-rules for formatting.

#### Naming

Variables and functions SHOULD have concise but meaningful names. When
referring to a jQuery wrapped object (for example, a collection returned
from a query selector), it is a common and very useful practice to
prefix the variable name with the jQuery `$` sigil.

- You SHOULD use self-documenting names, except for enumeration variables, which SHOULD be named i, j, k, and so on.
- You MUST use camelCase, including names that contain acronyms like "getCss"
and "htmlLength".
- You MUST name constructor functions with an initial uppercase letter.
- When a symbol is publicly accessible but is not intended for public use, you 
  MUST prepend an underscore to the name.
- When a symbol is intended to be constant you MUST use all-caps and optionally
  underscores to separate words.

- Use `camelCase` for variables & functions
- Use `UpperCamelCase` for constructors and prototype objects
- Use `CAPITALS_WITH_UNDERSCORES` for constants.

#### Scope

Keeping scope small decreases the possibility of namespace collisions.

- You SHOULD limit the scope of a variable to a single function.
- You MAY use an anonymous function (IIFE) which is executed inline if necessary to keep a variable out of the global scope.
- Anonymous functions that are executed inline MUST be wrapped in parentheses.

```javascript
// this is the global scope
(function() {
    function foo() {
        var x = 1;
    }
})();
```

#### Braces and brackets

The following style of indentation MUST be used for functions (this
is referred to as the One True Brace Style and is a variant of that
used by Kernighan and Ritchie):

````javascript
function func(arg1, arg2) {
  // body
}
````

#### ES2015 & ES6

Feel free to use modern extensions to JavaScript but do not use stage-0 extensions to the ECMAScript standard.

#### Commenting code

- Short inline comments SHOULD generally follow a line
- Functions and constructors, classes and modules SHOULD be preceded
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

#### Frameworks and Libraries

At project inception an agreement should be in place as to the frameworks 
and/or libraries of use. Even if no library is to be used, the specification
should identify [a consistent pattern][osmani-patterns] (beyond just linting rules) to be used 
for the organisation of JavaScript within a project. 

##### React

Follow [the Airbnb React guidelines][airbnb-react]. Except where it conflicts with Prettier.

##### Angular

Analogfolk London have not historically used this monolithic framework. But if
a project requires it, follow 
[the official Angular style guide][angular-official].

##### jQuery

If you're using jQuery for a project in 2019 the implementation of the framework should be cleared with senior technologists.

Use of the [jQuery UI Widget factory][jq-widget] is recommended for robust organisation of your code. Each UI element should be initialised as a widget

##### Vue

Use [single file components][vue-single-file] to organise the components in your project. 

##### Underscore

You may not need underscore/lodash. If you're targeting modern browsers there are [a number of native methods][underscore-native] you can use instead of the utility methods it supplies. However it does provide a uniform interface and API and therefore is supported for use in projects.

##### Svelte

Analogfolk London have not fully evaluated Svelte for use in production
projects. It's recommended to use Vue or React until the framework is 
fully reviewed.

[jsdoc]: http://usejsdoc.org/
[prettier-js]: https://prettier.io/
[standard-js]: https://standardjs.com/
[airbnb-preset]: https://www.npmjs.com/package/eslint-config-airbnb
[osmani-patterns]: https://addyosmani.com/resources/essentialjsdesignpatterns/book
[airbnb-react]: https://github.com/airbnb/javascript/tree/master/react
[angular-official]: https://angular.io/guide/styleguide
[jq-widget]: https://jqueryui.com/widget/
[vue-single-file]: https://vuejs.org/v2/guide/single-file-components.html
[underscore-native]: https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
