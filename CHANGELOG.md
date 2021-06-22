# CHANGELOG

All notable changes to this project will be documented in this file. This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## Unreleased

Still to update - proper buefy/nuxt support to update use of Bulma. Alternatively,
switch to Tailwind. Additionally, an issue with markdown-it and highlight.js is
preventing an update to the latest versions of the related dependencies as we lose 
the `hljs` classname from the container.

### Added

### Changed

### Removed

### Fixed

* Fix Pug not found error on build

## [2.0.0](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v2.0.0/) - 2021-06-21

### Added

* Known issue: Pug not found error message (project still compiles)
* Buefy
* @nuxt/types

### Changed

* switched to `mode: "static"` in nuxt config
* Update core nuxt and dependencies in package.json
* re-lint files based on 2021 linting config

### Removed

* node-sass 
* express
* vuex
* babel-preset-vue-app
* cross-env
* various outdated eslint-config dependencies
* nodemon

### Fixed

## [1.5.0](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v1.5.0/) - 2021-06-21

### Changed

* Updated requirement for PSR-2 to PSR-12 in PHP Standards. 
* Lowest jQuery version increased to 3.6 (latest at time of publish)
* Order of sections in Table of Contents

### Fixed

* Minor typo

## [1.4.2](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v1.4.2/) - 2019-09-19

### Fixed

- Some typos

## [1.4.0](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v1.4.0/) - 2019-09-17

### Added

- VueJs Best Practices

## [1.3.3](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v1.3.3/) - 2019-07-19

### Added

- Google Analytics

### Fixed

- Uppercase hex colour declarations

### Changed

- Some wording, in CSS and JavaScript sections

## [1.3.2](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v1.3.2/) - 2019-07-04

### Fixed

- Broken links in TOC

## [1.3.1](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v1.3.1/) - 2019-07-04

### Fixed

- Broken link

## [1.3.0](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v1.3.0/) - 2019-07-04

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

## [1.2.1](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v1.2.1/) - 2019-06-20

### Added

- BEM file structure to SCSS files
- Accessible syntax highlighting
- Bulma class names for titles
- Changelog
- Browserslist support
- More detail on ES6 and Babel

## [1.0.5](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v1.0.5/) - 2019-06-19

### Added

- Favicon

### Changed

- Updated Accessibility baseline to WCAG 2.1

### Fixed

- Table of Contents and JS headings correct nesting
- Fixed contrast levels to reach 100/100 Accessibility score in Lighthouse

## [1.0.1](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v1.0.1/) - 2019-06-18

### Added

- .NET section first draft
- More details in JavaScript section

## [1.0.0](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v1.0.0/) - 2019-06-17

### Changed

- Rebuild using Nuxt
- Updated to AF 2019 branding (mainly just the webfont)

### Fixed

- Some typos and proofing

## [0.0.1](https://bitbucket.org/analogfolk-ondemand/folk-style/src/v0.0.1/) - 2016-05-12

### Added

- Initial Prototype using Pug and Yeoman
