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

It's recommended that you implement Prettier to automatically lint and format
your code during editing. 

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

#### .prettierrc
```json
{
  "semi": false,
  "singleQuote": true
}
```

Generally - two spaces for indentation, no semi-colons, single quotes are the
preferred set of simple sub-rules for formatting.

### Naming 

Variables and functions SHOULD have concise but meaningful names. When
referring to a jQuery wrapped object (for example, a collection returned
from a query selector), it is a common and very useful practice to
prefix the variable name with the jQuery `$` sigil.

- You SHOULD use self-documenting names, except for enumeration variables, 
  which SHOULD be named i, j, k, and so on.
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

### Scope

Keeping scope small decreases the possibility of namespace collisions.

- You SHOULD limit the scope of a variable to a single function.
- You MAY use an anonymous function (IIFE) which is executed inline if
  necessary to keep a variable out of the global scope.
- Anonymous functions that are executed inline MUST be wrapped in parentheses.

```javascript
// this is the global scope
(function() {
  function foo() {
    var x = 1;
  }
})();
```

### Braces and brackets

The following style of indentation MUST be used for functions (this
is referred to as the One True Brace Style and is a variant of that
used by Kernighan and Ritchie):

````javascript
function func(arg1, arg2) {
  // body
  if (condition) {
    // action
  } else {
    // reaction
  }
}
````

Indentation and bracketing style should be enforced on save or pre-commit
through an automated linting rule, such as in use for this documentation.

Prettier as a code-quality tool is both highly opinionated and also automated
so if it is implemented in a project, the code style enforcement looks after
itself.

### ES2015 & ES6

As of v7, [Babel have deprecated the official Stage presets][babel-7]. This 
makes it tougher to set a mandatory and consistent level of support for 
language features which developers want to use, and rely on Babel to transpile
them into your required platform support level. Use of `preset-env` allows a
project-wide setting (based on browserlist) for babel to target the same
support level as specified in the initial technical specification for a
project. Generally though, for legibility, support and adoption of your code,
lean toward stage-2 to stage-3 standards and avoid stage-1 and stage-0.

It's recommended that you use a `.browserslistrc` file to mandate the support
level for any transpilation but also to declare in version control the mandated
support level for your project, based on that stated in the technical
specification.

[Babel upgrade][babel-upgrade] can be used in existing projects to project 
them into the right state for Babel 7 support. The table of language 
features as they stood at the point of being deprecated is as follows:

```json
{
  "plugins": [
    // Stage 0
    "@babel/plugin-proposal-function-bind",

    // Stage 1
    "@babel/plugin-proposal-export-default-from",
    "@babel/plugin-proposal-logical-assignment-operators",
    ["@babel/plugin-proposal-optional-chaining", { "loose": false }],
    ["@babel/plugin-proposal-pipeline-operator", { "proposal": "minimal" }],
    ["@babel/plugin-proposal-nullish-coalescing-operator", { "loose": false }],
    "@babel/plugin-proposal-do-expressions",

    // Stage 2
    ["@babel/plugin-proposal-decorators", { "legacy": true }],
    "@babel/plugin-proposal-function-sent",
    "@babel/plugin-proposal-export-namespace-from",
    "@babel/plugin-proposal-numeric-separator",
    "@babel/plugin-proposal-throw-expressions",

    // Stage 3
    "@babel/plugin-syntax-dynamic-import",
    "@babel/plugin-syntax-import-meta",
    ["@babel/plugin-proposal-class-properties", { "loose": false }],
    "@babel/plugin-proposal-json-strings"
  ]
}
```

### Commenting code

- Short inline comments SHOULD generally follow a line
- Functions and constructors, classes and modules SHOULD be preceded
by a header multi-line comment using [JSDoc syntax](jsdoc) to describe
parameters and return values

````javascript
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
  const $el = $(options.parentElement) // The parent of the widget
}
````

### Frameworks and Libraries

At project inception an agreement should be in place as to the frameworks 
and/or libraries of use. Even if no library is to be used, the specification
should identify [a consistent pattern][osmani-patterns] (beyond just linting
rules) to be used for the organisation of JavaScript within a project. 

#### React

Follow [the Airbnb React guidelines][airbnb-react]. Except where it conflicts
with Prettier.

#### Angular

Analogfolk London have not historically used this monolithic framework. But if
a project requires it, follow 
[the official Angular style guide][angular-official].

#### jQuery

If you're using jQuery for a project in 2019 the implementation of the
framework should be cleared with senior technologists. You MUST yse version
3.1 or higher.

Use of the [jQuery UI Widget factory][jq-widget] is recommended for robust
organisation of your code. Each UI element should be initialised as a widget

#### Vue

Use [single file components][vue-single-file] to organise the components in
your project. The [official Vue style guide][vue-style] should be followed.

There's a useful article on setting up your IDE for use with Vue and eslint
[on Medium][vue-eslint-medium].

#### Underscore

You may not need underscore/lodash. If you're targeting modern browsers there
are [a number of native methods][underscore-native] you can use instead of the
utility methods it supplies. However it does provide a uniform interface and
API and therefore is supported for use in projects.

#### Svelte

Analogfolk London have not fully evaluated [Svelte][svelte-js] for use in
production projects. It's recommended to use Vue or React until the 
framework is fully reviewed.

### Further reading

- [Google JS-Doc reference](https://google.github.io/styleguide/jsguide.html#appendices-jsdoc-tag-reference)
- [You Don't Know JS](https://github.com/getify/You-Dont-Know-JS)
- [YUI Theatre - 'JavaScript: The Good Parts', an inspiring historical view of JS](https://www.youtube.com/watch?v=_DKkVvOt6dk)
- [Notes on Crockford's "Javascript The Good Parts"](https://github.com/dwyl/Javascript-the-Good-Parts-notes)

[jsdoc]: http://usejsdoc.org/
[prettier-js]: https://prettier.io/
[standard-js]: https://standardjs.com/
[airbnb-preset]: https://www.npmjs.com/package/eslint-config-airbnb
[babel-7]: https://babeljs.io/blog/2018/07/27/removing-babels-stage-presets
[babel-upgrade]: https://github.com/babel/babel-upgrade
[osmani-patterns]: https://addyosmani.com/resources/essentialjsdesignpatterns/book
[airbnb-react]: https://github.com/airbnb/javascript/tree/master/react
[angular-official]: https://angular.io/guide/styleguide
[jq-widget]: https://jqueryui.com/widget/
[vue-single-file]: https://vuejs.org/v2/guide/single-file-components.html
[vue-style]: https://vuejs.org/v2/style-guide/
[vue-eslint-medium]: https://medium.com/@gogl.alex/how-to-properly-set-up-eslint-with-prettier-for-vue-or-nuxt-in-vscode-e42532099a9c
[underscore-native]: https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
[svelte-js]: https://svelte.dev/
