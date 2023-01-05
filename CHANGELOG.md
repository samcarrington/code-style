# CHANGELOG

All notable changes to this project will be documented in this file. This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

<div style="display: none;">

## Unreleased

Need to update the section on Babel 7 and support for stages/features

### Added

### Changed

### Removed

### Fixed

</div>

## [4.1.0](https://github.com/samcarrington/code-style/tree/v4.1.0) - 2023-01-04

### Added

- RSS Route and pre-rendering
- Dates to pages

### Changed

- Title tag formatting

## [4.0.3](https://github.com/samcarrington/code-style/tree/v4.0.3) - 2022-12-21



- Packages and Readme updated


## [4.0.2](https://github.com/samcarrington/code-style/tree/v4.0.2) - 2022-12-03

### Changed

- Tweaked package.json to add proper metadata

### Added

- Netlify config now deploys to a custom domain

## [4.0.0](https://github.com/samcarrington/code-style/tree/v4.0.0) - 2022-11-20

### Changed

- Migrate to Nuxt v3 and nuxt/content v2

### Removed

- Eliminate previous branding, header, footer and references to AF

## [3.2.3](https://github.com/AnalogFolk/folk-style/tree/v3.2.3) - Unreleased

### Added

- Brand colour names to tailwind config

### Changed

- New hero gradient
- Header and footer colours to adopt brand standards

## [3.2.2](https://github.com/AnalogFolk/folk-style/tree/v3.2.2) - 2021-08-31

### Added

- Details on WordPress PHP rules as variations from PSRs
- Information relating to install and use of PHP CodeSniffer

## [3.2.1](https://github.com/AnalogFolk/folk-style/tree/v3.2.1) - 2021-08-17

### Changed

- Removed out-dated link to Laravel Best Practices site (now squatted) and
  replaced with a Github link

## [3.2.0](https://github.com/AnalogFolk/folk-style/tree/v3.2.0) - 2021-08-13

### Added

- Page for Python code style and guidance
- Page for TypeScript

### Changed

- Updated patch and minor version dependencies
- Updated to Jest v27
- Update to JavaScript guidelines to cover some 'Better Parts' of ES6
- Updated advice on use of Babel with presets
- Switched `nuxt-i18n` for `@nuxt/i18n`

### Removed

- `nuxt-i18n` package

## [3.1.4](https://github.com/AnalogFolk/folk-style/tree/v3.1.4) - 2021-07-01

### Fixed

- Re-added class name to fix link underline regression

## [3.1.3](https://github.com/AnalogFolk/folk-style/tree/v3.1.3) - 2021-06-30

### Added

- Pride badge
- Hero gradient
- Body background gradient

### Changed

- Moved homepage hero to component
- Automatically generate Table of Contents

## [3.1.2](https://github.com/AnalogFolk/folk-style/tree/v3.1.2) - Unreleased

### Added

- Link to release in footer
- Brand font for body text
- Badges

### Changed

- Use nuxt config to auto-import components
- renamed some components

### Fixed

- Modified responsive footer
- Consistent line-height
- Screen reader text on Github icon link

## [3.1.1](https://github.com/AnalogFolk/folk-style/tree/v3.1.1) - 2021-06-29

### Fixed

- Links to content in the toc.md

## [3.1.0](https://github.com/AnalogFolk/folk-style/tree/v3.1.0) - 2021-06-29

### Added

- added packages `@nuxt/content` and `nuxt-i18n`
- Added front-matter to markdown content
- prism theme for styling code blocks
- Initial content & config to support i18n

### Changed

- Moved markdown to content folder
- moved component files around to add atomic folder structure

### Removed

- @nuxtjs/markdownit

### Fixed

- Pug not found error on build

## [3.0.1](https://github.com/AnalogFolk/folk-style/tree/v3.0.1) - 2021-06-25

### Changed

- References to Bitbucket in chagelog into github tag links

### Fixed

- Hero header max width

## [3.0.0](https://github.com/AnalogFolk/folk-style/tree/v3.0.0) - 2021-06-25

### Added

- Tailwind via `@nuxtjs/tailwindcss`
- MIT license

### Removed

- Buefy and Bulma
- Some Bulma class names

### Changed

- Minor and patch updates to existing dependencies

## [2.0.0](https://github.com/samcarrington/code-style/tree/v2.0.0) - 2021-06-21

### Added

- Known issue: Pug not found error message (project still compiles)
- Buefy
- @nuxt/types

### Changed

- switched to `mode: "static"` in nuxt config
- Update core nuxt and dependencies in package.json
- re-lint files based on 2021 linting config

### Removed

- node-sass
- express
- vuex
- babel-preset-vue-app
- cross-env
- various outdated eslint-config dependencies
- nodemon

## [1.5.0](https://github.com/samcarrington/code-style/tree//v1.5.0) - 2021-06-21

### Changed

- Updated requirement for PSR-2 to PSR-12 in PHP Standards.
- Lowest jQuery version increased to 3.6 (latest at time of publish)
- Order of sections in Table of Contents

### Fixed

- Minor typo

## [1.4.2](https://github.com/samcarrington/code-style/tree/v1.4.2) - 2019-09-19

### Fixed

- Some typos

## [1.4.0](https://github.com/samcarrington/code-style/tree/v1.4.0) - 2019-09-17

### Added

- VueJs Best Practices

## [1.3.3](https://github.com/samcarrington/code-style/tree/v1.3.3) - 2019-07-19

### Added

- Google Analytics

### Fixed

- Uppercase hex colour declarations

### Changed

- Some wording, in CSS and JavaScript sections

## [1.3.2](https://github.com/samcarrington/code-style/tree/v1.3.2) - 2019-07-04

### Fixed

- Broken links in TOC

## [1.3.1](https://github.com/samcarrington/code-style/tree/v1.3.1) - 2019-07-04

### Fixed

- Broken link

## [1.3.0](https://github.com/samcarrington/code-style/tree/v1.3.0) - 2019-07-04

### Added

- Branding - header and footer
- Some links to the PHP section

### Changed

- Split content into page routes
- Link styling

### Removed

- markdown-attrs from headers in markdown source files

### Fixed

- Typos

## [1.2.1](https://github.com/samcarrington/code-style/tree/v1.2.1) - 2019-06-20

### Added

- BEM file structure to SCSS files
- Accessible syntax highlighting
- Bulma class names for titles
- Changelog
- Browserslist support
- More detail on ES6 and Babel

## [1.0.5](https://github.com/samcarrington/code-style/tree/v1.0.5) - 2019-06-19

### Added

- Favicon

### Changed

- Updated Accessibility baseline to WCAG 2.1

### Fixed

- Table of Contents and JS headings correct nesting
- Fixed contrast levels to reach 100/100 Accessibility score in Lighthouse

## [1.0.1](https://github.com/samcarrington/code-style/tree/v1.0.1) - 2019-06-18

### Added

- .NET section first draft
- More details in JavaScript section

## [1.0.0](https://github.com/samcarrington/code-style/tree/v1.0.0) - 2019-06-17

### Changed

- Rebuild using Nuxt
- Updated to AF 2019 branding (mainly just the webfont)

### Fixed

- Some typos and proofing

## [0.0.1](https://github.com/samcarrington/code-style/tree/v0.0.1) - 2016-05-12

### Added

- Initial Prototype using Pug and Yeoman
