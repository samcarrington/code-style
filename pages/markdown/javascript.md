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
  which SHOULD be named i, j, k, and so on
- You MUST use camelCase, including names that contain acronyms like "getCss"
  and "htmlLength"
- You MUST name constructor functions with an initial uppercase letter.
- When a symbol is publicly accessible but is not intended for public use, you
  MUST prepend an underscore to the name
- When a symbol is intended to be constant you MUST use all-caps and optionally
  underscores to separate words
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
;(function () {
  function foo() {
    var x = 1
  }
})()
```

### Braces and brackets

The following style of indentation MUST be used for functions (this
is referred to as the One True Brace Style and is a variant of that
used by Kernighan and Ritchie):

```javascript
function func(arg1, arg2) {
  // body
  if (condition) {
    // action
  } else {
    // reaction
  }
}
```

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

```javascript
/**
 * Represents a book.
 * @constructor
 * @param {string} title - The title of the book.
 * @param {string} author - The author of the book.
 */
function Book(title, author) {
  const $el = $(options.parentElement) // The parent of the widget
}
```

### Frameworks and Libraries

At project inception an agreement should be in place as to the frameworks
and/or libraries of use. Even if no library is to be used, the specification
should identify [a consistent pattern][osmani-patterns] (beyond just linting
rules) to be used for the organisation of JavaScript within a project.

#### React

Follow the [Airbnb React/JSX Style Guide][airbnb-react]. Except where it conflicts
with Prettier.

It's recommended that you use the [importable config setting][npm-react-config] from NPM, to ensure conformance with industry standards.

```bash
npm install --save-dev eslint-config-react-app @typescript-eslint/eslint-plugin@^4.0.0 @typescript-eslint/parser@^4.0.0 babel-eslint@^10.0.0 eslint@^7.5.0 eslint-plugin-flowtype@^5.2.0 eslint-plugin-import@^2.22.0 eslint-plugin-jsx-a11y@^6.3.1 eslint-plugin-react@^7.20.3 eslint-plugin-react-hooks@^4.0.8
```

#### Angular

Analogfolk London have not historically used this monolithic framework. But if
a project requires it, follow
[the official Angular style guide][angular-official].

#### jQuery

If you're using jQuery for a project in 2021 the implementation of the
framework should be cleared with senior technologists. You MUST use version
3.6 or higher.

Use of the [jQuery UI Widget factory][jq-widget] is recommended for robust
organisation of your code. Each UI element should be initialised as a widget.

#### Vue

Use [single file components][vue-single-file] to organise the components in
your project. The [official Vue style guide][vue-style] should be followed.

There's a useful article on setting up your IDE for use with Vue and eslint
[on Medium][vue-eslint-medium].

The following list of useful best practices is based on
[Vue Best Practices][vue-best] by Riccardo Polacci

##### Clear event listeners

Ahh memory leaks. Remember to remove listeners created with `$on` by use of
`$off` when `destroyed()`

##### Always use kebab-case for event names

Events are transformed automatically into lower case so declare as they will
be listened to.

```js
// Emitting
this.$emit(
  'my-event'
) // Listening // instead of myEvent
`v-on:my-event`
```

##### Don't call the same method from both created and watch

Don't use the same method in two places, instead make use of the `immediate`
flag on a component to force the watch handler to run on initiation. You can
also implement the `handler()` method inside the watch if it's not required
elsewhere in your component.

```js
watch: {
  myProperty: {
    immediate: true, // forcing handler on initial status
    handler() {
      this.doSomething();
    }
  }
},
methods: {
  doSomething() {
     console.log('doing something...');
  }
},
// Even better solution
watch: {
  myProperty: {
    immediate: true, // forcing handler on initial status
    handler() {
      console.log('doing something...'); // No need to declare a function on methods for 1 use case
    }
  }
},
```

##### Always use :key in v-for loops

Your IDE _should_ warn about this if configured properly. But always add a key
to your loops.

##### Use $\_ for mixins properties

When you add a mixin to a component, the mixin code is merged to the component
and the component has priority. This can lead to overlapping property issues.
Prepend mixin properties with `$_` to avoid this namespace clash. It's a
convention from the VueJs style guide.

However in the style guide they suggest also adding the mixin name. i.e.
`$_MixinName_methodName` however this can negatively impact readability. It
should be enough simply to prepend `$_`.

##### Values used in a mixin should be acquired inside the mixin

If we create a mixin which uses a value from the store but the value is not
defined or grabbed from the store inside the mixin then the Component where
the mixin is defined has to contain the property.

This is error prone. In order to avoid this, the value should be grabbed
inside the mixin. Vue is clever enough to avoid duplication of work.

##### Use PascalCase for single file components

Pascal case has better integration with IDEs so use of this standard gives
better QoL for devs, kebab-case is only a consideration in case insensitive
operating systems.

##### Use a prefix for Base component names

Presentational dumb or pure components should have a prefix in your project
which distinguishes them from other non pure components.

##### Use PascalCase for component names

PascalCase is the convention for constructors and classes. It makes sense
to also use this for Vue components.

##### Use the options order from the Vue style guide

Follow the same order for all options across your project. The [VueJs
convention][vue-options] can be found in the style guide.

##### Never use v-if on the same element as v-for

If you do this, the whole list will have to be iterated through by
your code in order to render the output of a component. It's a big
performance sink.

##### Actions must always return

Vuex actions use async/await and promises. Not returning from an
action will result in unpredictable code execution order.

```js
/** BAD! */

// Store
[SOME_ACTION] () {
   // Doing stuff that takes a while
   console.log('Action done');
}
// Consuming action
async doSomething() {
  await dispatch(SOME_ACTION);
  console.log('Do stuff now');
}
`
This will output:
Do stuff now
Action done
`
```

Instead do this;

```js
// Store
[SOME_ACTION] () {
   // Doing stuff that takes a while
   console.log('Action done');
   Promise.resolve();
}
// Consuming action
async doSomething() {
  await dispatch(SOME_ACTION);
  console.log('Do stuff now');
}
`
This will output:
// Action done
// Do stuff now
`
```

##### Use selectors inside actions and getters

We create selectors for a reason, not only to be used all around the
app, but also within the Vuex Store.

##### Further Reading

1. [https://learn-vuejs.github.io/vue-patterns/patterns/](https://learn-vuejs.github.io/vue-patterns/patterns/)
2. [https://vuejs-tips.github.io/cheatsheet/](https://vuejs-tips.github.io/cheatsheet/)

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
- YUI Theatre - ['JavaScript: The Good Parts'](https://www.youtube.com/watch?v=_DKkVvOt6dk), an inspiring historical view of JS
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
[npm-react-config]: https://www.npmjs.com/package/eslint-config-react-app
[vue-single-file]: https://vuejs.org/v2/guide/single-file-components.html
[vue-style]: https://vuejs.org/v2/style-guide/
[vue-eslint-medium]: https://medium.com/@gogl.alex/how-to-properly-set-up-eslint-with-prettier-for-vue-or-nuxt-in-vscode-e42532099a9c
[vue-best]: https://blog.usejournal.com/vue-js-best-practices-c5da8d7af48d
[vue-options]: https://vuejs.org/v2/style-guide/#Component-instance-options-order-recommended
[underscore-native]: https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore
[svelte-js]: https://svelte.dev/
