# Folk Style

![GitHub package.json version (branch)](https://img.shields.io/github/package-json/v/AnalogFolk/folk-style/main?style=flat-square)
![Netlify](https://img.shields.io/netlify/a68a85f7-ee00-4dc1-bd8d-e1916b7e4e41?style=flat-square)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
![GitHub](https://img.shields.io/github/license/AnalogFolk/folk-style?style=flat-square)

An opinionated but simple style guide for technical projects authored at
Analogfolk.

## Build Setup

Local setup is simple enough; install dependencies and run the Nuxt project.
The master branch automatically deploys to Netlify.

It's a static (nuxt generated) site. Individual guidelines are Markdown files, 
added to pages via `@nuxt/content`.

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn run dev

# build for production and launch server
$ yarn run build
$ yarn start

# generate static project
$ yarn run generate
```

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).

## TODO

- Improve .NET section
- Add section on Infrastructure as code
- Add API Design principles (REST, versioning etc.)
- Add Typescript section
